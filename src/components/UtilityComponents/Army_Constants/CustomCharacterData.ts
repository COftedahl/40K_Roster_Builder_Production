import { Faction } from "./Army_Constants";

export interface ICustomCharacterWeapon {
  name: string, 
  cost: number, 
  restrictions: string, 
};

export interface ICustomCharacterLoadoutOptions {
  availableLoadouts: string[], 
  availableRangedWeapons: ICustomCharacterWeapon[], 
  availableMeleeWeapons: ICustomCharacterWeapon[], 
  rangedSlots: number, 
  meleeSlots: number, 
};

export interface ICustomCharacterAbility {
  name: string, 
  cost: number, 
  restrictions: string, 
};

export interface ICustomCharacterSpecialism {
  name: string, 
  cost: number, 
  restrictions: string, 
};

export interface ICustomCharacter {
  archetype: string, 
  faction: Faction, 
  army: string, 
  basePoints: number, 
  availableSpecialisms: ICustomCharacterSpecialism[], 
  availableAbilities: ICustomCharacterAbility[], 
  availableWeapons: ICustomCharacterLoadoutOptions, 
};

export interface ICustomCharacterSelection {
  archetype: string, 
  totalCost: number, 
  faction: Faction, 
  army: string, 
  selectedSpecialisms: ICustomCharacterSpecialism[], 
  selectedAbilities: ICustomCharacterAbility[], 
  loadout: ICustomCharacterWeapon[], 
};

const AdeptusAstartesSpecialismsList: ICustomCharacterSpecialism[] = [
  {
    name: "Conversion Field",
    cost: 10,
    restrictions: ""
  }, 
  {
    name: "Heavy Jump Pack and Gravis Armour",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Jump Pack",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Gravis Armour",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Phobos Armour",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Raider-Pattern Bike",
    cost: 15,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Terminator Armour",
    cost: 15,
    restrictions: "Infantry Only"
  }, 
];

const AdeptusAstartesAbilitiesList: ICustomCharacterAbility[] = [
  {
    name: "Adamantine Will",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Astartes Banner",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Blessing of the Omnissiah",
    cost: 0,
    restrictions: "Infantry or Mounted Only"
  }, 
  {
    name: "Litany of Hate",
    cost: 10,
    restrictions: ""
  }, 
  {
    name: "Narthecium",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Rites of Battle",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Tactical Precision",
    cost: 0,
    restrictions: ""
  }, 
];

const AdeptusAstartesRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Combi Weapon",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Forge Bolter",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Master-Crafted Bolt Carbine",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Master-Crafted Bolter",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Master-Crafted Heavy Bolt Rifle",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Smite",
    cost: 0, 
    restrictions: "Psyker Only", 
  }, 
  {
    name: "Storm Bolter",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Twin Bolt Rifle",
    cost: 0, 
    restrictions: "Mounted Only", 
  }, 
  {
    name: "Absolvor Bolt Pistol",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Bolt Pistol",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Boltstorm Gauntlet",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Grav Pistol",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Hand Flamer",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Heavy Bolt Pistol",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Inferno Pistol",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Neo-Volkite Pistol",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Plasma Pistol",
    cost: 0, 
    restrictions: "", 
  }, 
];

const AdeptusAstartesMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Close-Combat Weapon",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Crozius Arcanum",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Force Weapon",
    cost: 0, 
    restrictions: "Psyker Only", 
  }, 
  {
    name: "Master-Crafted Chainsword",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Master-Crafted Power Weapon",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Omnissian Power Axe",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Power Fist",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Servo-Arm",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Thunder Hammer",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Twin Lightning Claws",
    cost: 0, 
    restrictions: "", 
  }, 
];

const AdeptusAstartesDreadnoughtRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Ballistus Lasannon",
    cost: 10, 
    restrictions: "", 
  }, 
  {
    name: "Ballistus Missile Launcher",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Brutalis Bolt Rifles",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Heavy Flamer",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Heavy Onslaught Gatling Cannon",
    cost: 10, 
    restrictions: "", 
  }, 
  {
    name: "Icarus Rocket Pod",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Macro Plasma Incinerator",
    cost: 10, 
    restrictions: "", 
  }, 
  {
    name: "Onslaught Gatling Cannon",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Twin Fragstorm Grenade Launcher",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Twin Heavy Bolter",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Twin Icarus Ironhail Heavy Stuvvers",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Twin Multi-Melta",
    cost: 10, 
    restrictions: "", 
  }, 
  {
    name: "Twin Storm Bolter",
    cost: 0, 
    restrictions: "", 
  }, 
];

const AdeptusAstartesDreadnoughtMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Armoured Feet",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Brutalis Fists",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Brutalis Talons",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Redemptor Fist",
    cost: 0, 
    restrictions: "", 
  }, 
];

const AdeptusAstartesCustomCharacterList: ICustomCharacter[] = [
  {
    archetype: "Champion of the Chapter",
    faction: Faction.SPACE_MARINES,
    army: "Space Marines",
    basePoints: 70,
    availableSpecialisms: AdeptusAstartesSpecialismsList,
    availableAbilities: AdeptusAstartesAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: AdeptusAstartesRangedWeaponsList,
      availableMeleeWeapons: AdeptusAstartesMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Librarius Adept",
    faction: Faction.SPACE_MARINES,
    army: "Space Marines",
    basePoints: 70,
    availableSpecialisms: AdeptusAstartesSpecialismsList,
    availableAbilities: AdeptusAstartesAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: AdeptusAstartesRangedWeaponsList,
      availableMeleeWeapons: AdeptusAstartesMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Venerable Battle Brother",
    faction: Faction.SPACE_MARINES,
    army: "Space Marines",
    basePoints: 160,
    availableSpecialisms: AdeptusAstartesSpecialismsList,
    availableAbilities: AdeptusAstartesAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["Ballistus and feet, bolt rifles and fists, talons, heavy flamer and fist, or onslaught gatling cannon and fist; then if not rilfes and fists or talons, equip with lascoannon, heavy onslaught gatling or macro plasma; then equip with one of twin fragstorm, twin heavy bolter and twi Icarus stubbers, twin multi-melta and twin Icarus stubbers, or twin storm bolter; then, if no twin Icarus stubbers, can take I Icarus rocket pod."],
      availableRangedWeapons: AdeptusAstartesDreadnoughtRangedWeaponsList,
      availableMeleeWeapons: AdeptusAstartesDreadnoughtMeleeWeaponsList,
      rangedSlots: 4,
      meleeSlots: 1
    }
  }, 
];

export const CustomCharacterList: ICustomCharacter[] = [
  ...AdeptusAstartesCustomCharacterList, 
]