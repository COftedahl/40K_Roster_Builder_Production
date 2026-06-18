import { Box, Typography } from "@mui/material";

interface CharacterDisplayProps {
  name: string, 
  cost: string, 
  handleUnitClicked: () => void, 
}

const CharacterDisplay: React.FC<CharacterDisplayProps> = (props: CharacterDisplayProps) => {

  return (
    <>
    {props.name !== null && props.name.length > 0 && props.cost !== null && props.cost.length > 0 && 
      <Box className="CharacterDisplay flexRow" onClick={props.handleUnitClicked}>
        <Typography className="CharacterDisplayTypography">{props.name}</Typography>
        <Typography className="CharacterDisplayTypography">{props.cost}</Typography>
      </Box>
    }
    </>
  );
}

export default CharacterDisplay;