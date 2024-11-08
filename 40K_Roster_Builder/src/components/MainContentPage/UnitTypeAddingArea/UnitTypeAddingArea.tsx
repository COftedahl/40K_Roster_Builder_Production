import { Box, Divider, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Army, Faction, UnitSelection, UnitType } from "../../UtilityComponents/Army_Constants/Army_Constants";
import { useState } from "react";
import UnitDisplay from "../UnitDisplay/UnitDisplay";
import './UnitTypeAddingArea.css';



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

  const unitListConst: UnitSelection[] = [
    {
      name: "Typhus",
      unitType: UnitType.CHARACTERS,
      costOptions: [{
        cost: 200,
        numModels: 1,
        modelCountString: "1 model",
      }],
      isUnique: true,
      army: Army.DEATH_GUARD,
      faction: Faction.CHAOS,
      selectedSizeIndex: 0,
    },
    {
      name: "A Longer, random name",
      unitType: UnitType.OTHER,
      costOptions: [{
        cost: 100,
        numModels: 10,
        modelCountString: "10 models",
      }, {
        cost: 200,
        numModels: 20,
        modelCountString: "20 models",
      }],
      isUnique: false,
      army: Army.DEATH_GUARD,
      faction: Faction.CHAOS,
      selectedSizeIndex: 1,
    },
    {
      name: "Typhus",
      unitType: UnitType.CHARACTERS,
      costOptions: [{
        cost: 200,
        numModels: 1,
        modelCountString: "1 model",
      }],
      isUnique: true,
      army: Army.DEATH_GUARD,
      faction: Faction.CHAOS,
      selectedSizeIndex: 0,
    }
  ]

  const [unitList, setUnitList] = useState<Array<UnitSelection>>(unitListConst);

  const handleClick = () => {
    window.alert("need to implement this function too");
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
            <UnitDisplay unit={unit} key={index}></UnitDisplay>
          );
        })}
        <IconButton className="UnitTypeAddingArea_AddButton" onClick={handleClick}><AddIcon/></IconButton>
      </Box>
    </>
  );
}

export default UnitTypeAddingArea;