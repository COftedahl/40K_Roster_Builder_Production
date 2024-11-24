import { Box, Divider, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Enhancement, UnitSelection, UnitType } from "../../UtilityComponents/Army_Constants/Army_Constants";
import { SetStateAction, useState } from "react";
import UnitDisplay from "../UnitDisplay/UnitDisplay";
import EditUnitPopupScreen from "../EditUnitPopupScreen/EditUnitPopupScreen";
import './UnitTypeAddingArea.css';



interface UnitTypeAddingAreaProps {
  unitType: UnitType;
  unitList: UnitSelection[];
  setUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  enhancementList: Enhancement[];
  handleUnitTypeAddingAreaAddButtonClick: (unitType: UnitType) => void;
  allowRosterModifications?: boolean;
}

const UnitTypeAddingArea: React.FC<UnitTypeAddingAreaProps> = ({unitType, unitList, setUnitList, enhancementList, handleUnitTypeAddingAreaAddButtonClick, allowRosterModifications}) => {
  // const clickCard = (clickedBoxName: string) => (event: React.SyntheticEvent, isBoxClicked: boolean) => {
  //   console.log("clicked element");
  // };

  // return (
  //   <>
  //     <CollapsibleCard summary={unitType} expanded={false} onChange={clickCard} boxName={""} children={<></>}></CollapsibleCard>
  //   </>
  // );

  
  const [selectedUnit, setSelectedUnit] = useState<{unit: UnitSelection, unitIndex: number}>();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handleAddButtonClick = () => {
    handleUnitTypeAddingAreaAddButtonClick(unitType);
  };

  const handleUnitClick = (unit: UnitSelection, unitIndex: number) => {
    setIsPopupOpen(true);
    setSelectedUnit({unit: unit, unitIndex: unitIndex});
  };

  const closeBackdropFunction = () => {
    setIsPopupOpen(false);
  }

  const saveUnitData = (newData: UnitSelection, unitIndex: number) => {
    unitList.splice(unitIndex, 1, newData);
    setUnitList((oldUnitList) => [...oldUnitList]);
  };

  const deleteUnit = (unitIndex: number) => {
    unitList.splice(unitIndex, 1);
    setUnitList((oldUnitList) => [...oldUnitList]);
  };

  return (
    <>
      <Box className="UnitTypeAddingAreaBox">
        <Typography className="UnitTypeAddingArea_UnitTypeText">{unitType == UnitType.CHARACTERS ? unitType + "s" : unitType}</Typography>
        <Divider className="UnitTypeAddingArea_Divider"/>
        {unitList !== undefined && unitList.length > 0 && <Box className="UnitDisplayBox UnitDisplayHeadersBox">
          <Typography>Unit Name</Typography>
          <Typography>Cost (pts)</Typography>
          <Typography>Unit Size</Typography>
          <Typography>Unit Type</Typography>
        </Box>}
        {unitList?.map((unit: UnitSelection, index: number) => {
          return (
            <UnitDisplay unit={unit} key={index} unitIndex={index} handleUnitClick={handleUnitClick}></UnitDisplay>
          );
        })}
        {allowRosterModifications === undefined || allowRosterModifications === true ? 
        <IconButton className="UnitTypeAddingArea_AddButton" onClick={handleAddButtonClick}><AddIcon/></IconButton>
        :
        ""
        }
      </Box>
      {(allowRosterModifications === undefined || allowRosterModifications === true) && selectedUnit !== undefined ? 
        <EditUnitPopupScreen 
            open={isPopupOpen} 
            unit={selectedUnit.unit} 
            unitIndex={selectedUnit.unitIndex} 
            availableEnhancements={enhancementList}
            closeBackdropFunction={closeBackdropFunction} 
            saveUnitData={saveUnitData} 
            deleteUnit={deleteUnit}/> 
      : 
        ""
      }
    </>
  );
}

export default UnitTypeAddingArea;