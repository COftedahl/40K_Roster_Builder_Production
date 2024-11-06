import { useEffect } from "react";

interface Theme {
  appOverallFontSize_p: string;
  appOverallFontSize_h3: string; 
  appOverallFontSize_h6: string;
  appOverallBorderRadius: string;
  appOverallColor: string;
  appOverallBoxShadow: string;

  headerBackgroundColor: string; 
  headerBorderRadius: string; 
  headerBorder: string; 
  headerBoxShadow: string; 
  headerColor: string;

  footerBackgroundColor: string; 
  footerBorderRadius: string; 
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
}

const standardBoxShadow: string = "0.0px 1.0px 3.0px 0px rgba(0, 0, 0, 0.3), 0.0px 4.0px 8.0px 3.0px rgba(0, 0, 0, 0.15)";
const standardBorderRadius: string = "2.5vw";

const Theme: Theme = {
  appOverallFontSize_p: "1vw",
  appOverallFontSize_h3: "3vw", 
  appOverallFontSize_h6: "2vw",
  appOverallBorderRadius: standardBorderRadius,
  appOverallColor: "blacK",
  appOverallBoxShadow: standardBoxShadow,


  headerBackgroundColor: "#1976d2", 
  headerBorderRadius: standardBorderRadius, 
  headerBorder: "none", 
  headerBoxShadow: standardBoxShadow, 
  headerColor: "white",


  footerBackgroundColor: "rgba(0, 0, 0, 0.1)", 
  footerBorderRadius: standardBorderRadius, 
  footerBorder: "none", 
  footerBoxShadow: standardBoxShadow, 
  footerColor: "black",
  
  sidebarBackgroundColor: "radial-gradient(white 50%, lightgrey)", 
  sidebarBorderRadius: standardBorderRadius, 
  sidebarBorder: "none", 
  sidebarBoxShadow: standardBoxShadow, 
  sidebarColor: "black",

  mainDisplayAreaBackgroundColor: "none", 
  mainDisplayAreaBorderRadius: "0px", 
  mainDisplayAreaBorder: "none", 
  mainDisplayAreaBoxShadow: "none", 
  mainDisplayAreaColor: "black",
}

const ThemeComponent = () => {

  const initializeCSSVariables = () => {
    document.documentElement.style.setProperty("--standardBoxShadow", standardBoxShadow);
    document.documentElement.style.setProperty("--standardBorderRadius", standardBorderRadius);

    document.documentElement.style.setProperty("--appOverallFontSize_p", Theme.appOverallFontSize_p);
    document.documentElement.style.setProperty("--appOverallFontSize_h3", Theme.appOverallFontSize_h3);
    document.documentElement.style.setProperty("--appOverallFontSize_h6", Theme.appOverallFontSize_h6);
    document.documentElement.style.setProperty("--appOverallBorderRadius", Theme.appOverallBorderRadius);
    document.documentElement.style.setProperty("--appOverallBoxShadow", Theme.appOverallBoxShadow);
    document.documentElement.style.setProperty("--appOverallColor", Theme.appOverallColor);

    document.documentElement.style.setProperty("--headerBackgroundColor", Theme.headerBackgroundColor);
    document.documentElement.style.setProperty("--headerBorderRadius", Theme.headerBorderRadius);
    document.documentElement.style.setProperty("--headerBorder",Theme. headerBorder);
    document.documentElement.style.setProperty("--headerBoxShadow", Theme.headerBoxShadow);
    document.documentElement.style.setProperty("--headerColor", Theme.headerColor);

    document.documentElement.style.setProperty("--footerBackgroundColor", Theme.footerBackgroundColor);
    document.documentElement.style.setProperty("--footerBorderRadius", Theme.footerBorderRadius);
    document.documentElement.style.setProperty("--footerBorder", Theme.footerBorder);
    document.documentElement.style.setProperty("--footerBoxShadow", Theme.footerBoxShadow);
    document.documentElement.style.setProperty("--footerColor", Theme.footerColor);
    
    document.documentElement.style.setProperty("--sidebarBackgroundColor", Theme.sidebarBackgroundColor);
    document.documentElement.style.setProperty("--sidebarBorderRadius", Theme.sidebarBorderRadius);
    document.documentElement.style.setProperty("--sidebarBorder", Theme.sidebarBorder);
    document.documentElement.style.setProperty("--sidebarBoxShadow", Theme.sidebarBoxShadow);
    document.documentElement.style.setProperty("--sidebarColor", Theme.sidebarColor);

    document.documentElement.style.setProperty("--mainDisplayAreaBackgroundColor", Theme.mainDisplayAreaBackgroundColor);
    document.documentElement.style.setProperty("--mainDisplayAreaBorderRadius", Theme.mainDisplayAreaBorderRadius);
    document.documentElement.style.setProperty("--mainDisplayAreaBorder", Theme.mainDisplayAreaBorder);
    document.documentElement.style.setProperty("--mainDisplayAreaBoxShadow", Theme.mainDisplayAreaBoxShadow);
    document.documentElement.style.setProperty("--mainDisplayAreaColor", Theme.mainDisplayAreaColor);
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