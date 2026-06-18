import { SetStateAction } from "react";
import { BattleSize, Detachment, Enhancement, Unit, UnitSelection } from "../../UtilityComponents/Army_Constants/Army_Constants";
import FactionAddingArea, {FactionAddingAreaType} from "../FactionAddingArea/FactionAddingArea";
import QuickRosterStats from "../QuickRosterStats/QuickRosterStats";
import { ICustomCharacter, ICustomCharacterSelection } from "../../UtilityComponents/Army_Constants/CustomCharacterData";

interface RosterBuildingAreaProps {
  army: string;
  detachment?: Detachment | null;
  selectedRosterSize?: BattleSize | null;
  pointsUsed: number;
  availableCustomCharacters: ICustomCharacter[];
  availableUnits: Unit[];
  availableAllyUnits: Unit[];
  unitList: UnitSelection[];
  enhancementList: Enhancement[];
  customCharacterList: ICustomCharacterSelection[];
  characterUnitList: UnitSelection[];
  battlelineUnitList: UnitSelection[];
  otherUnitList: UnitSelection[];
  setCustomCharacterList: React.Dispatch<SetStateAction<ICustomCharacterSelection[]>>;
  setCharacterUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setBattlelineUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setOtherUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  allyCharacterUnitList: UnitSelection[];
  allyBattlelineUnitList: UnitSelection[];
  allyOtherUnitList: UnitSelection[];
  setAllyCharacterUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setAllyBattlelineUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  setAllyOtherUnitList: React.Dispatch<SetStateAction<UnitSelection[]>>;
  allowRosterModifications?: boolean;
}

const RosterBuildingArea: React.FC<RosterBuildingAreaProps> = ({
    army, 
    detachment, 
    selectedRosterSize, 
    pointsUsed, 
    availableCustomCharacters, 
    availableUnits,
    availableAllyUnits,
    unitList, 
    enhancementList, 
    customCharacterList, 
    characterUnitList, 
    battlelineUnitList, 
    otherUnitList, 
    setCustomCharacterList, 
    setCharacterUnitList, 
    setBattlelineUnitList, 
    setOtherUnitList, 
    allyCharacterUnitList, 
    allyBattlelineUnitList, 
    allyOtherUnitList, 
    setAllyCharacterUnitList, 
    setAllyBattlelineUnitList, 
    setAllyOtherUnitList, 
    allowRosterModifications}) => {


  const factionAddingAreaProps = {
    army: army,
    customCharacterList: customCharacterList, 
    characterUnitList: characterUnitList, 
    battlelineUnitList: battlelineUnitList, 
    otherUnitList: otherUnitList, 
    setCustomCharacterList: setCustomCharacterList, 
    setCharacterUnitList: setCharacterUnitList, 
    setBattlelineUnitList: setBattlelineUnitList, 
    setOtherUnitList: setOtherUnitList, 
    enhancementList: enhancementList,
    type: FactionAddingAreaType.ARMY, 
    availableCustomCharacters: availableCustomCharacters, 
    availableUnits: availableUnits, 
    allowRosterModifications: allowRosterModifications
  }

  const allyFactionAddingAreaProps = {
    army: army,
    customCharacterList: [], 
    characterUnitList: allyCharacterUnitList, 
    battlelineUnitList: allyBattlelineUnitList, 
    otherUnitList: allyOtherUnitList, 
    setCustomCharacterList: setCustomCharacterList, 
    setCharacterUnitList: setAllyCharacterUnitList, 
    setBattlelineUnitList: setAllyBattlelineUnitList, 
    setOtherUnitList: setAllyOtherUnitList, 
    enhancementList: [],
    type: FactionAddingAreaType.ALLIES, 
    availableCustomCharacters: [], 
    availableUnits: availableAllyUnits, 
    allowRosterModifications: allowRosterModifications
  }

  // useEffect(() => {
  //   setAvailableCharacterUnits(availableUnits.filter((unit: Unit) => unit.unitType === UnitType.CHARACTERS));
  //   setAvailableBattlelineUnits(availableUnits.filter((unit: Unit) => unit.unitType === UnitType.BATTLELINE));
  //   setAvailableOtherUnits(availableUnits.filter((unit: Unit) => unit.unitType === UnitType.OTHER));
  // }, [availableUnits]);

  return (
    <>
      <QuickRosterStats army={army} detachment={detachment ? detachment.name : undefined} pointsUsed={pointsUsed} allowedPoints={selectedRosterSize ? selectedRosterSize.points : undefined} pointsLeft={selectedRosterSize ? selectedRosterSize.points - pointsUsed : undefined} sizeCategory={selectedRosterSize ? selectedRosterSize.name : undefined}/>
      <FactionAddingArea {...factionAddingAreaProps}/>
      <FactionAddingArea {...allyFactionAddingAreaProps}/>
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
      {/* <FactionAddingArea factionName={factionName} detachmentName={detachmentName} type={FactionAddingAreaType.ALLIES}></FactionAddingArea> */}
    </>
  );
}

export default RosterBuildingArea;