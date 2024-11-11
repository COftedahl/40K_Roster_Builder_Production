import { Box, Divider, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import './FactionAddingArea.css';
import UnitTypeAddingArea from "../UnitTypeAddingArea/UnitTypeAddingArea";
import { Army, Faction, UnitSelection, UnitType } from "../../UtilityComponents/Army_Constants/Army_Constants";
import { useEffect, useState } from "react";

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
        cost: 10,
        numModels: 2,
        modelCountString: "2 models",
      }, {
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
    },{
      name: "person 3",
      unitType: UnitType.OTHER,
      costOptions: [{
        cost: 50,
        numModels: 3,
        modelCountString: "3 models",
      }, {
        cost: 150,
        numModels: 5,
        modelCountString: "5 models",
      },],
      isUnique: false,
      army: Army.DEATH_GUARD,
      faction: Faction.CHAOS,
      selectedSizeIndex: 1,
    },{
      name: "A Longer, random name",
      unitType: UnitType.OTHER,
      costOptions: [{
        cost: 10,
        numModels: 2,
        modelCountString: "2 models",
      }, {
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

  const handleClick = () => {
    window.alert("Need to implement this function");
  };

  const [unitList, setUnitList] = useState<UnitSelection[]>([]);

  const [characterUnitList, setCharacterUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.CHARACTERS));
  const [battlelineUnitList, setBattlelineUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.BATTLELINE));
  const [otherUnitList, setOtherUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.OTHER));

  useEffect(() => {
    setUnitList([...characterUnitList, ...battlelineUnitList, ...otherUnitList]);
  }, [characterUnitList, battlelineUnitList, otherUnitList]);

  return (
    <>
      {factionName !== undefined && factionName !== "" && 
      <Box className="FactionAddingAreaBox">
        <Typography className="FactionAddingArea_TypeText">{type}</Typography>
        <Divider className="FactionAddingArea_TypeDivider"/>
        <UnitTypeAddingArea unitType={UnitType.CHARACTERS} unitList={characterUnitList} setUnitList={setCharacterUnitList}/>
        <UnitTypeAddingArea unitType={UnitType.BATTLELINE} unitList={battlelineUnitList} setUnitList={setBattlelineUnitList}/>
        <UnitTypeAddingArea unitType={UnitType.OTHER} unitList={otherUnitList} setUnitList={setOtherUnitList}/>
        <IconButton className="FactionAddingArea_AddButton" onClick={handleClick}><AddIcon/></IconButton>
      </Box>
      }
    </>
  );
}

export default FactionAddingArea;