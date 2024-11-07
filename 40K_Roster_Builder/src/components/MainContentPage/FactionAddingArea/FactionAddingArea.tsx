import { Box, Typography } from "@mui/material";


export const enum FactionAddingAreaType {
  ARMY, 
  ALLIES
}

interface FactionAddingAreaProps {
  factionName: string;
  detachmentName?: string;
  type: FactionAddingAreaType;
}

const FactionAddingArea: React.FC<FactionAddingAreaProps> = ({factionName, detachmentName, type}) => {

  return (
    <>
      {factionName !== undefined && factionName !== "" && 
      <Box className="FactionAddingAreaBox">
        <Typography>{factionName + ", " + detachmentName + ", " + type.toString()}</Typography>
      </Box>
      }
    </>
  );
}

export default FactionAddingArea;