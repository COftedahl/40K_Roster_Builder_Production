import { Box, Typography } from "@mui/material";
import CollapsibleCard from "../UtilityComponents/CollapsibleCard/CollapsibleCard";
import { useState } from "react";
import './MainContentPage.css';
import RosterBuildingArea from "./RosterBuildingArea/RosterBuildingArea";

interface MainContentPageProps {

}

const MainContentPage: React.FC<MainContentPageProps> = () => {
  const CollapsibleBoxNames: string[] = ["FactionSelectorBox", "RosterCreatorBox"];

  const [activeCollapsibleBox, setActiveCollabsibleBox] = useState<string>("");

  const handleBoxClick = (clickedBoxName: string) => (event: React.SyntheticEvent, isBoxClicked: boolean) => {
    setActiveCollabsibleBox(isBoxClicked ? clickedBoxName : "");
  };

  return (
    <>
      <Box className="MainContentPageContainer">
        <CollapsibleCard summary="Faction Selector" expanded={activeCollapsibleBox === CollapsibleBoxNames[0]} onChange={handleBoxClick} boxName={CollapsibleBoxNames[0]}>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
        </CollapsibleCard>
        <CollapsibleCard summary="Roster Builder"  expanded={activeCollapsibleBox === CollapsibleBoxNames[1]} onChange={handleBoxClick} boxName={CollapsibleBoxNames[1]}>
          <RosterBuildingArea factionName={"Tyranids"} detachmentName="Ravener Hive"/>
        </CollapsibleCard>
      </Box>
    </>
  );
}

export default MainContentPage;