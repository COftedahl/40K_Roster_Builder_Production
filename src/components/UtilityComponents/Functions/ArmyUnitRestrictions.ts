import { Army, Detachment, Unit, UnitSelection, UnitType } from "../Army_Constants/Army_Constants";
import { Faction } from "../Army_Constants/Army_Constants";

const updateArmyRestrictions = (
    faction: string | null, 
    army: string |  null, 
    unitList: UnitSelection[], 
    setUnitList: React.Dispatch<React.SetStateAction<UnitSelection[]>>,
    availableUnitList: Unit[],
    setAvailableUnitList: React.Dispatch<React.SetStateAction<Unit[]>>, 
) => {
  switch (faction) {
    case Faction.IMPERIUM: 
      checkImperiumFaction(army, unitList, setUnitList, availableUnitList, setAvailableUnitList);
      break;
    case Faction.SPACE_MARINES: 

      break;
    case Faction.CHAOS: 
      checkChaosFaction(army, unitList, setUnitList, availableUnitList, setAvailableUnitList);
      break;
    case Faction.XENOS: 

      break;
  }
};

const checkChaosFaction = (
    army: string |  null, 
    unitList: UnitSelection[], 
    setUnitList: React.Dispatch<React.SetStateAction<UnitSelection[]>>,
    availableUnitList: Unit[],
    setAvailableUnitList: React.Dispatch<React.SetStateAction<Unit[]>>, 
) => {
  switch(army) {
    case Army.THOUSAND_SONS: 
      
      break;
    case Army.CHAOS_DAEMONS: 

      break;
  }
}

const checkImperiumFaction = (
    army: string |  null, 
    unitList: UnitSelection[], 
    setUnitList: React.Dispatch<React.SetStateAction<UnitSelection[]>>,
    availableUnitList: Unit[],
    setAvailableUnitList: React.Dispatch<React.SetStateAction<Unit[]>>, 
) => {
  unitList.map((currUnit: UnitSelection) => {
    if (currUnit.unitType === UnitType.CHARACTERS) {
      switch (currUnit.name) {
        case "Militarum Tempestus Command Squad": 
          updateTempestusScionCommandSquad(unitList, setUnitList, availableUnitList, setAvailableUnitList);
          break;
      }
    }
  });
};

const updateTempestusScionCommandSquad = (
    unitList: UnitSelection[], 
    setUnitList: React.Dispatch<React.SetStateAction<UnitSelection[]>>,
    availableUnitList: Unit[],
    setAvailableUnitList: React.Dispatch<React.SetStateAction<Unit[]>>, 
) => {
  availableUnitList.map((unit: Unit) => {
    if (unit.name === "Tempestus Scions" && unit.unitType !== UnitType.BATTLELINE) {
      unit.unitType = UnitType.BATTLELINE.toLowerCase();
      setAvailableUnitList([...availableUnitList]);
      unitList.map((unitAdded: UnitSelection) => {
        if (unitAdded.name === "Tempestus Scions" && unitAdded.unitType !== UnitType.BATTLELINE) {
          unitAdded.unitType = UnitType.BATTLELINE;
        }
      });
      setUnitList([...unitList]);
    }
  });
};

export default updateArmyRestrictions;