import axios from "axios";
import { Detachment, UnitSelection, Unit, Faction, Army, FactionList, FactionList_ArmyEntry } from "../Army_Constants/Army_Constants";
import { server_url } from "../Environment Variables/Environment Variables";

export const updateDetachmentUnitRestrictions = (
    faction: string | null, 
    army: string |  null, 
    detachment: Detachment, 
    unitList: UnitSelection[], 
    setUnitList: React.Dispatch<React.SetStateAction<UnitSelection[]>>,
    availableUnitList: Unit[],
    setAvailableUnitList: React.Dispatch<React.SetStateAction<Unit[]>>, 
    availableAllyUnits: Unit[],  
    setAvailableAllyUnits: React.Dispatch<React.SetStateAction<Unit[]>>, 
) => {
  console.log("Checking Detachment restrictions on " + faction);
  switch (faction) {
    case Faction.IMPERIUM: 

      break;
    case Faction.SPACE_MARINES: 

      break;
    case Faction.CHAOS: 
      checkChaosFactionDetachments(army, detachment, unitList, setUnitList, availableUnitList, setAvailableUnitList, availableAllyUnits, setAvailableAllyUnits);
      break;
    case Faction.XENOS: 

      break;
  }
}

const checkChaosFactionDetachments = (
    army: string |  null, 
    detachment: Detachment, 
    unitList: UnitSelection[], 
    setUnitList: React.Dispatch<React.SetStateAction<UnitSelection[]>>,
    availableUnitList: Unit[],
    setAvailableUnitList: React.Dispatch<React.SetStateAction<Unit[]>>, 
    availableAllyUnits: Unit[], 
    setAvailableAllyUnits: React.Dispatch<React.SetStateAction<Unit[]>>, 
) => {
  console.log("Checking Detachment restrictions on " + army);
  switch (army) {
    case Army.CHAOS_DAEMONS: 
      checkChaosDaemonsDetachmentRestrictions(detachment, unitList, setUnitList, availableUnitList, setAvailableUnitList, availableAllyUnits, setAvailableAllyUnits);
      break;
    default: 

      break;
  }
}

const checkChaosDaemonsDetachmentRestrictions = (
    detachment: Detachment, 
    unitList: UnitSelection[], 
    setUnitList: React.Dispatch<React.SetStateAction<UnitSelection[]>>,
    availableUnitList: Unit[],
    setAvailableUnitList: React.Dispatch<React.SetStateAction<Unit[]>>, 
    availableAllyUnits: Unit[], 
    setAvailableAllyUnits: React.Dispatch<React.SetStateAction<Unit[]>>, 
) => {
  console.log("Checking Detachment restrictions on " + detachment.name);
  switch (detachment.name) {
    case FactionList.CHAOS.armies.find((army: FactionList_ArmyEntry) => army.name === Army.CHAOS_DAEMONS).detachments.find((detachment: Detachment) => detachment.name.toLowerCase().includes("shadow")).name: 
      checkChaosDaemons_ShadowLegionDetachmentRestrictions(unitList, setUnitList, availableUnitList, setAvailableUnitList, availableAllyUnits, setAvailableAllyUnits);
      break;
  }
}

const checkChaosDaemons_ShadowLegionDetachmentRestrictions = async (
    unitList: UnitSelection[], 
    setUnitList: React.Dispatch<React.SetStateAction<UnitSelection[]>>,
    availableUnitList: Unit[],
    setAvailableUnitList: React.Dispatch<React.SetStateAction<Unit[]>>, 
    availableAllyUnits: Unit[], 
    setAvailableAllyUnits: React.Dispatch<React.SetStateAction<Unit[]>>, 
) => {
  try {
    const army: string = Army.CHAOS_SPACE_MARINES;
    const response = await axios.post(server_url + "/units/factionunits", {
      armyName: army.toUpperCase(),
    });
    if (!response.data || response.data.length === 0) {
      console.warn("No units found for army " + army);
      return [];
    }
    else if (response.status !== 200) {
      console.error("Fetch Units request for army " + army + " produced an error: " + response.data);
    }

    const allowedUnitNames: string[] = [
      "Chaos Lord", 
      "Chaos Lord in Terminator Armour", 
      "Chaos Lord with Jump Pack", 
      "Chaos Lord on Bike", 
      "Chaos Terminator Squad", 
      "Chosen", 
      "Cultist Mob", 
      "Accursed Cultists", 
      "Cultist Mob with Firearms", 
      "Dark Apostle", 
      "Havocs", 
      "Legionaries", 
      "Master of Possession", 
      "Possessed", 
      "Raptors", 
      "Sorcerer", 
      "Sorcerer in Terminator Armour", 
      "Sorcerer on Bike", 
      "Warp Talons", 
    ]
    
    const allowedExtraUnits: Unit[] = response.data.filter((unit: Unit) => {
      
      return allowedUnitNames.reduce((prev: boolean, curr: string, _: number) => {
        return (prev) || (unit.name.includes(curr));
      }, false);
    });

    console.log("Adding ally units for Shadow Legion", allowedExtraUnits);
    setAvailableAllyUnits([...availableAllyUnits, ...allowedExtraUnits]);
  }
  catch (e) {
    console.error(e);
  }
}