import { Box, Divider, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import UnitTypeAddingArea from "../UnitTypeAddingArea/UnitTypeAddingArea";
import { Enhancement, Unit, UnitSelection, UnitType } from "../../UtilityComponents/Army_Constants/Army_Constants";
import './FactionAddingArea.css';
import { SetStateAction, useEffect, useState } from "react";
import AddUnitPopupScreen from "../AddUnitPopupScreen/AddUnitPopupScreen";

export const enum FactionAddingAreaType {
  ARMY = "ARMY", 
  ALLIES = "ALLIES"
}

interface FactionAddingAreaProps {
  army: string;
  type: FactionAddingAreaType;
  characterUnitList: UnitSelection[];
  battlelineUnitList: UnitSelection[];
  otherUnitList: UnitSelection[];
  setCharacterUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setBattlelineUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setOtherUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  enhancementList: Enhancement[];
  availableUnits: Unit[];
  allowRosterModifications?: boolean;
}

const FactionAddingArea: React.FC<FactionAddingAreaProps> = ({
  army, 
  type, 
  characterUnitList, 
  battlelineUnitList, 
  otherUnitList, 
  setCharacterUnitList, 
  setBattlelineUnitList, 
  setOtherUnitList, 
  enhancementList, 
  availableUnits, 
  allowRosterModifications}) => {

  const [addUnitPopupOpen, setAddUnitPopupOpen] = useState<boolean>(false);
  const [unitTypeForPopup, setUnitTypeForPopup] = useState<UnitType | undefined>();
  const [popupAvailableUnits, setPopupAvailableUnits] = useState<Unit[]>([]);
  const [availableCharacterUnits, setAvailableCharacterUnits] = useState<Unit[]>([]);
  const [availableBattlelineUnits, setAvailableBattlelineUnits] = useState<Unit[]>([]);
  const [availableOtherUnits, setAvailableOtherUnits] = useState<Unit[]>([]);
  
  const handleClick = () => {
    setUnitTypeForPopup(undefined);
    setPopupAvailableUnits(availableUnits);
    setAddUnitPopupOpen(true);
  };

  const handleUnitTypeAddingAreaAddButtonClick = (unitType: UnitType) => {
    setUnitTypeForPopup(unitType);
    switch (unitType) {
      case UnitType.CHARACTERS:
        setPopupAvailableUnits(availableCharacterUnits);
        break;
      case UnitType.BATTLELINE:
        setPopupAvailableUnits(availableBattlelineUnits);
        break;
      case UnitType.OTHER:
        setPopupAvailableUnits(availableOtherUnits);
        break;
      default:
        setPopupAvailableUnits(availableUnits);
        break;
    }
    setAddUnitPopupOpen(true);
  }

  const addUnit = (unitSelection: UnitSelection) => {
    if (unitSelection.unitType === UnitType.CHARACTERS.toLowerCase()) {
      unitSelection.unitType = UnitType.CHARACTERS;
      characterUnitList = [...characterUnitList, unitSelection];
      setCharacterUnitList(characterUnitList);
    }
    else if (unitSelection.unitType === UnitType.BATTLELINE.toLowerCase()) {
      unitSelection.unitType = UnitType.BATTLELINE;
      battlelineUnitList = [...battlelineUnitList, unitSelection];
      setBattlelineUnitList(battlelineUnitList);
    }
    else {
      unitSelection.unitType = UnitType.OTHER;
      otherUnitList = [...otherUnitList, unitSelection];
      setOtherUnitList(otherUnitList);
    }
  };

  const handleCloseAddUnitPopup = () => {
    setAddUnitPopupOpen(false);
  };

  useEffect(() => {
    if (availableUnits && availableUnits.length > 0) {
      setAvailableCharacterUnits(availableUnits.filter((unit: Unit) => (unit.unitType && unit.unitType.toLowerCase() === UnitType.CHARACTERS.toLowerCase())));
      setAvailableBattlelineUnits(availableUnits.filter((unit: Unit) => (unit.unitType && unit.unitType.toLowerCase() === UnitType.BATTLELINE.toLowerCase())));
      setAvailableOtherUnits(availableUnits.filter((unit: Unit) => (unit.unitType === undefined) || (unit.unitType.toLowerCase() === UnitType.OTHER.toLowerCase())));
    }
    else {
      setAvailableCharacterUnits([]);
      setAvailableBattlelineUnits([]);
      setAvailableOtherUnits([]);
    }
  }, [availableUnits]);

  return (
    <>
      {army !== undefined && army !== "" && 
      <Box className="FactionAddingAreaBox">
        <Typography className="FactionAddingArea_TypeText">{type}</Typography>
        <Divider className="FactionAddingArea_TypeDivider"/>
        <UnitTypeAddingArea unitType={UnitType.CHARACTERS} unitList={characterUnitList} setUnitList={setCharacterUnitList} enhancementList={enhancementList} handleUnitTypeAddingAreaAddButtonClick={handleUnitTypeAddingAreaAddButtonClick} allowRosterModifications={allowRosterModifications}/>
        <UnitTypeAddingArea unitType={UnitType.BATTLELINE} unitList={battlelineUnitList} setUnitList={setBattlelineUnitList} enhancementList={enhancementList} handleUnitTypeAddingAreaAddButtonClick={handleUnitTypeAddingAreaAddButtonClick} allowRosterModifications={allowRosterModifications}/>
        <UnitTypeAddingArea unitType={UnitType.OTHER} unitList={otherUnitList} setUnitList={setOtherUnitList} enhancementList={enhancementList} handleUnitTypeAddingAreaAddButtonClick={handleUnitTypeAddingAreaAddButtonClick} allowRosterModifications={allowRosterModifications}/>
        {allowRosterModifications === undefined || allowRosterModifications === true ? <><IconButton className="FactionAddingArea_AddButton" onClick={handleClick}><AddIcon/></IconButton>
        <AddUnitPopupScreen availableUnits={popupAvailableUnits} addUnit={addUnit} unitType={unitTypeForPopup} open={addUnitPopupOpen} closeBackdropFunction={handleCloseAddUnitPopup} army={type === FactionAddingAreaType.ALLIES ? army + " Allies" : army}/>
        </>: ""}
      </Box>
      }
    </>
  );
}

export default FactionAddingArea;