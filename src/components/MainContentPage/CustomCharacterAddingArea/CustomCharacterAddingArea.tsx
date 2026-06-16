import { Box, Typography, Divider, IconButton } from "@mui/material";
import { UnitType, UnitSelection, ICustomCharacter, ICustomCharacterSelection } from "../../UtilityComponents/Army_Constants/Army_Constants";
import AddIcon from '@mui/icons-material/Add';
import UnitDisplay from "../UnitDisplay/UnitDisplay";
import { useState } from "react";
import AddCustomCharacterPopup from "./AddCustomCharacterPopup";

interface CustomCharacterAddingAreaProps {
  setShowAddUnitPopup: (newVal: boolean) => void, 
  characterList: ICustomCharacterSelection[], 
  setCharacterList: (newList: ICustomCharacterSelection[]) => void, 
  availableCharacters: ICustomCharacter[], 
  allowRosterModifications: boolean, 
}

const CustomCharacterAddingArea: React.FC<CustomCharacterAddingAreaProps> = (props: CustomCharacterAddingAreaProps) => {

  const [selectedUnit, setSelectedUnit] = useState<{unit: UnitSelection, unitIndex: number}>();
  const [isEditPopupOpen, setIsEditPopupOpen] = useState<boolean>(true);

  const handleUnitClick = (unit: UnitSelection, unitIndex: number) => {
    setIsEditPopupOpen(true);
    setSelectedUnit({unit: unit, unitIndex: unitIndex});
  };

  const handleAddButtonClick = () => {
    props.setShowAddUnitPopup(true);
  };

  const handleAddCharacter = (characterAdding) => {

  }

  return (
    <>
      <Box className="UnitTypeAddingAreaBox">
        <Typography className="UnitTypeAddingArea_UnitTypeText">Custom Characters</Typography>
        <Divider className="UnitTypeAddingArea_Divider"/>
        {props.characterList !== undefined && props.characterList.length > 0 && <Box className="UnitDisplayBox UnitDisplayHeadersBox">
          <Typography>Unit Name</Typography>
          <Typography>Cost (pts)</Typography>
        </Box>}
        {props.characterList?.map((character: ICustomCharacterSelection, index: number) => {
          return (
            <UnitDisplay unit={{unitType: UnitType.CHARACTERS, army: character.army as any, faction: character.faction, selectedSizeIndex: 0, name: character.archetype, isUnique: false, costOptions: [{cost: character.totalCost, numModels: 1, modelCountString: "1 model"}]}} key={index} unitIndex={index} handleUnitClick={handleUnitClick}></UnitDisplay>
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
        <></>
      : 
        ""
      }
    </>
  );
}

export default CustomCharacterAddingArea;