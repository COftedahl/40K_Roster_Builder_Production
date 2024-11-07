import { Box, Typography } from "@mui/material";
import './UnitTypeAddingArea.css';
import CollapsibleCard from "../../UtilityComponents/CollapsibleCard/CollapsibleCard";

export const enum UnitType {
  CHARACTERS = "Characters", 
  BATTLELINE = "Battleline", 
  OTHER = "Other"
}

interface UnitTypeAddingAreaProps {
  unitType: UnitType;
}

const UnitTypeAddingArea: React.FC<UnitTypeAddingAreaProps> = ({unitType}) => {
  // const clickCard = (clickedBoxName: string) => (event: React.SyntheticEvent, isBoxClicked: boolean) => {
  //   console.log("clicked element");
  // };

  // return (
  //   <>
  //     <CollapsibleCard summary={unitType} expanded={false} onChange={clickCard} boxName={""} children={<></>}></CollapsibleCard>
  //   </>
  // );

  return (
    <>
      <Box className="UnitTypeAddingAreaBox">
        <Typography className="UnitTypeAddingArea_UnitTypeText">{unitType}</Typography>
      </Box>
    </>
  );
}

export default UnitTypeAddingArea;