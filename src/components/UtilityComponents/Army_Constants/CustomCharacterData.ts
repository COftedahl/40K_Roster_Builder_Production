import { Army, Faction } from "./Army_Constants";

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
    army: Army.SPACE_MARINES,
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

const DarkAngelsSpecialismsList: ICustomCharacterSpecialism[] = [
  {
    name: "Ravenwing Bike",
    cost: 20,
    restrictions: "Infantry Only"
  }, 
];

const DarkAngelsAbilitiesList: ICustomCharacterAbility[] = [
  {
    name: "Ravenwing Hunter",
    cost: 0,
    restrictions: "Mounted Only"
  }, 
  {
    name: "Tortuous Revelation",
    cost: 0,
    restrictions: "Psyker Only"
  }, 
];

const DarkAngelsRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Astartes Grenade Launcher",
    cost: 0,
    restrictions: "Mounted Only, Limit 1 Per Model"
  }, 
  {
    name: "Plasma Talon",
    cost: 0,
    restrictions: ""
  }, 
]

const DarkAngelsMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Calibanite Greatsword",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Great Weapon of the Unforgiven",
    cost: 0,
    restrictions: "Terminator Only"
  }, 
  {
    name: "Relic Weapon",
    cost: 0,
    restrictions: ""
  }, 
]

const DarkAngelsCustomCharacterList: ICustomCharacter[] = [
  ...AdeptusAstartesCustomCharacterList.map((character: ICustomCharacter) => {
    return {
      ...character, 
      army: Army.DARK_ANGELS, 
      availableAbilities: [...character.availableAbilities, 
        ...DarkAngelsAbilitiesList, 
      ], 
      availableSpecialisms: [...character.availableSpecialisms, 
        ...DarkAngelsSpecialismsList, 
      ], 
      availableWeapons: {
        ...character.availableWeapons, 
        availableMeleeWeapons: [...character.availableWeapons.availableMeleeWeapons, 
          ...DarkAngelsMeleeWeaponsList
        ], 
        availableRangedWeapons: [...character.availableWeapons.availableRangedWeapons, 
          ...DarkAngelsRangedWeaponsList
        ], 
      }
    }
  }), 
];

const BloodAngelsSpecialismsList: ICustomCharacterSpecialism[] = [
  {
    name: "Death Companion",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Death Companion with Jump Pack",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Hero of the Golden Host",
    cost: 10,
    restrictions: "Champion of the Chapter Only"
  }, 
  {
    name: "Venerable Death Companion",
    cost: 10,
    restrictions: "Dreadnought Only"
  }, 
  {
    name: "Venerable Librarian",
    cost: 0,
    restrictions: "Dreadnought Only"
  }, 
];

const BloodAngelsAbilitiesList: ICustomCharacterAbility[] = [
  {
    name: "Blood Chalice",
    cost: 20,
    restrictions: "Champion of the Chapter Only"
  }, 
  {
    name: "Forlorn Hero",
    cost: 0,
    restrictions: ""
  }, 
];

const BloodAngelsRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Angelus Boltgun",
    cost: 0,
    restrictions: ""
  }, 
]

const BloodAngelsMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Encarmine Blade",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Encarmine Spear",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Eviscerator",
    cost: 0,
    restrictions: ""
  }, 
]

const BloodAngelsCustomCharacterList: ICustomCharacter[] = [
  ...AdeptusAstartesCustomCharacterList.map((character: ICustomCharacter) => {
    return {
      ...character, 
      army: Army.BLOOD_ANGELS, 
      availableAbilities: [...character.availableAbilities, 
        ...BloodAngelsAbilitiesList, 
      ], 
      availableSpecialisms: [...character.availableSpecialisms, 
        ...BloodAngelsSpecialismsList, 
      ], 
      availableWeapons: {
        ...character.availableWeapons, 
        availableMeleeWeapons: [...character.availableWeapons.availableMeleeWeapons, 
          ...BloodAngelsMeleeWeaponsList
        ], 
        availableRangedWeapons: [...character.availableWeapons.availableRangedWeapons, 
          ...BloodAngelsRangedWeaponsList
        ], 
      }
    }
  }), 
];

