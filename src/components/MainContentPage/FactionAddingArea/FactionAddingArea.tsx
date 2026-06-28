import { Box, Divider, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import UnitTypeAddingArea from "../UnitTypeAddingArea/UnitTypeAddingArea";
import { Enhancement, Unit, UnitSelection, UnitType } from "../../UtilityComponents/Army_Constants/Army_Constants";
import './FactionAddingArea.css';
import { SetStateAction, useEffect, useState } from "react";
import AddUnitPopupScreen from "../AddUnitPopupScreen/AddUnitPopupScreen";
import CustomCharacterAddingArea from "../CustomCharacterAddingArea/CustomCharacterAddingArea";
import AddCustomCharacterPopup from "../CustomCharacterAddingArea/AddCustomCharacterPopup";
import { ICustomCharacter, ICustomCharacterSelection } from "../../UtilityComponents/Army_Constants/CustomCharacterData";
import CustomCharactersHelpPopup from "../CustomCharacterAddingArea/CustomCharactersHelpPopup";

export const enum FactionAddingAreaType {
  ARMY = "ARMY", 
  ALLIES = "ALLIES"
}

interface FactionAddingAreaProps {
  army: string;
  type: FactionAddingAreaType;
  customCharacterList: ICustomCharacterSelection[], 
  characterUnitList: UnitSelection[];
  battlelineUnitList: UnitSelection[];
  otherUnitList: UnitSelection[];
  setCustomCharacterList: React.Dispatch<SetStateAction<ICustomCharacterSelection[]>>;
  setCharacterUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setBattlelineUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setOtherUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  enhancementList: Enhancement[];
  availableUnits: Unit[];
  availableCustomCharacters: ICustomCharacter[], 
  allowRosterModifications?: boolean;
}

const FactionAddingArea: React.FC<FactionAddingAreaProps> = ({
  army, 
  type, 
  customCharacterList, 
  characterUnitList, 
  battlelineUnitList, 
  otherUnitList, 
  setCustomCharacterList, 
  setCharacterUnitList, 
  setBattlelineUnitList, 
  setOtherUnitList, 
  enhancementList, 
  availableUnits, 
  availableCustomCharacters, 
  allowRosterModifications}) => {

  const [addUnitPopupOpen, setAddUnitPopupOpen] = useState<boolean>(false);
  const [addCustomCharacterPopupOpen, setAddCustomCharacterPopupOpen] = useState<boolean>(false);
  const [unitTypeForPopup, setUnitTypeForPopup] = useState<UnitType | undefined>();
  const [popupAvailableUnits, setPopupAvailableUnits] = useState<Unit[]>([]);
  const [availableCharacterUnits, setAvailableCharacterUnits] = useState<Unit[]>([]);
  const [availableBattlelineUnits, setAvailableBattlelineUnits] = useState<Unit[]>([]);
  const [availableOtherUnits, setAvailableOtherUnits] = useState<Unit[]>([]);
  const [customCharactersHelpOpen, setCustomCharactersHelpOpen] = useState<boolean>(false);
  
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
    if (unitSelection.unitType && unitSelection.unitType.toLowerCase() === UnitType.CHARACTERS.toLowerCase()) {
      unitSelection.unitType = UnitType.CHARACTERS;
      characterUnitList = [...characterUnitList, unitSelection];
      setCharacterUnitList(characterUnitList);
    }
    else if (unitSelection.unitType && unitSelection.unitType.toLowerCase() === UnitType.BATTLELINE.toLowerCase()) {
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

  const handleAddNewCharacter = (character: ICustomCharacterSelection) => {
    customCharacterList.push(character);
    setCustomCharacterList(() => [...customCharacterList]);
  }

  const handleCustomCharactersHelpClicked = () => {
    setCustomCharactersHelpOpen(true);
  }

  const handleCloseCustomCharactersHelp = () => {
    setCustomCharactersHelpOpen(false);
  }

  return (
    <>
      {army !== undefined && army !== "" && 
      <Box className="FactionAddingAreaBox">
        <Typography className="FactionAddingArea_TypeText">{type}</Typography>
        <Divider className="FactionAddingArea_TypeDivider"/>
        {type === FactionAddingAreaType.ARMY ? 
          <CustomCharacterAddingArea availableCustomCharacters={availableCustomCharacters} setShowAddUnitPopup={setAddCustomCharacterPopupOpen} allowRosterModifications={allowRosterModifications} characterList={customCharacterList} setCharacterList={setCustomCharacterList} onClickHelp={handleCustomCharactersHelpClicked}/>
        :
          ""
        }
        <UnitTypeAddingArea unitType={UnitType.CHARACTERS} unitList={characterUnitList} setUnitList={setCharacterUnitList} enhancementList={enhancementList} handleUnitTypeAddingAreaAddButtonClick={handleUnitTypeAddingAreaAddButtonClick} allowRosterModifications={allowRosterModifications}/>
        <UnitTypeAddingArea unitType={UnitType.BATTLELINE} unitList={battlelineUnitList} setUnitList={setBattlelineUnitList} enhancementList={enhancementList} handleUnitTypeAddingAreaAddButtonClick={handleUnitTypeAddingAreaAddButtonClick} allowRosterModifications={allowRosterModifications}/>
        <UnitTypeAddingArea unitType={UnitType.OTHER} unitList={otherUnitList} setUnitList={setOtherUnitList} enhancementList={enhancementList} handleUnitTypeAddingAreaAddButtonClick={handleUnitTypeAddingAreaAddButtonClick} allowRosterModifications={allowRosterModifications}/>
        {allowRosterModifications === undefined || allowRosterModifications === true ? <><IconButton className="FactionAddingArea_AddButton" onClick={handleClick}><AddIcon/></IconButton>
        <AddUnitPopupScreen availableUnits={popupAvailableUnits} addUnit={addUnit} unitType={unitTypeForPopup} open={addUnitPopupOpen} closeBackdropFunction={handleCloseAddUnitPopup} army={type === FactionAddingAreaType.ALLIES ? army + " Allies" : army}/>
        <AddCustomCharacterPopup display={addCustomCharacterPopupOpen} onAddUnit={handleAddNewCharacter} closePopup={() => setAddCustomCharacterPopupOpen(false)} army={army} availableCharacters={availableCustomCharacters}/>
        </>: ""}
        <CustomCharactersHelpPopup open={customCharactersHelpOpen} closePopup={handleCloseCustomCharactersHelp} faction={army}/>
      </Box>
      }
    </>
  );
}

export default FactionAddingArea;