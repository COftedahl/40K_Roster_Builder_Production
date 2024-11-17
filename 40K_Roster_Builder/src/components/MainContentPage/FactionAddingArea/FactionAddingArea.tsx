import { Box, Divider, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import UnitTypeAddingArea from "../UnitTypeAddingArea/UnitTypeAddingArea";
import { Enhancement, Unit, UnitSelection, UnitType } from "../../UtilityComponents/Army_Constants/Army_Constants";
import './FactionAddingArea.css';
import { SetStateAction, useState } from "react";
import AddUnitPopupScreen from "../AddUnitPopupScreen/AddUnitPopupScreen";

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
  availableUnits: Unit[];
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
  enhancementList, 
  availableUnits}) => {

  const [addUnitPopupOpen, setAddUnitPopupOpen] = useState<boolean>(false);
  
  const handleClick = () => {
    setAddUnitPopupOpen(true);
  };

  const addUnit = (unitSelection: UnitSelection) => {
    if (unitSelection.unitType === UnitType.CHARACTERS) {
      characterUnitList = [...characterUnitList, unitSelection];
      setCharacterUnitList(characterUnitList);
    }
    else if (unitSelection.unitType === UnitType.BATTLELINE) {
      battlelineUnitList = [...battlelineUnitList, unitSelection];
      setBattlelineUnitList(battlelineUnitList);
    }
    else {
      otherUnitList = [...otherUnitList, unitSelection];
      setOtherUnitList(otherUnitList);
    }
  };

  const handleCloseAddUnitPopup = () => {
    setAddUnitPopupOpen(false);
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
        <AddUnitPopupScreen availableUnits={availableUnits} addUnit={addUnit} open={addUnitPopupOpen} closeBackdropFunction={handleCloseAddUnitPopup} army={factionName}/>
      </Box>
      }
    </>
  );
}

export default FactionAddingArea;