import { Backdrop, Box, Checkbox, Divider, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { UnitSelection, UnitType, CostOption, Enhancement } from "../../UtilityComponents/Army_Constants/Army_Constants";
import React, { ReactNode, useEffect, useState } from "react";
import './EditUnitPopupScreen.css';

export interface EditUnitPopupScreenProps {
  open: boolean;
  unit: UnitSelection;
  unitIndex: number;
  availableEnhancements: Enhancement[];
  closeBackdropFunction: () => void;
  saveUnitData: (unit: UnitSelection, key: number) => void;
  deleteUnit: (unitIndex: number) => void;
}

const EditUnitPopupScreen: React.FC<EditUnitPopupScreenProps> = ({open, unit, unitIndex, availableEnhancements, closeBackdropFunction, saveUnitData, deleteUnit}) => {

  let isUserOnMobileDevice: boolean = false;
  useEffect(() => {
    isUserOnMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }, []);

  //clicking inside the popup box
  const handleBoxClick: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const saveData: React.MouseEventHandler = (event: React.MouseEvent) => {
    saveUnitData({...unit, selectedSizeIndex: currSizeSelectionIndex, enhancement: (currEnhancement && currEnhancement.name ? {...currEnhancement, doesCostPoints: !isCurrEnhancementFree} : undefined)}, unitIndex);
  }

  const deleteUnitFromList: React.MouseEventHandler = (event: React.MouseEvent) => {
    deleteUnit(unitIndex);
    closeBackdropFunction();
  };

  const handleCheckboxClicked: React.MouseEventHandler = (event: React.MouseEvent) => {
    setIsCurrEnhancmentFree(!isCurrEnhancementFree);
  };

  //the data for the edited version of the unit
  const [currSizeSelectionIndex, setCurrSizeSelectionIndex] = useState<number>(0 + unit.selectedSizeIndex);
  const [currEnhancement, setCurrEnhancement] = useState<Enhancement | undefined>(unit.enhancement);
  const [currEnhancementIndex, setCurrEnhancementIndex] = useState<number>(unit.enhancement ? availableEnhancements.indexOf(unit.enhancement) : 0);
  const [isCurrEnhancementFree, setIsCurrEnhancmentFree] = useState<boolean>(unit.enhancement?.doesCostPoints || false);
  
  const handleSizeSelectorChange = (event: SelectChangeEvent, child: any) => {
    try {
      setCurrSizeSelectionIndex(child?.props.value || 0);
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleEnhancementSelectorChange = (event: SelectChangeEvent, child: any) => {
    try {
      if (child?.props.value <= 0) {
        setCurrEnhancementIndex(0);
        setCurrEnhancement(undefined);
      }
      else {
        setCurrEnhancementIndex(child?.props.value);
        setCurrEnhancement({...availableEnhancements[child?.props.value - 1], doesCostPoints: isCurrEnhancementFree});
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    setCurrSizeSelectionIndex(0 + unit.selectedSizeIndex);
    setCurrEnhancement(unit.enhancement);
    setIsCurrEnhancmentFree(unit.enhancement ? !unit.enhancement.doesCostPoints : false);
    setCurrEnhancementIndex(unit.enhancement ? availableEnhancements.map((availableEnhancement: Enhancement) => {return availableEnhancement.name}).indexOf(unit.enhancement.name) + 1 : 0);
  }, [open]);

  return (
    <>
      <Backdrop open={open} sx={{zIndex: (theme) => theme.zIndex.drawer + 2}} onClick={closeBackdropFunction}>
        <Box className="EditUnitPopupBox" onClick={handleBoxClick}>
          {unit && unit.costOptions && unit.costOptions.length > 0 ? 
          <>
            <Typography variant="h6" className="EditUnitPopupBox_UnitName">{unit?.name}</Typography>
            <Typography className="EditUnitPopupBox_PointsLabel">{(
              unit.costOptions.length > currSizeSelectionIndex ? 
              unit.costOptions[currSizeSelectionIndex].cost + 
                (currEnhancement &&  !isCurrEnhancementFree ? currEnhancement.cost : 0) 
              : "")}
            </Typography>
            <Divider className="EditUnitPopupBox_Divider"/>
            <FormControl>
              <InputLabel htmlFor="EditUnitPopupBox_UnitSizeSelector" className="EditUnitPopupBox_UnitSizeSelector_InputLabel">Unit Size
              </InputLabel>
              {isUserOnMobileDevice ? 
                <NativeSelect className="EditUnitPopupBox_UnitSizeSelector">
                  {unit.costOptions.map((costOption: CostOption, index: number) => {
                    return (<option value={index} key={index}>{costOption.cost.toString().padEnd(5, "\ ") + "| " + costOption.modelCountString}</option>);
                  })}
                </NativeSelect>
              : 
                <Select id="EditUnitPopupBox_UnitSizeSelector" className="EditUnitPopupBox_UnitSizeSelector" value={"" + (currSizeSelectionIndex < unit.costOptions.length ? currSizeSelectionIndex : 0)} label="Unit Size" onChange={handleSizeSelectorChange}>
                  {unit.costOptions.map((costOption: CostOption, index: number) => {
                    return (<MenuItem className="EditUnitPopupBox_UnitSizeSelector_Item" value={index} key={index}>{((costOption.cost + " pts").padEnd(8) + "| " + costOption.modelCountString)}</MenuItem>);
                  })}
                </Select>
              }
            </FormControl>
              
            {unit.unitType === UnitType.CHARACTERS ? (
              <>
              <FormControl>
                <InputLabel htmlFor="EditUnitPopupBox_EnhancementSelector" className="EditUnitPopupBox_EnhancementSelector_InputLabel">Enhancement</InputLabel>
                <Select id="EditUnitPopupBox_EnhancementSelector" className="EditUnitPopupBox_EnhancementSelector" value={"" + currEnhancementIndex} label="Enhancement" onChange={handleEnhancementSelectorChange}>
                  <MenuItem key={0} value={0} className="EditUnitPopupBox_EnhancementSelector_Item"><em>No Enhancement</em></MenuItem>
                  {availableEnhancements.map((enhancement: Enhancement, index: number) => {
                    return (<MenuItem className="EditUnitPopupBox_EnhancementSelector_Item" value={index + 1} key={index + 1}>{(enhancement.cost + " pts").padEnd(7) + "| " + enhancement.name}</MenuItem>);
                  })}
                </Select>
              </FormControl>
              <FormControlLabel 
              control={
                <Checkbox 
                  className="EditUnitPopupBox_FreeEnhancementCheckbox" 
                  checked={isCurrEnhancementFree}
                  onClick={handleCheckboxClicked}/>
              } 
              label="Make Enhancement Free?"/>
              </>
            ): 
              ""
            }
            <IconButton className="EditUnitPopupBox_Button EditUnitPopupBox_Button_Back" onClick={closeBackdropFunction}>BACK</IconButton>
            <IconButton className="EditUnitPopupBox_Button EditUnitPopupBox_Button_Save" onClick={saveData}>Save</IconButton>
            <IconButton className="EditUnitPopupBox_Button EditUnitPopupBox_Button_Delete" onClick={deleteUnitFromList}><DeleteIcon/></IconButton>
          </>
          : 
          <Typography variant="h6" className="EditUnitPopupBox_ErrorMsg">Error: no unit was provided as props to EditUnitPopupScreen</Typography>
          }
          
        </Box>
      </Backdrop>
    </>
  );
}

export default EditUnitPopupScreen;