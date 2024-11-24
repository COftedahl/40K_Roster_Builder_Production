import { Color, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { UnitSelection } from "../Army_Constants/Army_Constants";
import download from 'downloadjs';

interface saveRosterPDFProps {
  rosterName: string;
  rosterOwner: string;
  faction: string;
  army: string;
  detachment: string;
  rosterCost: number;
  armyUnits: UnitSelection[];
  allyUnits: UnitSelection[];
}

const gameEdition: string = "10";
const gameEditionString: string = gameEdition + "th Edition: Index Points";

const saveRosterPDF = async (props: saveRosterPDFProps): Promise<boolean> => {
  try {
    const formatter = new Intl.DateTimeFormat('en', {year: 'numeric', month: 'long', day: '2-digit', hourCycle: 'h24', hour: '2-digit', minute: '2-digit', second: '2-digit'});
    //to get current date & time, use formatter.format();

    const pdfDoc = await PDFDocument.create();
    const pdfPage = pdfDoc.addPage();
    const {width, height} = pdfPage.getSize();
  
    const headerColor: Color = rgb(0.1, 0.4, 0.8);
    const whiteColor: Color = rgb(1.0, 1.0, 1.0);
    const blackColor: Color = rgb(0.0, 0.0, 0.0);
    const lightGreyColor: Color = rgb(0.85, 0.85, 0.88);
    const darkGreyColor: Color = rgb(0.3, 0.3, 0.33);
    const pdfFont = await pdfDoc.embedFont(StandardFonts.Helvetica);//standard font size = 24
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    //draw header
    pdfPage.drawRectangle({color: headerColor, x: 5, y: height - 50, height: 30, width: width - 10});
    pdfPage.drawCircle({x: 15, y: height - 20, size: 10, color:headerColor});
    pdfPage.drawCircle({x: width - 15, y: height - 20, size: 10, color:headerColor});
    pdfPage.drawRectangle({color: headerColor, x: 15, y: height - 20, height: 10, width: width - 30});
    pdfPage.drawText(props.rosterName, {x: (width - pdfFont.widthOfTextAtSize(props.rosterName, 24)) / 2, y: height - 40, size: 24, color: whiteColor, font: boldFont})
    
    //draw roster metadata
    let currYPos: number = height - 70;
    pdfPage.drawRectangle({opacity: 0.0, borderOpacity: 1.0, x: 5, y: currYPos - 10, height: 30, width: (width - 10) / 2, borderColor: darkGreyColor});
    pdfPage.drawRectangle({opacity: 0.0, borderOpacity: 1.0, x: width / 2, y: currYPos - 10, height: 30, width: (width - 10) / 2, borderColor: darkGreyColor});
    pdfPage.drawText((props.army.length > 0 ? props.army : "") + (props.detachment.length > 0 ? ": " + props.detachment : ""), 
        {x: 10, y: currYPos, size: 14, color: blackColor, maxWidth: (width / 2) - 15});
    pdfPage.drawText(props.rosterOwner, 
        {x: (width / 2) + 5, y: currYPos, size: 14, color: blackColor, maxWidth: (width / 2) - 15});
    currYPos -= 30;
    pdfPage.drawRectangle({opacity: 0.0, borderOpacity: 1.0, x: 5, y: currYPos - 10, height: 30, width: (width - 10) / 2, borderColor: darkGreyColor});
    pdfPage.drawRectangle({opacity: 0.0, borderOpacity: 1.0, x: width / 2, y: currYPos - 10, height: 30, width: (width - 10) / 2, borderColor: darkGreyColor});
    pdfPage.drawText(props.rosterCost + " points | " + gameEditionString, 
        {x: 10, y: currYPos, size: 14, color: blackColor, maxWidth: (width / 2) - 15});
    pdfPage.drawText(formatter.format(), 
        {x: (width / 2) + 5, y: currYPos, size: 14, color: blackColor, maxWidth: (width / 2) - 15});
    currYPos -= 40;

    //draw roster entries
      //draw army roster entries
    pdfPage.drawText("Army Units", 
      {x: 5, y: currYPos, size: 20, color: blackColor, font: boldFont});
    currYPos -= 15;
    let drawGreyBackground = true;//flag to alternate grey/white lines in the roster
    //draw field headers
    if (props.armyUnits.length > 0) {
      pdfPage.drawText("Unit Name", {x: 15, y: currYPos, maxWidth: (width - 20) * (3/8), color: blackColor, size: 10, font: boldFont});
      pdfPage.drawText("Cost (pts)", {x: 15 + (width - 20) * (3/8), y: currYPos, maxWidth: (width - 20) / 8, color: blackColor, size: 10, font: boldFont});
      pdfPage.drawText("Unit Size", {x: 15 + (width - 20) / 2, y: currYPos, maxWidth: (width - 20) / 4, color: blackColor, size: 10, font: boldFont});
      pdfPage.drawText("Unit Type and Enhancements", {x: 15 + (width - 20) * (3/4), y: currYPos, maxWidth: (width - 20) / 4, color: blackColor, size: 10, font: boldFont});
    }
    //draw unit list
    for (let unit of props.armyUnits) {
      currYPos -= 15;
      if (drawGreyBackground) {
        pdfPage.drawRectangle({x: 10, y: currYPos - 3.5, height: 15, width: width - 20, color: lightGreyColor});
      }
      drawGreyBackground = !drawGreyBackground;
      pdfPage.drawText(unit.name, {x: 15, y: currYPos, maxWidth: (width - 20) * (3/8), color: blackColor, size: 10});
      pdfPage.drawText("" + (unit.costOptions[unit.selectedSizeIndex].cost + (unit.enhancement && unit.enhancement.doesCostPoints ? unit.enhancement.cost : 0)), {x: 15 + 18 + (width - 20) * (3/8) - pdfFont.widthOfTextAtSize("" + (unit.costOptions[unit.selectedSizeIndex].cost + (unit.enhancement && unit.enhancement.doesCostPoints ? unit.enhancement.cost : 0)), 10), y: currYPos, maxWidth: (width - 20) / 8, color: blackColor, size: 10});
      pdfPage.drawText(unit.costOptions[unit.selectedSizeIndex].modelCountString, {x: 15 + (width - 20) / 2, y: currYPos, maxWidth: (width - 20) / 4, color: blackColor, size: 10});
      pdfPage.drawText((unit.unitType ? unit.unitType : ""), {x: 15 + (width - 20) * (3/4), y: currYPos, maxWidth: (width - 20) / 4, color: blackColor, size: 10});
      if (unit.enhancement) {
        currYPos -= 15;
        if (!drawGreyBackground) {
          pdfPage.drawRectangle({x: 10, y: currYPos - 3.5, height: 15, width: width - 20, color: lightGreyColor});
        }
        pdfPage.drawText(" with " + unit.enhancement.name, {x: (width - 15 - pdfFont.widthOfTextAtSize(" with " + unit.enhancement.name, 10) < 15 + (width - 20) * (3/4) ? width - 15 - pdfFont.widthOfTextAtSize(" with " + unit.enhancement.name, 10) : 15 + (width - 20) * (3/4)), y: currYPos, color: blackColor, size: 10})
      }
      // pdfPage.drawText((unit.unitType ? (unit.unitType === UnitType.CHARACTERS && unit.enhancement ? unit.unitType + " with " + unit.enhancement.name : unit.unitType) : ""), {x: 15 + (width - 20) * (3/4), y: currYPos, maxWidth: (width - 20) / 4, color: blackColor, size: 10});
    }
    currYPos -= 40;

      //draw ally roster entries
    pdfPage.drawText("Ally Units", 
      {x: 5, y: currYPos, size: 20, color: blackColor, font: boldFont});
    currYPos -= 15;
    drawGreyBackground = true;
    //draw field headers
    if (props.allyUnits.length > 0) {
      pdfPage.drawText("Unit Name", {x: 15, y: currYPos, maxWidth: (width - 20) * (3/8), color: blackColor, size: 10, font: boldFont});
      pdfPage.drawText("Cost (pts)", {x: 15 + (width - 20) * (3/8), y: currYPos, maxWidth: (width - 20) / 8, color: blackColor, size: 10, font: boldFont});
      pdfPage.drawText("Unit Size", {x: 15 + (width - 20) / 2, y: currYPos, maxWidth: (width - 20) / 4, color: blackColor, size: 10, font: boldFont});
      pdfPage.drawText("Unit Type and Enhancements", {x: 15 + (width - 20) * (3/4), y: currYPos, maxWidth: (width - 20) / 4, color: blackColor, size: 10, font: boldFont});
    }
    //draw unit list
    for (let unit of props.allyUnits) {
      currYPos -= 15;
      if (drawGreyBackground) {
        pdfPage.drawRectangle({x: 10, y: currYPos - 3.5, height: 15, width: width - 20, color: lightGreyColor});
      }
      drawGreyBackground = !drawGreyBackground;
      pdfPage.drawText(unit.name, {x: 15, y: currYPos, maxWidth: (width - 20) * (3/8), color: blackColor, size: 10});
      pdfPage.drawText("" + (unit.costOptions[unit.selectedSizeIndex].cost + (unit.enhancement && unit.enhancement.doesCostPoints ? unit.enhancement.cost : 0)), {x: 15 + 18 + (width - 20) * (3/8) - pdfFont.widthOfTextAtSize("" + (unit.costOptions[unit.selectedSizeIndex].cost + (unit.enhancement && unit.enhancement.doesCostPoints ? unit.enhancement.cost : 0)), 10), y: currYPos, maxWidth: (width - 20) / 8, color: blackColor, size: 10});
      pdfPage.drawText(unit.costOptions[unit.selectedSizeIndex].modelCountString, {x: 15 + (width - 20) / 2, y: currYPos, maxWidth: (width - 20) / 4, color: blackColor, size: 10});
      pdfPage.drawText((unit.unitType ? unit.unitType : ""), {x: 15 + (width - 20) * (3/4), y: currYPos, maxWidth: (width - 20) / 4, color: blackColor, size: 10});
      if (unit.enhancement) {
        currYPos -= 15;
        if (!drawGreyBackground) {
          pdfPage.drawRectangle({x: 10, y: currYPos - 3.5, height: 15, width: width - 20, color: lightGreyColor});
        }
        pdfPage.drawText(" with " + unit.enhancement.name, {x: (width - 15 - pdfFont.widthOfTextAtSize(" with " + unit.enhancement.name, 10) < 15 + (width - 20) * (3/4) ? width - 15 - pdfFont.widthOfTextAtSize(" with " + unit.enhancement.name, 10) : 15 + (width - 20) * (3/4)), y: currYPos, color: blackColor, size: 10})
      }
      // pdfPage.drawText((unit.unitType ? (unit.unitType === UnitType.CHARACTERS && unit.enhancement ? unit.unitType + " with " + unit.enhancement.name : unit.unitType) : ""), {x: 15 + (width - 20) * (3/4), y: currYPos, maxWidth: (width - 20) / 4, color: blackColor, size: 10});
    }

    //download doc
    const pdfBytes = await pdfDoc.save();
    const result = download(pdfBytes, "Roster - " + props.rosterName + ".pdf", "application/pdf");
    if (typeof result === 'boolean') {
      return result;
    }
    return result.status === 200;
  }
  catch (e) {
    console.error(e);
    return false;
  }
}

export default saveRosterPDF;