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

const AdeptusCustodesSpecialismsList: ICustomCharacterSpecialism[] = [
  {
    name: "Allarus Terminator Armour",
    cost: 0,
    restrictions: "Guardian of the Throne Only"
  }, 
  {
    name: "Praesidium Shield",
    cost: 0,
    restrictions: ""
  }, 
];

const AdeptusCustodesAbilitiesList: ICustomCharacterAbility[] = [
  {
    name: "Abyssal Void",
    cost: 0,
    restrictions: "Null Maiden Only"
  }, 
  {
    name: "Singular Expertise",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Swift Onslaught",
    cost: 0,
    restrictions: ""
  }, 
];

const AdeptusCustodesRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Ballistus Grenade Launcher",
    cost: 0, 
    restrictions: "Terminator Only", 
  }, 
  {
    name: "Castellan Axe",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Guardian Spear",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Pyrithite Spear",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Salvo Launcher",
    cost: 0, 
    restrictions: "Mounted Only", 
  }, 
  {
    name: "Vertus Hurricane Bolter",
    cost: 0, 
    restrictions: "Mounted Only", 
  }, 
  {
    name: "Sentinel Blade",
    cost: 0, 
    restrictions: "", 
  }, 
];

const AdeptusCustodesMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Castellan Axe",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Guardian Spear",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Interceptor Lance",
    cost: 0, 
    restrictions: "Mounted Only", 
  }, 
  {
    name: "Misericordia",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Pyrithite Spear",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Sentinel Blade",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Vaultswords",
    cost: 0, 
    restrictions: "", 
  }, 
];

const AdeptusCustodesNullMaidenRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Master-Crafted Boltgun",
    cost: 0, 
    restrictions: "Null Maiden Only", 
  }, 
  {
    name: "Witchseeker Flamer",
    cost: 0, 
    restrictions: "Null Maiden Only", 
  }, 
];

const AdeptusCustodesNullMaidenMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Close Combat Weapon",
    cost: 0, 
    restrictions: "Null Maiden Only", 
  }, 
  {
    name: "Executioner Greatblade",
    cost: 0, 
    restrictions: "Null Maiden Only", 
  }, 
];

const AdeptusCustodesCustomCharacterList: ICustomCharacter[] = [
  {
    archetype: "Guardian of the Throne",
    faction: Faction.IMPERIUM,
    army: Army.ADEPTUS_CUSTODES,
    basePoints: 130,
    availableSpecialisms: AdeptusCustodesSpecialismsList,
    availableAbilities: AdeptusCustodesAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: AdeptusCustodesRangedWeaponsList,
      availableMeleeWeapons: AdeptusCustodesMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Null Maiden",
    faction: Faction.IMPERIUM,
    army: Army.ADEPTUS_CUSTODES,
    basePoints: 65,
    availableSpecialisms: AdeptusCustodesSpecialismsList,
    availableAbilities: AdeptusCustodesAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: AdeptusCustodesNullMaidenRangedWeaponsList,
      availableMeleeWeapons: AdeptusCustodesNullMaidenMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Kataphraktoi Exemplar",
    faction: Faction.IMPERIUM,
    army: Army.ADEPTUS_CUSTODES,
    basePoints: 130,
    availableSpecialisms: AdeptusCustodesSpecialismsList,
    availableAbilities: AdeptusCustodesAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-2 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: AdeptusCustodesRangedWeaponsList,
      availableMeleeWeapons: AdeptusCustodesMeleeWeaponsList,
      rangedSlots: 4,
      meleeSlots: 2
    }
  }, 
];

