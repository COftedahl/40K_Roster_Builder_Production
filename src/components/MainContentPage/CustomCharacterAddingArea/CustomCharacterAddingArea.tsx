import { Box, Typography, Divider, IconButton } from "@mui/material";
import { UnitType, UnitSelection, ICustomCharacter, ICustomCharacterSelection } from "../../UtilityComponents/Army_Constants/Army_Constants";
import AddIcon from '@mui/icons-material/Add';
import UnitDisplay from "../UnitDisplay/UnitDisplay";
import { useState } from "react";
import AddCustomCharacterPopup from "./AddCustomCharacterPopup";
import CharacterDisplay from "./CharacterDisplay";
import EditCustomCharacterPopup from "./EditCustomCharacterPopup";

interface CustomCharacterAddingAreaProps {
  setShowAddUnitPopup: (newVal: boolean) => void, 
  characterList: ICustomCharacterSelection[], 
  setCharacterList: (newList: ICustomCharacterSelection[]) => void, 
  allowRosterModifications: boolean, 
  availableCustomCharacters: ICustomCharacter[], 
}

const CustomCharacterAddingArea: React.FC<CustomCharacterAddingAreaProps> = (props: CustomCharacterAddingAreaProps) => {

  const [selectedUnit, setSelectedUnit] = useState<ICustomCharacterSelection | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState<boolean>(false);

  const handleCharacterClicked = (character: ICustomCharacterSelection, unitIndex: number) => {
    setSelectedUnit(character);
    setSelectedIndex(unitIndex);
    setIsEditPopupOpen(true);
  };

  const getUnitData = (character: ICustomCharacterSelection | null): ICustomCharacter | null => {
    if (character === null) {
      return null;
    }

    const result: ICustomCharacter | null = props.availableCustomCharacters.find((currChar: ICustomCharacter) => currChar.archetype === character.archetype) || null;
    return result;
  }

  const handleCloseEditPopup = () => {
    setIsEditPopupOpen(false);
    setSelectedIndex(null);
    setSelectedIndex(-1);
  }

  const handleAddButtonClick = () => {
    props.setShowAddUnitPopup(true);
  };

  return (
    <>
      <Box className="CustomCharacterAddingAreaBox">
        <Typography className="CustomCharacterAddingArea_UnitTypeText">Custom Characters</Typography>
        <Divider className="UnitTypeAddingArea_Divider"/>
        {props.characterList !== undefined && props.characterList.length > 0 && <Box className="CustomCharacterDisplayBox UnitDisplayHeadersBox">
          <Typography>Unit Name</Typography>
          <Typography>Cost (pts)</Typography>
        </Box>}
        {props.characterList?.map((character: ICustomCharacterSelection, index: number) => {
          return (
            <CharacterDisplay name={character.archetype} cost={character.totalCost + " pts"} key={index} handleUnitClicked={() => handleCharacterClicked(character, index)}/>
          );
        })}
        {props.allowRosterModifications === undefined || props.allowRosterModifications === true ? 
        <IconButton className="UnitTypeAddingArea_AddButton" onClick={handleAddButtonClick}><AddIcon/></IconButton>
        :
        ""
        }
      </Box>
      {(props.allowRosterModifications === undefined || props.allowRosterModifications === true) && selectedUnit !== undefined ? 
        //edit unit screen here
        <EditCustomCharacterPopup open={isEditPopupOpen} unit={selectedUnit} onClose={handleCloseEditPopup} deleteCharacter={() => {}} saveCharacter={() => {}} characterData={getUnitData(selectedUnit)}/>
      : 
        ""
      }
    </>
  );
}

export default CustomCharacterAddingArea;