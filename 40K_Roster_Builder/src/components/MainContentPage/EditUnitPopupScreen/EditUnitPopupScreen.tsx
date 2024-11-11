import { Backdrop, Box, Divider, FormControl, IconButton, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { UnitSelection, UnitType, CostOption, Enhancement } from "../../UtilityComponents/Army_Constants/Army_Constants";
import React, { ReactNode, useEffect, useState } from "react";
import './EditUnitPopupScreen.css';

export interface EditUnitPopupScreenProps {
  open: boolean;
  unit: UnitSelection;
  unitIndex: number;
  closeBackdropFunction: () => void;
  saveUnitData: (unit: UnitSelection, key: number) => void;
  deleteUnit: (unitIndex: number) => void;
}

const EditUnitPopupScreen: React.FC<EditUnitPopupScreenProps> = ({open, unit, unitIndex, closeBackdropFunction, saveUnitData, deleteUnit}) => {

  let isUserOnMobileDevice: boolean = false;
  useEffect(() => {
    isUserOnMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }, []);

  //clicking inside the popup box
  const handleBoxClick: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const saveData: React.MouseEventHandler = (event: React.MouseEvent) => {
    saveUnitData({...unit, selectedSizeIndex: currSizeSelectionIndex}, unitIndex);
  }

  const deleteUnitFromList: React.MouseEventHandler = (event: React.MouseEvent) => {
    deleteUnit(unitIndex);
    closeBackdropFunction();
  };

  //the data for the edited version of the unit
  const [currSizeSelectionIndex, setCurrSizeSelectionIndex] = useState<number>(0 + unit.selectedSizeIndex);
  const [currEnhancement, setCurrEnhancement] = useState<Enhancement | undefined>(unit.enhancement);
  
  const handleSizeSelectorChange = (event: SelectChangeEvent, child: ReactNode) => {
    try {
      setCurrSizeSelectionIndex(child?.props.value || 0);
    }
    catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    setCurrSizeSelectionIndex(0 + unit.selectedSizeIndex);
    setCurrEnhancement(unit.enhancement);
  }, [open]);

  return (
    <>
      <Backdrop open={open} sx={{zIndex: (theme) => theme.zIndex.drawer + 2}} onClick={closeBackdropFunction}>
        <Box className="EditUnitPopupBox" onClick={handleBoxClick}>
          {unit && unit.costOptions && unit.costOptions.length > 0 ? 
          <>
            <Typography variant="h6" className="EditUnitPopupBox_UnitName">{unit?.name}</Typography>
            <Typography className="EditUnitPopupBox_PointsLabel">{(unit.costOptions.length > currSizeSelectionIndex ? unit.costOptions[currSizeSelectionIndex].cost : "")}</Typography>
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
                <Select id="EditUnitPopupBox_UnitSizeSelector" className="EditUnitPopupBox_UnitSizeSelector" value={"" + (currSizeSelectionIndex < unit.costOptions.length ? currSizeSelectionIndex : 0)} label="Unit Size" sx={{zIndex: (theme) => theme.zIndex.drawer + 2}} onChange={handleSizeSelectorChange}>
                  {unit.costOptions.map((costOption: CostOption, index: number) => {
                    return (<MenuItem className="EditUnitPopupBox_UnitSizeSelector_Item" value={index} key={index} sx={{zIndex: (theme) => theme.zIndex.drawer + 2}}>{((costOption.cost + " pts").padEnd(8) + "| " + costOption.modelCountString)}</MenuItem>);
                  })}
                </Select>
              }
            </FormControl>
              
            {unit.unitType === UnitType.CHARACTERS ? (<Typography className="EditUnitPopupBox_EnhancementSelector">{(currEnhancement?.name || "No Enhancement")}</Typography>): ""}
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