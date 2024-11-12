import { useEffect, useState } from "react";
import { Army, BattleSize, Detachment, Enhancement, Faction, UnitSelection, UnitType } from "../../UtilityComponents/Army_Constants/Army_Constants";
import FactionAddingArea, {FactionAddingAreaType} from "../FactionAddingArea/FactionAddingArea";
import QuickRosterStats from "../QuickRosterStats/QuickRosterStats";

interface RosterBuildingAreaProps {
  factionName: string;
  detachment?: Detachment | null;
  selectedRosterSize?: BattleSize | null;
}

const RosterBuildingArea: React.FC<RosterBuildingAreaProps> = ({factionName, detachment, selectedRosterSize}) => {

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
  ];

  const enhancementListConst: Enhancement[] = [
    {name: "Baleful Grimoire", cost: 20, doesCostPoints: true}, 
    {name: "Impossible Robe", cost: 25, doesCostPoints: true}
  ];

  const [unitList, setUnitList] = useState<UnitSelection[]>([]);
  const [enhancementList, setEnhancementList] = useState<Enhancement[]>(detachment ? detachment.enhancements : []);
  const [pointsUsed, setPointsUsed] = useState<number>(0);

  const [characterUnitList, setCharacterUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.CHARACTERS));
  const [battlelineUnitList, setBattlelineUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.BATTLELINE));
  const [otherUnitList, setOtherUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.OTHER));

  useEffect(() => {
    setUnitList([...characterUnitList, ...battlelineUnitList, ...otherUnitList]);
  }, [characterUnitList, battlelineUnitList, otherUnitList]);

  useEffect(() => {
    setEnhancementList(detachment ? detachment.enhancements : []);
  }, [detachment]);

  useEffect(() => {
    setPointsUsed(() => {
      let cost: number = 0;
      unitList.map((unit: UnitSelection) => {
        cost += (unit.costOptions[unit.selectedSizeIndex]?.cost) + (unit.enhancement && unit.enhancement.doesCostPoints ? unit.enhancement.cost : 0);
      });
      return cost;
    })
  }, [unitList]);

  const factionAddingAreaProps = {
    factionName: factionName,
    characterUnitList: characterUnitList, 
    battlelineUnitList: battlelineUnitList, 
    otherUnitList: otherUnitList, 
    setCharacterUnitList: setCharacterUnitList, 
    setBattlelineUnitList: setBattlelineUnitList, 
    setOtherUnitList: setOtherUnitList, 
    enhancementList: enhancementList
  }

  return (
    <>
      <QuickRosterStats faction={factionName} detachment={detachment ? detachment.name : undefined} pointsUsed={pointsUsed} allowedPoints={selectedRosterSize ? selectedRosterSize.points : undefined} pointsLeft={selectedRosterSize ? selectedRosterSize.points - pointsUsed : undefined} sizeCategory={selectedRosterSize ? selectedRosterSize.name : undefined}/>
      <FactionAddingArea {...factionAddingAreaProps} type={FactionAddingAreaType.ARMY}></FactionAddingArea>
      <FactionAddingArea {...factionAddingAreaProps} type={FactionAddingAreaType.ALLIES}></FactionAddingArea>
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
    </>
  );
}

export default RosterBuildingArea;