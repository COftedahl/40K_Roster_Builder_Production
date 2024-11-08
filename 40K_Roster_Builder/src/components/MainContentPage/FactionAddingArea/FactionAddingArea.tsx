import { Box, Divider, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import './FactionAddingArea.css';
import UnitTypeAddingArea from "../UnitTypeAddingArea/UnitTypeAddingArea";
import { UnitType } from "../../UtilityComponents/Army_Constants/Army_Constants";

export const enum FactionAddingAreaType {
  ARMY = "ARMY", 
  ALLIES = "ALLIES"
}

interface FactionAddingAreaProps {
  factionName: string;
  detachmentName?: string;
  type: FactionAddingAreaType;
}

const FactionAddingArea: React.FC<FactionAddingAreaProps> = ({factionName, detachmentName, type}) => {

  const handleClick = () => {
    window.alert("Need to implement this function");
  };

  return (
    <>
      {factionName !== undefined && factionName !== "" && 
      <Box className="FactionAddingAreaBox">
        <Typography className="FactionAddingArea_TypeText">{type}</Typography>
        <Divider className="FactionAddingArea_TypeDivider"/>
        <UnitTypeAddingArea unitType={UnitType.CHARACTERS}/>
        <UnitTypeAddingArea unitType={UnitType.BATTLELINE}/>
        <UnitTypeAddingArea unitType={UnitType.OTHER}/>
        <IconButton className="FactionAddingArea_AddButton" onClick={handleClick}><AddIcon/></IconButton>
      </Box>
      }
    </>
  );
}

export default FactionAddingArea;