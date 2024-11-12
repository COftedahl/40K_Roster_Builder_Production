import { Box, Typography } from "@mui/material";
import CollapsibleCard from "../UtilityComponents/CollapsibleCard/CollapsibleCard";
import { useState } from "react";
import './MainContentPage.css';
import RosterBuildingArea from "./RosterBuildingArea/RosterBuildingArea";
import FactionSelector from "./FactionSelector/FactionSelector";
import { BattleSize, Detachment } from "../UtilityComponents/Army_Constants/Army_Constants";

interface MainContentPageProps {

}

const MainContentPage: React.FC<MainContentPageProps> = () => {
  const CollapsibleBoxNames: string[] = ["FactionSelectorBox", "RosterCreatorBox"];

  const [activeCollapsibleBox, setActiveCollabsibleBox] = useState<string>(CollapsibleBoxNames[0]);

  const [faction, setFaction] = useState<string | null>(null);
  const [army, setArmy] = useState<string | null>(null);
  const [detachment, setDetachment] = useState<Detachment | null>(null);
  const [battleSize, setBattleSize] = useState<BattleSize | null>(null);

  const handleBoxClick = (clickedBoxName: string) => (event: React.SyntheticEvent, isBoxClicked: boolean) => {
    setActiveCollabsibleBox(isBoxClicked ? clickedBoxName : "");
  };

  const factionSelectorProps = {
    faction: faction,
    army: army, 
    detachment: detachment, 
    battleSize: battleSize,
    setFaction: setFaction, 
    setArmy: setArmy, 
    setDetachment: setDetachment,
    setBattleSize: setBattleSize,
  }

  return (
    <>
    <Box className="MainContentPageOuterContainer">
      <Box className="MainContentPageContainer">
        <CollapsibleCard summary="Faction Selector" expanded={activeCollapsibleBox === CollapsibleBoxNames[0]} onChange={handleBoxClick} boxName={CollapsibleBoxNames[0]}>
          {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography> */}
          <FactionSelector {...factionSelectorProps}/>
        </CollapsibleCard>
        <CollapsibleCard summary="Roster Builder"  expanded={activeCollapsibleBox === CollapsibleBoxNames[1]} onChange={handleBoxClick} boxName={CollapsibleBoxNames[1]}>
          <RosterBuildingArea factionName={army ? army : "None"} detachment={detachment ? detachment : undefined} selectedRosterSize={battleSize}/>
        </CollapsibleCard>
      </Box>
    </Box>
    </>
  );
}

export default MainContentPage;