const AdeptaSororitasSpecialismsList: ICustomCharacterSpecialism[] = [
  {
    name: "Absolver of Sin",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Cherub",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Jump Pack",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
];

const AdeptaSororitasAbilitiesList: ICustomCharacterAbility[] = [
  {
    name: "Divine Authority",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Fury of the Righteous",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Laud Hailer",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Shield of the Righteous",
    cost: 25,
    restrictions: ""
  }, 
  {
    name: "Unflinching Determination",
    cost: 15,
    restrictions: ""
  }, 
];

const AdeptaSororitasRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Artificer-Crafted Storm Bolter",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Autogun",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Boltgun",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Brazier of Holy Fire",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Combi-Weapon",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Condemnor Boltgun",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Heavy Bolter",
    cost: 0, 
    restrictions: "Reliquant Knight Only", 
  }, 
  {
    name: "Meltagun",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Munistorum Flamer",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Munitorum Heavy Flamer",
    cost: 0, 
    restrictions: "Reliquant Knight Only", 
  }, 
  {
    name: "Multi-Melta",
    cost: 0, 
    restrictions: "Reliquant Knight Only", 
  }, 
  {
    name: "Paragon Grenade Launchers",
    cost: 0, 
    restrictions: "Reliquant Knight Only", 
  }, 
  {
    name: "Paragon Storm Bolters",
    cost: 0, 
    restrictions: "Reliquant Knight Only", 
  }, 
  {
    name: "Autopistol",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Bolt Pistol",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Inferno Pistol",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Munistorum Hand Flamer",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Plasma Pistol",
    cost: 0, 
    restrictions: "", 
  }, 
];

const AdeptaSororitasMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Blessed Blade",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Blessed Polearm",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Close Combat Weapon",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Hallowed Chainsword",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Holy Eviscerator",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Neural Whips",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Paragon War Blade",
    cost: 0, 
    restrictions: "Reliquant Knight Only", 
  }, 
  {
    name: "Paragon War Mace",
    cost: 0, 
    restrictions: "Reliquant Knight Only", 
  }, 
  {
    name: "Power Weapon",
    cost: 0, 
    restrictions: "", 
  }, 
];

const AdeptaSororitasCustomCharacterList: ICustomCharacter[] = [
  {
    archetype: "Militant Commander",
    faction: Faction.IMPERIUM,
    army: Army.ADEPTA_SORORITAS,
    basePoints: 75,
    availableSpecialisms: AdeptaSororitasSpecialismsList,
    availableAbilities: AdeptaSororitasAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: AdeptaSororitasRangedWeaponsList,
      availableMeleeWeapons: AdeptaSororitasMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Inspiring Devotee",
    faction: Faction.IMPERIUM,
    army: Army.ADEPTA_SORORITAS,
    basePoints: 50,
    availableSpecialisms: AdeptaSororitasSpecialismsList,
    availableAbilities: AdeptaSororitasAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: AdeptaSororitasRangedWeaponsList,
      availableMeleeWeapons: AdeptaSororitasMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Reliquant Knight",
    faction: Faction.IMPERIUM,
    army: Army.ADEPTA_SORORITAS,
    basePoints: 100,
    availableSpecialisms: AdeptaSororitasSpecialismsList,
    availableAbilities: AdeptaSororitasAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-2 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: AdeptaSororitasRangedWeaponsList,
      availableMeleeWeapons: AdeptaSororitasMeleeWeaponsList,
      rangedSlots: 4,
      meleeSlots: 2
    }
  }, 
];

const AdeptusMechanicusSpecialismsList: ICustomCharacterSpecialism[] = [
  {
    name: "Cybercanid Mount",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Cybernetica Overseer",
    cost: 10,
    restrictions: ""
  }, 
  {
    name: "Flight Pack",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Stilt Limbs",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
];

const AdeptusMechanicusAbilitiesList: ICustomCharacterAbility[] = [
  {
    name: "Control Edict",
    cost: 10,
    restrictions: ""
  }, 
  {
    name: "Galvanic Field",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Omnissiah's Blessing",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Seekers of Divine Arcana",
    cost: 0,
    restrictions: ""
  }, 
];

const AdeptusMechanicusRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Arc Rifle",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Eradication Ray",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Flechette Carbine",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Galvanic Carbine",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Galvanic Rifle",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Magnarail Lance",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Phosphor Blast Carbine",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Phosphor Torch",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Plasma Caliver",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Radium Carbine",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Radium Jezzail",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Transonic Cannon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Transuranic Aquebus",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Twin Cognis Autocannon",
    cost: 0,
    restrictions: "Ironstrider Alpha Only, You may only select one of these weapon options"
  }, 
  {
    name: "Twin Cognis Lascannon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Volkite Blaster",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Flechette Blaster",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Macrostubber",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Mechanicus Pistol",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Phosphor Serpenta",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Stubcarbine",
    cost: 0,
    restrictions: ""
  }, 
];

const AdeptusMechanicusMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Arc Maul",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Close Combat Weapon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Control Stave",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Ironstrider Feet",
    cost: 0,
    restrictions: "Ironstrider Alpha Only, You may only select one fo these weapon options"
  }, 
  {
    name: "Omnissian Axe",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Power Fist",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Power Weapon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Servo Arc Claw",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Servo Arm",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Taser Goad",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Taser Lance",
    cost: 0,
    restrictions: "Ironstrider Alpha Only, You may only select one of these weapon options"
  }, 
  {
    name: "Transonic Blades",
    cost: 0,
    restrictions: ""
  }, 
];

const AdeptusMechanicusCustomCharacterList: ICustomCharacter[] = [
  {
    archetype: "Magos",
    faction: Faction.IMPERIUM,
    army: Army.ADEPTUS_MECHANICUS,
    basePoints: 70,
    availableSpecialisms: AdeptusMechanicusSpecialismsList,
    availableAbilities: AdeptusMechanicusAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: AdeptusMechanicusRangedWeaponsList,
      availableMeleeWeapons: AdeptusMechanicusMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Cohort Commander",
    faction: Faction.IMPERIUM,
    army: Army.ADEPTUS_MECHANICUS,
    basePoints: 45,
    availableSpecialisms: AdeptusMechanicusSpecialismsList,
    availableAbilities: AdeptusMechanicusAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: AdeptusMechanicusRangedWeaponsList,
      availableMeleeWeapons: AdeptusMechanicusMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Ironstrider Alpha",
    faction: Faction.IMPERIUM,
    army: Army.ADEPTUS_MECHANICUS,
    basePoints: 80,
    availableSpecialisms: AdeptusMechanicusSpecialismsList,
    availableAbilities: AdeptusMechanicusAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: AdeptusMechanicusRangedWeaponsList,
      availableMeleeWeapons: AdeptusMechanicusMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
];

const ImperialAgentsSpecialismsList: ICustomCharacterSpecialism[] = [
  {
    name: "Ordo Hereticus",
    cost: 0,
    restrictions: "Martial Agent or Enthroned Agent Only"
  }, 
  {
    name: "Ordo Malleus",
    cost: 0,
    restrictions: "Martial Agent or Enthroned Agent Only"
  }, 
  {
    name: "Ordo Xenos",
    cost: 0,
    restrictions: "Martial Agent or Enthroned Agent Only"
  }, 
  {
    name: "Rogue Trader",
    cost: 0,
    restrictions: "Martial Agent or Enthroned Agent Only"
  }, 
  {
    name: "The Long Vigil",
    cost: 0,
    restrictions: "Deathwatch Agent Only"
  }, 
];

const ImperialAgentsAbilitiesList: ICustomCharacterAbility[] = [
  {
    name: "Backroom Deals",
    cost: 0,
    restrictions: "Rogue Trader Only"
  }, 
  {
    name: "High-Handed Authority",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Holy Hatred",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Nowhere to Hide",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Oracular Gifts",
    cost: 0,
    restrictions: "Inquisitor Only"
  }, 
  {
    name: "Termination",
    cost: 0,
    restrictions: ""
  }, 
];

const ImperialAgentsRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Arbites Combat Shotgun",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Arbites Grenade Launcher",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Artificer-Crafted Storm Bolter",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Artificer Shotgun",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Boltgun",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Combi-Weapon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Comndemnor Boltgun",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Executioner Shotgun",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Heavy Bolter",
    cost: 0,
    restrictions: "Walker Only"
  }, 
  {
    name: "Lasgun",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Master-Crafted Bolt Sniper Rifle",
    cost: 0,
    restrictions: "Deathwatch Agent Only"
  }, 
  {
    name: "Meltagun",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Munistorum Flamer",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Munistorum Heavy Flamer",
    cost: 0,
    restrictions: "Walker Only"
  }, 
  {
    name: "Multi-Melta",
    cost: 0,
    restrictions: "Walker Only"
  }, 
  {
    name: "Plasma Gun",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Psychic Shockwave",
    cost: 0,
    restrictions: "Psyker Only"
  }, 
  {
    name: "Unholy Gaze",
    cost: 0,
    restrictions: "Psyker Only"
  }, 
  {
    name: "Vigil Spear",
    cost: 0,
    restrictions: "Deathwatch Agent Only"
  }, 
  {
    name: "Webber",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Agent Firearm",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Heavy Bolt Pistol",
    cost: 0,
    restrictions: "Deathwatch Agent Only"
  }, 
  {
    name: "Holy Pistol",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Household Pistol",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Inferno Pistol",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Munistorum Hand Flamer",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Plasma Pistol",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Voltaic Pistol",
    cost: 0,
    restrictions: ""
  }, 
];

const ImperialAgentsMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Chainfist",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Chainsword",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Close Combat Weapon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Deathwatch Weapon",
    cost: 0,
    restrictions: "Deathwatch Agent Only"
  }, 
  {
    name: "Eviscerator",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Excruciator Maul",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Force Weapon",
    cost: 0,
    restrictions: "Psyker Only"
  }, 
  {
    name: "Power Weapon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Warp Grasp",
    cost: 0,
    restrictions: "Psyker Only"
  }, 
];

const ImperialAgentsCustomCharacterList: ICustomCharacter[] = [
  {
    archetype: "Martial Agent",
    faction: Faction.IMPERIUM,
    army: Army.AGENTS_OF_THE_IMPERIUM,
    basePoints: 60,
    availableSpecialisms: ImperialAgentsSpecialismsList,
    availableAbilities: ImperialAgentsAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: ImperialAgentsRangedWeaponsList,
      availableMeleeWeapons: ImperialAgentsMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Deathwatch Agent",
    faction: Faction.IMPERIUM,
    army: Army.AGENTS_OF_THE_IMPERIUM,
    basePoints: 105,
    availableSpecialisms: ImperialAgentsSpecialismsList,
    availableAbilities: ImperialAgentsAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: ImperialAgentsRangedWeaponsList,
      availableMeleeWeapons: ImperialAgentsMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Entrhoned Agent",
    faction: Faction.IMPERIUM,
    army: Army.AGENTS_OF_THE_IMPERIUM,
    basePoints: 60,
    availableSpecialisms: ImperialAgentsSpecialismsList,
    availableAbilities: ImperialAgentsAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-2 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: ImperialAgentsRangedWeaponsList,
      availableMeleeWeapons: ImperialAgentsMeleeWeaponsList,
      rangedSlots: 4,
      meleeSlots: 2
    }
  }, 
];

const AstraMilitarumSpecialismsList: ICustomCharacterSpecialism[] = [
  {
    name: "Brute Shield",
    cost: 0,
    restrictions: "Augmented Bone 'Ead Only"
  }, 
  {
    name: "Extra Armour",
    cost: 0,
    restrictions: "Sentinel Commander Only"
  }, 
  {
    name: "Noble Steed",
    cost: 0,
    restrictions: "Front-Line Commander Only"
  }, 
  {
    name: "Slabshield",
    cost: 0,
    restrictions: "Augmented Bone 'Ead Only"
  }, 
];

const AstraMilitarumAbilitiesList: ICustomCharacterAbility[] = [
  {
    name: "Dauntless Veteran",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Fire Coordinator",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Martial Zealot",
    cost: 0,
    restrictions: ""
  }, 
];

const AstraMilitarumRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Autocannon",
    cost: 0, 
    restrictions: "Sentinel Commander Only", 
  }, 
  {
    name: "Autogun",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Boltgun",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Combat Shotgun",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Grenadier Gauntlet",
    cost: 0,
    restrictions: "Augmented Bone 'Ead Only"
  }, 
  {
    name: "Heavy Flamer",
    cost: 0,
    restrictions: "Sentinel Commander Only"
  }, 
  {
    name: "Lascannon",
    cost: 0,
    restrictions: "Sentinel Commander Only"
  }, 
  {
    name: "Las Carbine",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Lasgun",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Missile Launcher",
    cost: 0,
    restrictions: "Sentinel Commander Only"
  }, 
  {
    name: "Multi-Laser",
    cost: 0,
    restrictions: "Sentinel Commander Only"
  }, 
  {
    name: "Plasma Cannon",
    cost: 0,
    restrictions: "Sentinel Commander Only"
  }, 
  {
    name: "Ripper Gun",
    cost: 0,
    restrictions: "Augmented Bone 'Ead Only"
  }, 
  {
    name: "Zealot's Vindicator",
    cost: 0,
    restrictions: ""
  }, 
];

const AstraMilitarumPistolWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Autopistol",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Bolt Pistol",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Hand Flamer",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Laspistol",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Plasma Pistol",
    cost: 0,
    restrictions: ""
  }, 
];

const AstraMilitarumMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Bullgryn Maul",
    cost: 0, 
    restrictions: "Augmented Bone 'Ead Only", 
  }, 
  {
    name: "Chainsword",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Close Combat Weapon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Frag Lance",
    cost: 0,
    restrictions: "Mounted Only"
  }, 
  {
    name: "Goad Lance",
    cost: 0,
    restrictions: "Mounted Only"
  }, 
  {
    name: "Huge Knife",
    cost: 0,
    restrictions: "Augmented Bone 'Ead Only"
  }, 
  {
    name: "Hunting Lance",
    cost: 0,
    restrictions: "Mounted Only"
  }, 
  {
    name: "Power Fist",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Power Weapon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Ripper Gun",
    cost: 0,
    restrictions: "Augmented Bone 'Ead Only"
  }, 
  {
    name: "Sentinel Chainsaw",
    cost: 0,
    restrictions: "Sentinel Commander Only"
  }, 
  {
    name: "Zealot's Vindicator",
    cost: 0,
    restrictions: ""
  }, 
];

const AstraMilitarumCustomCharacterList: ICustomCharacter[] = [
  {
    archetype: "Front-Line Commander",
    faction: Faction.IMPERIUM,
    army: Army.ASTRA_MILITARUM,
    basePoints: 55,
    availableSpecialisms: AstraMilitarumSpecialismsList,
    availableAbilities: AstraMilitarumAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: [...AstraMilitarumRangedWeaponsList, ...AstraMilitarumPistolWeaponsList],
      availableMeleeWeapons: AstraMilitarumMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Augmented Bone 'Ead",
    faction: Faction.IMPERIUM,
    army: Army.ASTRA_MILITARUM,
    basePoints: 60,
    availableSpecialisms: AstraMilitarumSpecialismsList,
    availableAbilities: AstraMilitarumAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 1-2 Melee Weapons"],
      availableRangedWeapons: AstraMilitarumRangedWeaponsList,
      availableMeleeWeapons: AstraMilitarumMeleeWeaponsList,
      rangedSlots: 1,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Sentinel Commander",
    faction: Faction.IMPERIUM,
    army: Army.ASTRA_MILITARUM,
    basePoints: 75,
    availableSpecialisms: AstraMilitarumSpecialismsList,
    availableAbilities: AstraMilitarumAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 1-2 Melee Weapons"],
      availableRangedWeapons: AstraMilitarumRangedWeaponsList,
      availableMeleeWeapons: AstraMilitarumMeleeWeaponsList,
      rangedSlots: 1,
      meleeSlots: 2
    }
  }, 
];

const GreyKnightsSpecialismsList: ICustomCharacterSpecialism[] = [
  {
    name: "Order of Purifiers",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Personal Teleporter",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Prognosticar's Foresight",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Terminator Armour",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
];

const GreyKnightsAbilitiesList: ICustomCharacterAbility[] = [
  {
    name: "Blessing of the Omnissiah",
    cost: 0,
    restrictions: "Infantry Only"
  }, 
  {
    name: "Clarion of Haste",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Eye of Judgement",
    cost: 10,
    restrictions: ""
  }, 
  {
    name: "Haloed in Soulfire",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Hammerhand",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Litanies of Sanctity",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Sanctic Hood",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Warrior Strategist",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Zealous Path",
    cost: 0,
    restrictions: ""
  }, 
];

const GreyKnightsRangedWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Assault Cannon",
    cost: 0, 
    restrictions: "Venerable Daemon Slayer Only", 
  }, 
  {
    name: "Combi-Weapon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Forge Bolter",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Fragstorm Grenade Launcher",
    cost: 0,
    restrictions: "Dreadknight Champion Only"
  }, 
  {
    name: "Gatling Psilencer",
    cost: 0,
    restrictions: "Dreadknight Champion Only"
  }, 
  {
    name: "Heavy Flamer",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Heavy Incinerator",
    cost: 0,
    restrictions: "Dreadknight Champion Only"
  }, 
  {
    name: "Heavy Plasma Cannon",
    cost: 0,
    restrictions: "Venerable Daemon Slayer Only"
  }, 
  {
    name: "Heavy Psycannon",
    cost: 0,
    restrictions: "Dreadknight Champion Only"
  }, 
  {
    name: "Incinerator",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Psilencer",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Psycannon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Purifying Flame",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Storm Bolter",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Sublimator",
    cost: 0,
    restrictions: "Venerable Daemon Slayer Only"
  }, 
  {
    name: "Twin Lascannon",
    cost: 0,
    restrictions: "Venerable Daemon Slayer Only"
  }, 
  {
    name: "Vortex of Doom",
    cost: 0,
    restrictions: ""
  }, 
];

const GreyKnightsPistolWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Grav Pistol",
    cost: 0,
    restrictions: ""
  }, 
];

const GreyKnightsMeleeWeaponsList: ICustomCharacterWeapon[] = [
  {
    name: "Close Combat Weapon",
    cost: 0, 
    restrictions: "", 
  }, 
  {
    name: "Crozius Arcanum",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Deadfists",
    cost: 0,
    restrictions: "Dreadknight Champion Only"
  }, 
  {
    name: "Dreadnought Close Combat Weapon",
    cost: 0,
    restrictions: "Venerable Daemon Slayer Only"
  }, 
  {
    name: "Nemesis Daemon Greathammer",
    cost: 0,
    restrictions: "Dreadknight Champion Only"
  }, 
  {
    name: "Nemesis Flail",
    cost: 0,
    restrictions: "Dreadknight Champion Only"
  }, 
  {
    name: "Nemesis Force Weapon",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Nemesis Greatsword",
    cost: 0,
    restrictions: "Dreadknight Champion Only"
  }, 
  {
    name: "Nemesis Mace",
    cost: 0,
    restrictions: "Dreadknight Champion Only"
  }, 
  {
    name: "Omnissian Power Axe",
    cost: 0,
    restrictions: ""
  }, 
  {
    name: "Servo Arm",
    cost: 0,
    restrictions: ""
  }, 
];

const GreyKnightsCustomCharacterList: ICustomCharacter[] = [
  {
    archetype: "Champion of Titan",
    faction: Faction.SPACE_MARINES,
    army: Army.GREY_KNIGHTS,
    basePoints: 90,
    availableSpecialisms: GreyKnightsSpecialismsList,
    availableAbilities: GreyKnightsAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-1 Ranged Weapon, 0-2 Pistols, 1-2 Melee Weapons"],
      availableRangedWeapons: [...GreyKnightsRangedWeaponsList, ...GreyKnightsPistolWeaponsList],
      availableMeleeWeapons: GreyKnightsMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Venerable Daemon Slayer",
    faction: Faction.SPACE_MARINES,
    army: Army.GREY_KNIGHTS,
    basePoints: 175,
    availableSpecialisms: GreyKnightsSpecialismsList,
    availableAbilities: GreyKnightsAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-2 Ranged Weapon, 1-2 Melee Weapons"],
      availableRangedWeapons: GreyKnightsRangedWeaponsList,
      availableMeleeWeapons: GreyKnightsMeleeWeaponsList,
      rangedSlots: 2,
      meleeSlots: 2
    }
  }, 
  {
    archetype: "Dreadknight Champion",
    faction: Faction.SPACE_MARINES,
    army: Army.GREY_KNIGHTS,
    basePoints: 210,
    availableSpecialisms: GreyKnightsSpecialismsList,
    availableAbilities: GreyKnightsAbilitiesList,
    availableWeapons: {
      availableLoadouts: ["0-3 Ranged Weapon, 1-2 Melee Weapons"],
      availableRangedWeapons: GreyKnightsRangedWeaponsList,
      availableMeleeWeapons: GreyKnightsMeleeWeaponsList,
      rangedSlots: 3,
      meleeSlots: 2
    }
  }, 
];

export const CustomCharacterList: ICustomCharacter[] = [
  ...AdeptusAstartesCustomCharacterList, 
  ...DarkAngelsCustomCharacterList, 
  ...BloodAngelsCustomCharacterList, 
  ...SpaceWolvesCustomCharacterList, 
  ...BlackTemplarsCustomCharacterList, 
  ...AdeptusCustodesCustomCharacterList, 
  ...AdeptaSororitasCustomCharacterList, 
  ...AdeptusMechanicusCustomCharacterList, 
  ...ImperialAgentsCustomCharacterList, 
  ...AstraMilitarumCustomCharacterList, 
  ...GreyKnightsCustomCharacterList, 
]