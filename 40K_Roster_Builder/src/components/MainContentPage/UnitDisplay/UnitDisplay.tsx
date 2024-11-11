import { Box, Typography } from "@mui/material";
import { UnitSelection, UnitType } from "../../UtilityComponents/Army_Constants/Army_Constants";
import './UnitDisplay.css';

interface UnitDisplayProps {
  unit: UnitSelection;
  unitIndex: number;
  handleUnitClick: (unit: UnitSelection, unitIndex: number) => void;
}

const UnitDisplay: React.FC<UnitDisplayProps> = ({unit, handleUnitClick, unitIndex}) => {

  const handleBoxClick = () => {
    handleUnitClick(unit, unitIndex);
  };

  return (
    <>
    {unit && unit.costOptions && unit.costOptions.length > 0 && 
      <Box className="UnitDisplayBox" onClick={handleBoxClick}>
        <Typography>{unit.name}</Typography>
        <Typography>{unit.costOptions[unit.selectedSizeIndex].cost}</Typography>
        <Typography>{unit.costOptions[unit.selectedSizeIndex].modelCountString}</Typography>
        <Typography>{(unit.isUnique ? "Epic " : "") + (unit.unitType === UnitType.OTHER ? "" : unit.unitType)}</Typography>
      </Box>}
    </>
  );
}

export default UnitDisplay;