import { Box, Divider, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import UnitTypeAddingArea from "../UnitTypeAddingArea/UnitTypeAddingArea";
import { Enhancement, UnitSelection, UnitType } from "../../UtilityComponents/Army_Constants/Army_Constants";
import './FactionAddingArea.css';
import { SetStateAction } from "react";

export const enum FactionAddingAreaType {
  ARMY = "ARMY", 
  ALLIES = "ALLIES"
}

interface FactionAddingAreaProps {
  factionName: string;
  type: FactionAddingAreaType;
  characterUnitList: UnitSelection[];
  battlelineUnitList: UnitSelection[];
  otherUnitList: UnitSelection[];
  setCharacterUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setBattlelineUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setOtherUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  enhancementList: Enhancement[];
}

const FactionAddingArea: React.FC<FactionAddingAreaProps> = ({
  factionName, 
  type, 
  characterUnitList, 
  battlelineUnitList, 
  otherUnitList, 
  setCharacterUnitList, 
  setBattlelineUnitList, 
  setOtherUnitList, 
  enhancementList}) => {
  
  const handleClick = () => {
    window.alert("Need to implement this function");
  };

  return (
    <>
      {factionName !== undefined && factionName !== "" && 
      <Box className="FactionAddingAreaBox">
        <Typography className="FactionAddingArea_TypeText">{type}</Typography>
        <Divider className="FactionAddingArea_TypeDivider"/>
        <UnitTypeAddingArea unitType={UnitType.CHARACTERS} unitList={characterUnitList} setUnitList={setCharacterUnitList} enhancementList={enhancementList}/>
        <UnitTypeAddingArea unitType={UnitType.BATTLELINE} unitList={battlelineUnitList} setUnitList={setBattlelineUnitList} enhancementList={enhancementList}/>
        <UnitTypeAddingArea unitType={UnitType.OTHER} unitList={otherUnitList} setUnitList={setOtherUnitList} enhancementList={enhancementList}/>
        <IconButton className="FactionAddingArea_AddButton" onClick={handleClick}><AddIcon/></IconButton>
      </Box>
      }
    </>
  );
}

export default FactionAddingArea;