import { Box, Typography } from "@mui/material";
import { UnitSelection, UnitType } from "../../UtilityComponents/Army_Constants/Army_Constants";
import './UnitDisplay.css';

interface UnitDisplayProps {
  unit: UnitSelection;
}

const UnitDisplay: React.FC<UnitDisplayProps> = ({unit}) => {

  return (
    <>
      <Box className="UnitDisplayBox">
        <Typography>{unit.name}</Typography>
        <Typography>{unit.costOptions[unit.selectedSizeIndex].cost}</Typography>
        <Typography>{unit.costOptions[unit.selectedSizeIndex].modelCountString}</Typography>
        <Typography>{(unit.isUnique ? "Epic " : "") + (unit.unitType === UnitType.OTHER ? "" : unit.unitType)}</Typography>
      </Box>
    </>
  );
}

export default UnitDisplay;