import { Backdrop, Box, IconButton } from "@mui/material";
import { ReactEventHandler, useEffect, useState } from "react";
import fileExists from "../../UtilityComponents/Functions/FileExists";

interface CustomCharactersHelpPopupProps {
  open: boolean, 
  closePopup: () => void, 
  faction: string, 
}

const CustomCharactersHelpPopup: React.FC<CustomCharactersHelpPopupProps> = (props: CustomCharactersHelpPopupProps) => {

  const [pdfSrc, setPdfSrc] = useState<string>("src/assets/Invalid.txt");

  const handleClosePopup = () => {
    props.closePopup();
  }

  const handleBoxClicked: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const getFileName = async (faction: string) => {
    const fileName: string = "src/assets/Custom Characters_" + faction + ".pdf";
    const validFileNames: string[] = [
      "Custom Characters_Adepta Sororitas.pdf",
      "Custom Characters_Adeptus Astartes.pdf",
      "Custom Characters_Adeptus Custodes.pdf",
      "Custom Characters_Adeptus Mechanicus.pdf",
      "Custom Characters_Aeldari.pdf",
      "Custom Characters_Astra Militarum.pdf",
      "Custom Characters_Black Templars.pdf",
      "Custom Characters_Blood Angels.pdf",
      "Custom Characters_Chaos Daemons.pdf",
      "Custom Characters_Chaos Space Marines.pdf",
      "Custom Characters_Dark Angels.pdf",
      "Custom Characters_Death Guard.pdf",
      "Custom Characters_Drukhari.pdf",
      "Custom Characters_Emperors Children.pdf",
      "Custom Characters_Genestealer Cults.pdf",
      "Custom Characters_Grey Knights.pdf",
      "Custom Characters_Imperial Agents.pdf",
      "Custom Characters_Leagues of Votann.pdf",
      "Custom Characters_Necrons.pdf",
      "Custom Characters_Orks.pdf",
      "Custom Characters_Space Wolves.pdf",
      "Custom Characters_Tau Empire.pdf",
      "Custom Characters_Thousand Sons.pdf",
      "Custom Characters_Tyranids.pdf",
      "Custom Characters_World Eaters.pdf",
    ];
    const result = validFileNames.map((validFileName: string) => validFileName.replace(".pdf", "").replace("Custom Characters_", "")).includes(props.faction);
    setPdfSrc(result ? fileName : "src/assets/Invalid.txt");
  }

  const handleError: ReactEventHandler = (e: any) => {
    console.log("Handling error");
    e.preventDefault();
    e.stopPropagation();
    e.target.onerror = null;
    e.target.src = "src/assets/Invalid.txt";
  }

  useEffect(() => {
    getFileName(props.faction);
  }, [props.faction]);

  return (
    <Backdrop className={"CustomCharactersHelpPopupBackdrop flexColumn centerAlign centerJustify"} open={props.open} sx={{zIndex: (theme) => theme.zIndex.drawer + 2}} onClick={handleClosePopup}>
      <div className="CustomCharacterHelpPopupBox padding1 borderRadius card positionRelative flexColumn centerAlign centerJustify" onClick={handleBoxClicked}>
        <embed className="flexGrow1 fullWidth fullHeight" src={pdfSrc} type="application/pdf" onError={handleError}/>
        <IconButton className="CustomCharacterHelpPopupBox_CloseButton AddCustomCharacterPopupBox_Button" onClick={handleClosePopup}>Close</IconButton>
      </div>
    </Backdrop>
  );
}

export default CustomCharactersHelpPopup;