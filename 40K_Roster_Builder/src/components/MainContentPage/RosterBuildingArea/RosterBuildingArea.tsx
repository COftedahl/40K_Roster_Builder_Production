import { SetStateAction } from "react";
import { BattleSize, Detachment, Enhancement, Unit, UnitSelection } from "../../UtilityComponents/Army_Constants/Army_Constants";
import FactionAddingArea, {FactionAddingAreaType} from "../FactionAddingArea/FactionAddingArea";
import QuickRosterStats from "../QuickRosterStats/QuickRosterStats";

interface RosterBuildingAreaProps {
  army: string;
  detachment?: Detachment | null;
  selectedRosterSize?: BattleSize | null;
  pointsUsed: number;
  availableUnits: Unit[];
  unitList: UnitSelection[];
  enhancementList: Enhancement[];
  characterUnitList: UnitSelection[];
  battlelineUnitList: UnitSelection[];
  otherUnitList: UnitSelection[];
  setCharacterUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setBattlelineUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setOtherUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
}

const RosterBuildingArea: React.FC<RosterBuildingAreaProps> = ({
    army, 
    detachment, 
    selectedRosterSize, 
    pointsUsed, 
    availableUnits,
    unitList, 
    enhancementList, 
    characterUnitList, 
    battlelineUnitList, 
    otherUnitList, 
    setCharacterUnitList, 
    setBattlelineUnitList, 
    setOtherUnitList}) => {


  const factionAddingAreaProps = {
    army: army,
    characterUnitList: characterUnitList, 
    battlelineUnitList: battlelineUnitList, 
    otherUnitList: otherUnitList, 
    setCharacterUnitList: setCharacterUnitList, 
    setBattlelineUnitList: setBattlelineUnitList, 
    setOtherUnitList: setOtherUnitList, 
    enhancementList: enhancementList
  }

  // useEffect(() => {
  //   setAvailableCharacterUnits(availableUnits.filter((unit: Unit) => unit.unitType === UnitType.CHARACTERS));
  //   setAvailableBattlelineUnits(availableUnits.filter((unit: Unit) => unit.unitType === UnitType.BATTLELINE));
  //   setAvailableOtherUnits(availableUnits.filter((unit: Unit) => unit.unitType === UnitType.OTHER));
  // }, [availableUnits]);

  return (
    <>
      <QuickRosterStats army={army} detachment={detachment ? detachment.name : undefined} pointsUsed={pointsUsed} allowedPoints={selectedRosterSize ? selectedRosterSize.points : undefined} pointsLeft={selectedRosterSize ? selectedRosterSize.points - pointsUsed : undefined} sizeCategory={selectedRosterSize ? selectedRosterSize.name : undefined}/>
      <FactionAddingArea {...factionAddingAreaProps} type={FactionAddingAreaType.ARMY} availableUnits={availableUnits}></FactionAddingArea>
      <FactionAddingArea {...factionAddingAreaProps} type={FactionAddingAreaType.ALLIES} availableUnits={availableUnits}></FactionAddingArea>
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
    </>
  );
}

export default RosterBuildingArea;