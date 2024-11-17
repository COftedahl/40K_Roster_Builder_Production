import { Backdrop, Box, Divider, FormControl, IconButton, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent, Typography } from "@mui/material";
import { CostOption, Unit, UnitSelection } from "../../UtilityComponents/Army_Constants/Army_Constants";
import { ReactNode, useEffect, useState } from "react";
import './AddUnitPopupScreen.css';

interface AddUnitPopupScreenProps {
  availableUnits: Unit[];
  addUnit: (unitSelection: UnitSelection) => void;
  open: boolean;
  closeBackdropFunction: () => void;
  army: string;
}

const AddUnitPopupScreen: React.FC<AddUnitPopupScreenProps> = ({availableUnits, addUnit, open, closeBackdropFunction, army}) => {
  
  const [selectedUnit, setSelectedUnit] = useState<Unit>();
  const [selectedUnitSizeIndex, setSelectedUnitSizeIndex] = useState<number | undefined>();

  let isUserOnMobileDevice: boolean = false;
  useEffect(() => {
    isUserOnMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }, []);

  const handleBoxClick: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleUnitSelectorChange = (event: SelectChangeEvent, child: ReactNode) => {
    try {
      setSelectedUnitSizeIndex(undefined);
      setSelectedUnit(availableUnits.find((unit: Unit) => unit.name === child?.props.value) || undefined);
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleUnitSizeSelectorChange = (event: SelectChangeEvent, child: ReactNode) => {
    try {
      setSelectedUnitSizeIndex(child?.props.value);
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleAddUnitClicked = () => {
    if (selectedUnit) {
      addUnit({...selectedUnit, selectedSizeIndex: selectedUnitSizeIndex || 0});
    }
  };

  useEffect(() => {
    setSelectedUnit(undefined);
    setSelectedUnitSizeIndex(undefined);
  }, [open]);

  useEffect(() => {
    if (selectedUnit && selectedUnit.costOptions && selectedUnit.costOptions.length === 1) {
      setSelectedUnitSizeIndex(0);
    }
    else {
      setSelectedUnitSizeIndex(undefined);
    }
  }, [selectedUnit]);

  return (
    <>
      <Backdrop open={open} sx={{zIndex: (theme) => theme.zIndex.drawer + 2}} onClick={closeBackdropFunction}>
        <Box className="AddUnitPopupBox" onClick={handleBoxClick}>
          {availableUnits ?
          <>
            <Typography variant="h6" className="AddUnitPopupBox_ArmyName">{army}</Typography>
            <Divider className="AddUnitPopupBox_Divider"/>
            <FormControl>
              <InputLabel htmlFor="AddUnitPopupBox_UnitSelector" className="AddUnitPopupBox_UnitSelector_InputLabel">Unit
              </InputLabel>
              {isUserOnMobileDevice ? 
                <NativeSelect className="AddUnitPopupBox_UnitSelector">
                  {availableUnits.map((availableUnit: Unit, index: number) => {
                    return (<option className="AddUnitPopupBox_UnitSelector_Item" value={availableUnit.name} key={index}>{(availableUnit.name)}</option>);
                  })}
                </NativeSelect>
              : 
                <Select id="AddUnitPopupBox_UnitSelector" className="AddUnitPopupBox_UnitSelector" value={selectedUnit ? selectedUnit.name : ""} label="Unit" onChange={handleUnitSelectorChange}>
                  {availableUnits.map((availableUnit: Unit, index: number) => {
                    return (<MenuItem className="AddUnitPopupBox_UnitSelector_Item" value={availableUnit.name} key={index}>{(availableUnit.name)}</MenuItem>);
                  })}
                </Select>
              }
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="AddUnitPopupBox_UnitSizeSelector" className="AddUnitPopupBox_UnitSizeSelector_InputLabel">Unit Size
              </InputLabel>
              {isUserOnMobileDevice ? 
                <NativeSelect className="AddUnitPopupBox_UnitSizeSelector">
                  {availableUnits.map((availableUnit: Unit, index: number) => {
                    return (<option className="AddUnitPopupBox_UnitSizeSelector_Item" value={availableUnit.name} key={index}>{(availableUnit.name)}</option>);
                  })}
                </NativeSelect>
              : 
                <Select id="AddUnitPopupBox_UnitSizeSelector" className="AddUnitPopupBox_UnitSizeSelector" value={selectedUnitSizeIndex !== undefined ? "" + selectedUnitSizeIndex : ""} label="Unit Size" onChange={handleUnitSizeSelectorChange}>
                  {selectedUnit?.costOptions.map((costOption: CostOption, index: number) => {
                    return (<MenuItem className="AddUnitPopupBox_UnitSizeSelector_Item" value={index} key={index}>{((costOption.cost + " pts").padEnd(8) + "| " + costOption.modelCountString)}</MenuItem>);
                  })}
                </Select>
              }
            </FormControl>
            <IconButton className="AddUnitPopupBox_Button AddUnitPopupBox_Button_Back" onClick={closeBackdropFunction}>BACK</IconButton>
            <IconButton className="AddUnitPopupBox_Button AddUnitPopupBox_Button_Save" onClick={handleAddUnitClicked} disabled={!(selectedUnit !== undefined && selectedUnitSizeIndex !== undefined)}>Add</IconButton>
          </>
          : 
            <Typography variant="h6" className="AddUnitPopupBox_ErrorMsg">Error: no valid "avalable unit list" was provided as props to AddUnitPopupScreen</Typography>
          }
        </Box>
      </Backdrop>
    </>
  );
}

export default AddUnitPopupScreen;