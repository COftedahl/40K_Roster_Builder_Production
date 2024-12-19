import { useEffect } from "react";

interface Theme {
  [key: string]: string;//allows indexing of the values in Theme

  minAppWidth: string;

  appOverallFontSize_p: string;
  appOverallFontSize_h3: string; 
  appOverallFontSize_h6: string;
  appOverallBorderRadius: string;
  appOverallColor: string;
  appOverallBoxShadow: string;
  appOverallColor_Icon: string,
  appOverallBorderColor_ButtonHover: string;

  headerBackgroundColor: string; 
  footerBackgroundColor_Button: string;
  footerBackgroundColor_Warning: string;
  footerBackgroundColor_Proceed: string;
  headerBorderRadius: string; 
  headerBorder: string; 
  headerBoxShadow: string; 
  footerBoxShadow_Button: string;
  headerColor: string;

  footerBackgroundColor: string; 
  footerBorderRadius: string; 
  footerButtonBorderRadius: string;
  footerBorder: string; 
  footerBoxShadow: string; 
  footerColor: string;
  
  sidebarBackgroundColor: string; 
  sidebarBorderRadius: string; 
  sidebarBorder: string; 
  sidebarBoxShadow: string; 
  sidebarColor: string;

  mainDisplayAreaBackgroundColor: string; 
  mainDisplayAreaBorderRadius: string; 
  mainDisplayAreaBorder: string; 
  mainDisplayAreaBoxShadow: string; 
  mainDisplayAreaColor: string;

  collapsibleCardBoxShadow: string;
  collapsibleCardBorderRadius: string;
  collapsibleCardBorder: string;
  collapsibleCardBackgroundColor: string;
  collapsibleCardColor: string;

  unitTypeAddingAreaBoxShadow: string;
  unitTypeAddingAreaBorderRadius: string;
  unitTypeAddingAreaBorder: string;
  unitTypeAddingAreaBackgroundColor: string;
  unitTypeAddingAreaColor: string;

  unitDisplayBackgroundImage_Secondary: string;
}

const standardBoxShadow: string = "0.0px 1.0px 3.0px 0px rgba(0, 0, 0, 0.3), 0.0px 4.0px 8.0px 3.0px rgba(0, 0, 0, 0.15)";
const standardBorderRadius: string = "2.5vw";
const minAppWidth: string = "250px";

export const Theme: Theme = {
  minAppWidth: minAppWidth,

  // appOverallFontSize_p: "1vw",
  // appOverallFontSize_h3: "2.5vw", 
  // appOverallFontSize_h6: "1.5vw",
  appOverallFontSize_p: "auto",
  appOverallFontSize_h3: "auto", 
  appOverallFontSize_h6: "auto",
  appOverallBorderRadius: standardBorderRadius,
  appOverallColor: "blacK",
  appOverallBoxShadow: standardBoxShadow,
  appOverallColor_Icon: "#1976d2",
  // appOverallColor_IconSecondary: "rgba(25, 118, 210, 0.7)",
  appOverallColor_IconSecondary: "rgba(0, 0, 0, 0.6)",
  appOverallBorderColor_ButtonHover: "#646cff",

  headerBackgroundColor: "#1976d2", 
  headerBorderRadius: standardBorderRadius, 
  headerBorder: "none", 
  headerBoxShadow: standardBoxShadow, 
  headerColor: "white",

  footerBackgroundColor: "rgba(0, 0, 0, 0.1)", 
  footerBackgroundColor_Button: "rgba(255, 255, 255, 0.8)",
  footerBackgroundColor_Warning: "rgba(250, 25, 15, 0.7)",
  footerBackgroundColor_Proceed: "rgba(0, 118, 250, 0.7)",
  footerBorderRadius: standardBorderRadius, 
  footerButtonBorderRadius: standardBorderRadius,
  footerBorder: "none", 
  footerBoxShadow: standardBoxShadow, 
  footerBoxShadow_Button: standardBoxShadow,
  footerColor: "black",
  
  // sidebarBackgroundColor: "radial-gradient(circle, white 50%, lightgrey)",
  sidebarBackgroundColor: "radial-gradient(circle, rgba(255, 255, 255, 1.0), rgba(230, 230, 230, 1.0)" ,
  sidebarBorderRadius: standardBorderRadius, 
  sidebarBorder: "none", 
  sidebarBoxShadow: standardBoxShadow, 
  sidebarColor: "black",

  mainDisplayAreaBackgroundColor: "none", 
  mainDisplayAreaBorderRadius: "0px", 
  mainDisplayAreaBorder: "none", 
  mainDisplayAreaBoxShadow: "none", 
  mainDisplayAreaColor: "black",

  collapsibleCardBoxShadow: standardBoxShadow,
  collapsibleCardBorderRadius: standardBorderRadius,
  collapsibleCardBorder: "none",
  collapsibleCardBackgroundColor: "none",
  collapsibleCardColor: "black",

  unitTypeAddingAreaBoxShadow: "0.5px 0.0px 2.0px 1.0px rgba(0, 0, 0, 0.10), 0.0px 1.0px 2.0px 1.0px rgba(0, 0, 0, 0.10)",
  // unitTypeAddingAreaBoxShadow: "none",
  unitTypeAddingAreaBorderRadius: "1vw",
  // unitTypeAddingAreaBorder: "0.03vh solid dimgrey",
  unitTypeAddingAreaBorder: "none",
  unitTypeAddingAreaBackgroundColor: "none",
  unitTypeAddingAreaColor: "black",

  // unitDisplayBackgroundColor_Secondary: "rgba(0, 0, 0, 0.1)",
  unitDisplayBackgroundImage_Secondary: "linear-gradient(to right, rgba(0, 0, 0, 0.0) , rgba(0, 0, 0, 0.07) 10%, rgba(0, 0, 0, 0.07) 90%, rgba(0, 0, 0, 0.0) )",
}

const ThemeComponent = () => {

  const initializeCSSVariables = () => {
    document.documentElement.style.setProperty("--standardBoxShadow", standardBoxShadow);
    document.documentElement.style.setProperty("--standardBorderRadius", standardBorderRadius);

    for (let x in Theme) {
      document.documentElement.style.setProperty("--" + x, Theme[x]);
    }
  };

  useEffect(() => {
    if (!document.documentElement.style.getPropertyValue("--headerBackgroundColor")) {
      initializeCSSVariables();
    }
  }, []);

  return (
    <>
    </>
  );
}

export default ThemeComponent;