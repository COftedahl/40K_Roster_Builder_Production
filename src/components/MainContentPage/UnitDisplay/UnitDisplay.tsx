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
        <Typography className="UnitDisplayTypography">{unit.name}</Typography>
        <Typography className="UnitDisplayTypography">{unit.costOptions[unit.selectedSizeIndex].cost + 
                (unit.enhancement &&  unit.enhancement.doesCostPoints ? unit.enhancement.cost : 0) }</Typography>
        <Typography className="UnitDisplayTypography">{
          (unit.unitType === UnitType.CHARACTERS 
          ? unit.costOptions[unit.selectedSizeIndex].modelCountString + 
            (unit.enhancement ? " with " + unit.enhancement.name : "")
          : unit.costOptions[unit.selectedSizeIndex].modelCountString)}
        </Typography>
        <Typography className="UnitDisplayTypography">{(unit.isUnique ? "Epic " : "") + (unit.unitType === UnitType.OTHER ? "" : unit.unitType)}</Typography>
      </Box>}
    </>
  );
}

export default UnitDisplay;