const SpaceWolvesSpecialismsList: ICustomCharacterSpecialism[] = [
  {
    name: "Curse of the Wulfen",
    cost: 0,
    restrictions: "Champion of the Chapter Only"
  }, 
  {
    name: "Fenrisian Terminator Armour",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Thunderwolf Mount",
    cost: 20,
    restrictions: "Champion of the Chapter Only"
  }, 
  {
    name: "Wolf Lord's Chosen",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
];

const SpaceWolvesAbilitiesList: ICustomCharacterAbility[] = [
  {
    name: "Storm Shield",
    cost: 0,
    restrictions: ""
  }, 
];

const SpaceWolvesRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Stormfang Auto-Launcher",
    cost: 0,
    restrictions: "Wulfen Only"
  }, 
  {
    name: "Helfrost Pistol",
    cost: 0,
    restrictions: ""
  }, 
]

const SpaceWolvesMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Teeth and Claws",
    cost: 0,
    restrictions: "Model with Thunderwolf Mount Only, Limit 1 Per Model"
  }, 
]

const SpaceWolvesCustomCharacterList: ICustomCharacter[] = [
  ...AdeptusAstartesCustomCharacterList.map((character: ICustomCharacter) => {
    return {
      ...character, 
      army: Army.SPACE_WOLVES, 
      availableAbilities: [...character.availableAbilities, 
        ...SpaceWolvesAbilitiesList, 
      ], 
      availableSpecialisms: [...character.availableSpecialisms, 
        ...SpaceWolvesSpecialismsList, 
      ], 
      availableWeapons: {
        ...character.availableWeapons, 
        availableMeleeWeapons: [...character.availableWeapons.availableMeleeWeapons, 
          ...SpaceWolvesMeleeWeaponsList
        ], 
        availableRangedWeapons: [...character.availableWeapons.availableRangedWeapons, 
          ...SpaceWolvesRangedWeaponsList
        ], 
      }
    }
  }), 
];

const BlackTemplarsSpecialismsList: ICustomCharacterSpecialism[] = [];

const BlackTemplarsAbilitiesList: ICustomCharacterAbility[] = [
  {
    name: "Armour of Faith",
    cost: 0,
    restrictions: "Infantry or Mounted Only, Limit 1 Per Army, Cannot include this model in an army that includes an Emperor's Champion Model"
  }, 
  {
    name: "Condemnatory Annihilation",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Inspirational Exemplar",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Remoreseless Persecution",
    cost: 10,
    restrictions: ""
  }, 
  {
    name: "Vehement Aggression",
    cost: 20,
    restrictions: ""
  }, 
  {
    name: "Vengeful Exhortation",
    cost: 0,
    restrictions: ""
  }, 
];

const BlackTemplarsRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Pyreblaster",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Pyre Pistol",
    cost: 0,
    restrictions: ""
  }, 
]

const BlackTemplarsMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Black Sword",
    cost: 0,
    restrictions: "Limit 1 Per Army, Cannot include this model in an army that includes an Emperor's Champion model"
  }, 
]

const BlackTemplarsCustomCharacterList: ICustomCharacter[] = [
  ...AdeptusAstartesCustomCharacterList.map((character: ICustomCharacter) => {
    return {
      ...character, 
      army: Army.BLACK_TEMPLARS, 
      availableAbilities: [...character.availableAbilities, 
        ...BlackTemplarsAbilitiesList, 
      ], 
      availableSpecialisms: [...character.availableSpecialisms, 
        ...BlackTemplarsSpecialismsList, 
      ], 
      availableWeapons: {
        ...character.availableWeapons, 
        availableMeleeWeapons: [...character.availableWeapons.availableMeleeWeapons, 
          ...BlackTemplarsMeleeWeaponsList
        ], 
        availableRangedWeapons: [...character.availableWeapons.availableRangedWeapons, 
          ...BlackTemplarsRangedWeaponsList
        ], 
      }
    }
  }), 
];

export const CustomCharacterList: ICustomCharacter[] = [
  ...AdeptusAstartesCustomCharacterList, 
  ...DarkAngelsCustomCharacterList, 
  ...BloodAngelsCustomCharacterList, 
  ...SpaceWolvesCustomCharacterList, 
  ...BlackTemplarsCustomCharacterList, 
]