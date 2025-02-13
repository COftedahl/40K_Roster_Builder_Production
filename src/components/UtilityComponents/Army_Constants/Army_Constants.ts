export interface BattleSize {
  name: string;
  points: number;
  key: string;
}

export const BattleSizeOptions: BattleSize[] = [
  {
    name: "Combat Patrol", points: 500, key: "Combat Patrol",
  }, 
  {
    name: "Incursion", points: 1000, key: "Incursion",
  }, 
  {
    name: "Onslaught", points: 2000, key: "Onslaught", 
  }
]

export const enum UnitType {
  CHARACTERS = "Character", 
  BATTLELINE = "Battleline", 
  OTHER = "Other"
}

export interface CostOption {
  cost: number;
  numModels: number;
  modelCountString: string;
}

export interface Unit {
  name: string;
  unitType: UnitType | string;
  costOptions: CostOption[];
  isUnique: boolean;
  army: Army;
  faction: Faction;
}

export interface UnitSelection extends Unit {
  selectedSizeIndex: number;
  enhancement?: Enhancement;
}

export interface Enhancement {
  name: string;
  cost: number;
  doesCostPoints: boolean;
}

export enum Army {
  ADEPTA_SORORITAS = "Adepta Sororitas",
  ADEPTUS_CUSTODES = "Adeptus Custodes",
  ADEPTUS_MECHANICUS = "Adeptus Mechanicus",
  ADEPTUS_TITANICUS = "Adeptus Titanicus",
  AELDARI = "Aeldari", 
  AGENTS_OF_THE_IMPERIUM = "Agents of the Imperium",
  ASTRA_MILITARUM = "Astra Militarum",
  BLACK_TEMPLARS = "Black Templars",
  BLOOD_ANGELS = "Blood Angels",
  CHAOS_DAEMONS = "Chaos Daemons",
  CHAOS_KNIGHTS = "Chaos Knights",
  CHAOS_SPACE_MARINES = "Chaos Space Marines",
  DARK_ANGELS = "Dark Angels",
  DEATHWATCH = "Deathwatch",
  DEATH_GUARD = "Death Guard",
  DRUKHARI = "Drukhari",
  GENESTEALER_CULTS = "Genestealer Cults",
  GREY_KNIGHTS = "Grey Knights",
  IMPERIAL_KNIGHTS = "Imperial Knights",
  LEAGUES_OF_VOTANN = "Leagues of Votann",
  NECRONS = "Necrons",
  ORKS = "Orks",
  SPACE_MARINES = "Space Marines", 
  SPACE_WOLVES = "Space Wolves",
  TAU_EMPIRE = "Tau Empire",
  THOUSAND_SONS = "Thousand Sons",
  TYRANIDS = "Tyranids",
  WORLD_EATERS = "World Eaters",
}

export enum Faction {
  SPACE_MARINES = "Space Marines", 
  IMPERIUM = "Imperium", 
  CHAOS = "Chaos", 
  XENOS = "Xenos",
}

export interface Detachment {
  name: string;
  enhancements: Enhancement[];
}

interface FactionList {
  [key: string]: FactionListEntry;

  SPACE_MARINES: FactionListEntry;
  IMPERIUM: FactionListEntry;
  CHAOS: FactionListEntry;
  XENOS: FactionListEntry;
}

interface FactionListEntry {
  key: string;
  name: string;
  armies: FactionList_ArmyEntry[];
}

interface FactionList_ArmyEntry {
  key: string;
  army: string;
  name: string;
  detachments: Detachment[];
}

// interface ArmyList {
//   [key: string]: FactionList_ArmyEntry;

//   any: FactionList_ArmyEntry;
//   // ADEPTA_SORORITAS: FactionList_ArmyEntry;
//   // ADEPTUS_CUSTODES: FactionList_ArmyEntry;
//   // ADEPTUS_MECHANICUS: FactionList_ArmyEntry;
//   // ADEPTUS_TITANICUS: FactionList_ArmyEntry;
//   // AELDARI: FactionList_ArmyEntry; 
//   // AGENTS_OF_THE_IMPERIUM: FactionList_ArmyEntry;
//   // ASTRA_MILITARUM: FactionList_ArmyEntry;
//   // BLACK_TEMPLARS: FactionList_ArmyEntry;
//   // BLOOD_ANGELS: FactionList_ArmyEntry;
//   // CHAOS_DAEMONS: FactionList_ArmyEntry;
//   // CHAOS_KNIGHTS: FactionList_ArmyEntry;
//   // CHAOS_SPACE_MARINES: FactionList_ArmyEntry;
//   // DARK_ANGELS: FactionList_ArmyEntry;
//   // DEATHWATCH: FactionList_ArmyEntry;
//   // DEATH_GUARD: FactionList_ArmyEntry;
//   // DRUKHARI: FactionList_ArmyEntry;
//   // GENESTEALER_CULTS: FactionList_ArmyEntry;
//   // GREY_KNIGHTS: FactionList_ArmyEntry;
//   // IMPERIAL_KNIGHTS: FactionList_ArmyEntry;
//   // LEAGUES_OF_VOTANN: FactionList_ArmyEntry;
//   // NECRONS: FactionList_ArmyEntry;
//   // ORKS: FactionList_ArmyEntry;
//   // SPACE_MARINES: FactionList_ArmyEntry; 
//   // SPACE_WOLVES: FactionList_ArmyEntry;
//   // TAU_EMPIRE: FactionList_ArmyEntry;
//   // THOUSAND_SONS: FactionList_ArmyEntry;
//   // TYRANIDS: FactionList_ArmyEntry;
//   // WORLD_EATERS: FactionList_ArmyEntry;
// }

// {name: "AAAAA", enhancements: [
//   {name: "AAAAA", cost: 15, doesCostPoints: true}, 
//   {name: "AAAAA", cost: 15, doesCostPoints: true}, 
//   {name: "AAAAA", cost: 35, doesCostPoints: true}, 
//   {name: "AAAAA", cost: 20, doesCostPoints: true}
// ]}

export const FactionList: FactionList = {
  SPACE_MARINES: {
      "key": "Space Marines",
      "name": "Space Marines",
      "armies": [
          {
              "army": "Black Templars",
              "name": "Black Templars",
              "key": "Black Templars",
              "detachments": [
                  {
                      "name": "Righteous Crusaders",
                      "enhancements": [
                          {
                              "name": "Perditions Edge",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Sigismunds Seal",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Tannhausers Bones",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Witchseeker Bolts",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Wrathful Procession",
                      "enhancements": [
                          {
                              "name": "Benediction of Fury",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Pyrebrand",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Sacred Rage",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Taramonds Censer",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Blood Angels",
              "name": "Blood Angels",
              "key": "Blood Angels",
              "detachments": [
                  {
                      "name": "Angelic Inheritors",
                      "enhancements": [
                          {
                              "name": "Blazing Icon",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Ordained Sacrifice",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Prescient Flash",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Troubling Visions",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Liberator Assault Group",
                      "enhancements": [
                          {
                              "name": "Gift of Foresight",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Icon of the Angel",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Rage-fuelled Warrior",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Speed of the Primarch",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "The Angelic Host",
                      "enhancements": [
                          {
                              "name": "Archangels Shard",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Artisan of War",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Gleaming Pinions",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Visage of Death",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "The Lost Brethren",
                      "enhancements": [
                          {
                              "name": "Blood Shard",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Sanguinius Grace",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "To Slay the Warmaster",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Vengeful Onslaught",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Dark Angels",
              "name": "Dark Angels",
              "key": "Dark Angels",
              "detachments": [
                  {
                      "name": "Company of Hunters",
                      "enhancements": [
                          {
                              "name": "Master of Manoeuvre",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Master-crafted Weapon",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mounted Strategist",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Recon Hunter",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Inner Circle Task Force",
                      "enhancements": [
                          {
                              "name": "Champion of the Deathwing",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Deathwing Assault",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Eye of the Unseen",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Singular Will",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Lions Blade Task Force",
                      "enhancements": [
                          {
                              "name": "Calibanite Armaments",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Fulgus Magna",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Lord of the Hunt",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Stalwart Champion",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Unforgiven Task Force",
                      "enhancements": [
                          {
                              "name": "Pennant of Remembrance",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Shroud of Heroes",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Stubborn Tenacity",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Weapons of the First Legion",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Deathwatch",
              "name": "Deathwatch",
              "key": "Deathwatch",
              "detachments": [
                  {
                      "name": "Black Spear Task Force",
                      "enhancements": [
                          {
                              "name": "Beacon Angelis",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Osseus Key",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Tome of Ectoclades",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Thief of Secrets",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Grey Knights",
              "name": "Grey Knights",
              "key": "Grey Knights",
              "detachments": [
                  {
                      "name": "Teleport Strike Force",
                      "enhancements": [
                          {
                              "name": "Domina Liber Daemonica",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "First to the Fray",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Inescapable Wrath",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Sigil of Exigence",
                              "cost": 30,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Warpbane Task Force",
                      "enhancements": [
                          {
                              "name": "Mandulian Reliquary",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Paragon of Sanctity",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Phial of the Abyss",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Radiant Champion",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Space Marines",
              "name": "Space Marines",
              "key": "Space Marines",
              "detachments": [
                  {
                      "name": "1st Company Task Force",
                      "enhancements": [
                          {
                              "name": "Fear Made Manifest",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Iron Resolve",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Rites of War",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Imperiums Sword",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Anvil Siege Force",
                      "enhancements": [
                          {
                              "name": "Architect of War",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Fleet Commander",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Indomitable Fury",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Stoic Defender",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Firestorm Assault Force",
                      "enhancements": [
                          {
                              "name": "Adamantine Mantle",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Champion of Humanity",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Forged in Battle",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "War-tempered Artifice",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Gladius Task Force",
                      "enhancements": [
                          {
                              "name": "Adept of the Codex",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Artificer Armour",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Fire Discipline",
                              "cost": 40,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Honour Vehement",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Ironstorm Spearhead",
                      "enhancements": [
                          {
                              "name": "Adept of the Omnissiah",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Master of Machine War",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Target Augury Web",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Flesh is Weak",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Librarius Conclave",
                      "enhancements": [
                          {
                              "name": "Celerity",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Fusillade",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Obfuscation",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Prescience",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Stormlance Task Force",
                      "enhancements": [
                          {
                              "name": "Feinting Withdrawal",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Fury of the Storm",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Hunters Instincts",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Portents of Wisdom",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Vanguard Spearhead",
                      "enhancements": [
                          {
                              "name": "Execute and Redeploy",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Ghostweave Cloak",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Shadow War Veteran",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Blade Driven Deep",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Space Wolves",
              "name": "Space Wolves",
              "key": "Space Wolves",
              "detachments": [
                  {
                      "name": "Champions of Fenris",
                      "enhancements": [
                          {
                              "name": "Fangrune Pendant",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Foes Fate",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Longstrider",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Wolves Wisdom",
                              "cost": 30,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Champions of Russ",
                      "enhancements": [
                          {
                              "name": "Black Death",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Frost Weapon",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Pelt of Balewolf",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Wolf Tail Talisman",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          }
      ]
  },
  IMPERIUM: {
      "key": "Imperium",
      "name": "Imperium",
      "armies": [
          {
              "army": "Adepta Sororitas",
              "name": "Adepta Sororitas",
              "key": "Adepta Sororitas",
              "detachments": [
                  {
                      "name": "Army of Faith",
                      "enhancements": [
                          {
                              "name": "Blade of Saint Ellynor",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Divine Aspect",
                              "cost": 5,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Litanies of Faith",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Triptych of the Macharian Crusade",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Bringers of Flame",
                      "enhancements": [
                          {
                              "name": "Fire and Fury",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Iron Surplice of Saint Istalela",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Manual of Saint Griselda",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Righteous Rage",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Champions of Faith",
                      "enhancements": [
                          {
                              "name": "Eyes of the Oracle",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mark of Devotion",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Sanctified Amulet",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Triptych of Judgement",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Hallowed Martyrs",
                      "enhancements": [
                          {
                              "name": "Chaplet of Sacrifice",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mantle of Ophelia",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Saintly Example",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Through Suffering, Strength",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Penitent Host",
                      "enhancements": [
                          {
                              "name": "Catechism of Divine Penitence",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Psalm of Righteous Judgement",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Refrain of Enduring Faith",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Verse of Holy Piety",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Adeptus Custodes",
              "name": "Adeptus Custodes",
              "key": "Adeptus Custodes",
              "detachments": [
                  {
                      "name": "Auric Champions",
                      "enhancements": [
                          {
                              "name": "Blade Imperator",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Inspirational Exemplar",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Martial Philosopher",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Veiled Blade",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Null Maiden Vigil",
                      "enhancements": [
                          {
                              "name": "Enhanced Voidsheen Cloak",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Huntress Eye",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Oblivion Knight",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Raptor Blade",
                              "cost": 5,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Shield Host",
                      "enhancements": [
                          {
                              "name": "Auric Mantle",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Castellans Mark",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "From the Hall of Armouries",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Panoptispex",
                              "cost": 5,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Solar Spearhead",
                      "enhancements": [
                          {
                              "name": "Adamantine Talisman",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Augury Uplink",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Honoured Fallen",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Veteran of the Kataphraktoi",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Talons of the Emperor",
                      "enhancements": [
                          {
                              "name": "Aegis Projector",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Champion of the Imperium",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Gift of Terran Artifice",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Radiant Mantle",
                              "cost": 30,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Adeptus Mechanicus",
              "name": "Adeptus Mechanicus",
              "key": "Adeptus Mechanicus",
              "detachments": [
                  {
                      "name": "Cohort Cybernetica",
                      "enhancements": [
                          {
                              "name": "Arch-negator",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Emotionless Clarity",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Lord of Machines",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Necromechanic",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Data-psalm Conclave",
                      "enhancements": [
                          {
                              "name": "Data-blessed Autosermon",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mantle of the Gnosticarch",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mechanicus Locum",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Temporcopia",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Explorator Maniple",
                      "enhancements": [
                          {
                              "name": "Artisan",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Genetor",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Logis",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Magos",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Haloscreed Battle Clade",
                      "enhancements": [
                          {
                              "name": "Cognitive Reinforcement",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Inloaded Lethality",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Sanctified Ordnance",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Transoracular Dyad Wafers",
                              "cost": 30,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Rad-zone Corps",
                      "enhancements": [
                          {
                              "name": "Autoclavic Denunciation",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Malphonic Susurrus",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Peerless Eradicator",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Radial Suffusion",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Skitarii Hunter Cohort",
                      "enhancements": [
                          {
                              "name": "Battle-sphere Uplink",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Cantic Thrallnet",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Clandestine Infiltrator",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Veiled Hunter",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Adeptus Titanicus",
              "name": "Adeptus Titanicus",
              "key": "Adeptus Titanicus",
              "detachments": []
          },
          {
              "army": "Agents of the Imperium",
              "name": "Agents of the Imperium",
              "key": "Agents of the Imperium",
              "detachments": [
                  {
                      "name": "Alien Hunters",
                      "enhancements": [
                          {
                              "name": "Amulet of Auto-chastisement",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Beacon Angelis",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Blackweave Shroud",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Universal Anathema",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Daemon Hunters",
                      "enhancements": [
                          {
                              "name": "Daemon Slayer",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Formidable Resolve",
                              "cost": 5,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Gift of the Prescient",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Grimoire of True Names",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Imperialis Fleet",
                      "enhancements": [
                          {
                              "name": "Clandestine Operation",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Combat Landers",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Digital Weapons",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Fleetmaster",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Purgation Force",
                      "enhancements": [
                          {
                              "name": "Ignis Judicium",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Liber Heresius",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "No Escape",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Witch Hunter",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Veiled Blade Elimination Force",
                      "enhancements": [
                          {
                              "name": "Decoy Targets",
                              "cost": 40,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Esoteric Explosives",
                              "cost": 40,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Intraneural Biotech",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Micromelta Rounds",
                              "cost": 45,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Astra Militarum",
              "name": "Astra Militarum",
              "key": "Astra Militarum",
              "detachments": [
                  {
                      "name": "Bridgehead Strike",
                      "enhancements": [
                          {
                              "name": "Advance Augury",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Bombast-class Vox-array",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Priority-drop Beacon",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Shroud Projector",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Combined Regiment",
                      "enhancements": [
                          {
                              "name": "Death Mask of Ollanius",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Drill Commander",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Grand Strategist",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Kurovs Aquila",
                              "cost": 40,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Imperial Knights",
              "name": "Imperial Knights",
              "key": "Imperial Knights",
              "detachments": [
                  {
                      "name": "Noble Lance",
                      "enhancements": [
                          {
                              "name": "Banner of Macharius Triumphant",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mysterious Guardian",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mythic Hero",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Revered Knight",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Unyielding Paragon",
                              "cost": 40,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Questor Forgepact",
                      "enhancements": [
                          {
                              "name": "Knight of the Opus Machina",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Magos Questoris",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Omnissian Champion",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Vocifer Magnificat",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          }
      ]
  },
  CHAOS: {
      "key": "Chaos",
      "name": "Chaos",
      "armies": [
          {
              "army": "Chaos Daemons",
              "name": "Chaos Daemons",
              "key": "Chaos Daemons",
              "detachments": [
                  {
                      "name": "Blood Legion",
                      "enhancements": [
                          {
                              "name": "Brazenmaw",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Furys Cage",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Gateway Unto Damnation",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Slaughterthirst",
                              "cost": 35,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Daemonic Incursion",
                      "enhancements": [
                          {
                              "name": "Argath, the King of Blades",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Soulstealer",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Endless Gift",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Everstave",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Legion of Excess",
                      "enhancements": [
                          {
                              "name": "Avatar of Perfection",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Dreaming Crown",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "False Majesty",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Soul Glutton",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Plague Legion",
                      "enhancements": [
                          {
                              "name": "Cankerblight",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Droning Shroud",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Font of Spores",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Maggot Maws",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Scintillating Legion",
                      "enhancements": [
                          {
                              "name": "Improbable Shield",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Inescapable Eye",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Infernal Puppeteer",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Neverblade",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Chaos Knights",
              "name": "Chaos Knights",
              "key": "Chaos Knights",
              "detachments": [
                  {
                      "name": "Iconoclast Fiefdom",
                      "enhancements": [
                          {
                              "name": "Diabolical Resilience",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Pave the Way",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Profane Altar",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Tyrants Banner",
                              "cost": 5,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Traitoris Lance",
                      "enhancements": [
                          {
                              "name": "Lord of Dread",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Aura of Terror",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Traitors Mark",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Panoply of the Cursed Knight",
                              "cost": 40,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Chaos Space Marines",
              "name": "Chaos Space Marines",
              "key": "Chaos Space Marines",
              "detachments": [
                  {
                      "name": "Chaos Cult",
                      "enhancements": [
                          {
                              "name": "Amulet of Tainted Vigour",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Cultists Brand",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Incendiary Goad",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Warped Foresight",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Creations of Bile",
                      "enhancements": [
                          {
                              "name": "Helm of All-seeing",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Living Carapace",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Prime Test Subject",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Surgical Precision",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Deceptors",
                      "enhancements": [
                          {
                              "name": "Cursed Fang",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Falsehood",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Shroud of Obfuscation",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Soul Link",
                              "cost": 5,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Dread Talons",
                      "enhancements": [
                          {
                              "name": "Eater of Dread",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Nights Shroud",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Warp-fuelled Thrusters",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Willbreaker",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Fellhammer Siege-host",
                      "enhancements": [
                          {
                              "name": "Bastion Plate",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Iron Artifice",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Ironbound Enmity",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Warp Tracer",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Pactbound Zealots",
                      "enhancements": [
                          {
                              "name": "Eye of Tzeentch",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Intoxicating Elixir",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Orbs of Unlife",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Talisman of Burning Blood",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Renegade Raiders",
                      "enhancements": [
                          {
                              "name": "Despots Claim",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Dread Reaver",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mark of the Hound",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Tyrants Lash",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Soulforged Warpack",
                      "enhancements": [
                          {
                              "name": "Forges Blessing",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Invigorated Mechatendrils",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Tempting Addendum",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Soul Harvester",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Veterans of the Long War",
                      "enhancements": [
                          {
                              "name": "Eager for Vengeance",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Eye of Abaddon",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mark of Legend",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Warmasters Gift",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Death Guard",
              "name": "Death Guard",
              "key": "Death Guard",
              "detachments": [
                  {
                      "name": "Flyblown Host",
                      "enhancements": [
                          {
                              "name": "Droning Chorus",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Insectile Murmuration",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Plagueveil",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Rejuvenating Swarm",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Plague Company",
                      "enhancements": [
                          {
                              "name": "Deadly Pathogen",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Living Plague",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Shamblerot",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Droning",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Thousand Sons",
              "name": "Thousand Sons",
              "key": "Thousand Sons",
              "detachments": [
                  {
                      "name": "Cult of Magic",
                      "enhancements": [
                          {
                              "name": "Arcane Vortex",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Athenaean Scrolls",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Lord of Forbidden Lore",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Umbralefic Crystal",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Hexwarp Thrallband",
                      "enhancements": [
                          {
                              "name": "Arcane Might",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Empowered Manifestation",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Empyric Onslaught",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Noctilith Mantle",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "World Eaters",
              "name": "World Eaters",
              "key": "World Eaters",
              "detachments": [
                  {
                      "name": "Berzerker Warband",
                      "enhancements": [
                          {
                              "name": "Battle-lust",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Berzerker Glaive",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Favoured of Khorne",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Helm of Brazen Ire",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Vessels of Wrath",
                      "enhancements": [
                          {
                              "name": "Archslaughterer",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Avengers Crown",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Gateways to Glory",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Vox-diabolus",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          }
      ]
  },
  XENOS: {
      "key": "Xenos",
      "name": "Xenos",
      "armies": [
          {
              "army": "Aeldari",
              "name": "Aeldari",
              "key": "Aeldari",
              "detachments": [
                  {
                      "name": "Armoured Warhost",
                      "enhancements": [
                          {
                              "name": "Guiding Presence",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Guileful Strategist",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Harmonisation Matrix",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Spirit Stone of Raelyth",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Aspect Host",
                      "enhancements": [
                          {
                              "name": "Aspect of Murder",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mantle of Wisdom",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Shimmerstone",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Strategic Savant",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Devoted of Ynnead",
                      "enhancements": [
                          {
                              "name": "Borrowed Vigour",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Gaze of Ynnead",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Morbid Might",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Storm of Whispers",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Ghosts of the Webway",
                      "enhancements": [
                          {
                              "name": "Cegorachs Coil",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mask of Secrets",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mistweave",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Murders Jest",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Guardian Battlehost",
                      "enhancements": [
                          {
                              "name": "Breath of Vaul",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Craftworlds Champion",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Ethereal Pathway",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Protector of the Paths",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Seer Council",
                      "enhancements": [
                          {
                              "name": "Lucid Eye",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Runes of Warding",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Stone of Eldritch Fury",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Torc of Morai-Heg",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Spirit Conclave",
                      "enhancements": [
                          {
                              "name": "Higher Duty",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Light of Clarity",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Rune of Mists",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Stave of Kurnous",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Warhost",
                      "enhancements": [
                          {
                              "name": "Gift of Foresight",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Phoenix Gem",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Psychic Destroyer",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Timeless Strategist",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Windrider Host",
                      "enhancements": [
                          {
                              "name": "Echoes of Ulthanesh",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Firstdrawn Blade",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mirage Field",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Seersight Strike",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Drukhari",
              "name": "Drukhari",
              "key": "Drukhari",
              "detachments": [
                  {
                      "name": "Realspace Raiders",
                      "enhancements": [
                          {
                              "name": "Crucible of Malediction",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Blood Dancer",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Labyrinthine Cunning",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Art of Pain",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Reapers Wager",
                      "enhancements": [
                          {
                              "name": "Archraider",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Conductor of Torment",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Reapers Cowl",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Webway Walker",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Skysplinter Assault",
                      "enhancements": [
                          {
                              "name": "Nightmare Shroud",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Phantasmal Smoke",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Sadistic Fulcrum",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Spiteful Raider",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Genestealer Cults",
              "name": "Genestealer Cults",
              "key": "Genestealer Cults",
              "detachments": [
                  {
                      "name": "Biosanctic Broodsurge",
                      "enhancements": [
                          {
                              "name": "Alien Majesty",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Biomorph Adaptation",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mutagenic Regeneration",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Predatory Instincts",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Brood Brother Auxilia",
                      "enhancements": [
                          {
                              "name": "Adaptive Reprisal",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Firepoint Commander",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Martial Espionage",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Hero Returned",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Final Day",
                      "enhancements": [
                          {
                              "name": "Enraptured Damnation",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Inhuman Integration",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Synaptic Auger",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Vanguard Tyrant",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Host of Ascension",
                      "enhancements": [
                          {
                              "name": "A Chink in Their Armour",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Assassination Edict",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Our Time Is Nigh",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Prowling Agitant",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Outlander Claw",
                      "enhancements": [
                          {
                              "name": "Assault Commando",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Cartographic Data-leech",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Serpentine Tactics",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Starfall Shells",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Xenocreed Congregation",
                      "enhancements": [
                          {
                              "name": "Deeds That Speak to the Masses",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Denunciator of Tyrants",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Gene-sires Reliquant",
                              "cost": 5,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Incendiary Inspiration",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Leagues of Votann",
              "name": "Leagues of Votann",
              "key": "Leagues of Votann",
              "detachments": [
                  {
                      "name": "Hearthband",
                      "enhancements": [
                          {
                              "name": "Bastion Shield",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "High Kahl",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Ironskein",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Quake Multigenerator",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Oathband",
                      "enhancements": [
                          {
                              "name": "A Long List",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Appraising Glare",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Grim Demeanour",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Wayfarers Grace",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Necrons",
              "name": "Necrons",
              "key": "Necrons",
              "detachments": [
                  {
                      "name": "Annihilation Legion",
                      "enhancements": [
                          {
                              "name": "Eldritch Nightmare",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Eternal Madness",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Ingrained Superiority",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Soulless Reaper",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Awakened Dynasty",
                      "enhancements": [
                          {
                              "name": "Enaegic Dermal Bond",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Nether-realm Casket",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Phasal Subjugator",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Veil of Darkness",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Canoptek Court",
                      "enhancements": [
                          {
                              "name": "Autodivinator",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Dimensional Sanctum",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Hyperphasic Fulcrum",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Metalodermal Tesla Weave",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Hypercrypt Legion",
                      "enhancements": [
                          {
                              "name": "Arisen Tyrant",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Dimensional Overseer",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Hyperspatial Transfer Node",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Osteoclave Fulcrum",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Obeisance Phalanx",
                      "enhancements": [
                          {
                              "name": "Eternal Conqueror",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Honourable Combatant",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Unflinching Will",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Warrior Noble",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Starshatter Arsenal",
                      "enhancements": [
                          {
                              "name": "Chrono-impedance Fields",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Demanding Leader",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Dread Majesty",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Miniaturised Nebuloscope",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Orks",
              "name": "Orks",
              "key": "Orks",
              "detachments": [
                  {
                      "name": "Bully Boyz",
                      "enhancements": [
                          {
                              "name": "Big Gob",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Da Biggest Boss",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Eadstompa",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Tellyporta",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Da Big Hunt",
                      "enhancements": [
                          {
                              "name": "Glory Hog",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Proper Killy",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Skrag Every Stash!",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Surly as a Squiggoth",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Dread Mob",
                      "enhancements": [
                          {
                              "name": "Gitfinder Googlez",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Press It Fasta!",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Smoky Gubbinz",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Supa-glowy Fing",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Green Tide",
                      "enhancements": [
                          {
                              "name": "Bloodthirsty Belligerence",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Brutal But Kunnin",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Ferocious Show Off",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Raucous Warcaller",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Kult of Speed",
                      "enhancements": [
                          {
                              "name": "Fasta Than Yooz",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Speed Makes Right",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Squig-hide Tyres",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Wazblasta",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Taktikal Brigade",
                      "enhancements": [
                          {
                              "name": "Gob Boomer",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Mek Kaptin",
                              "cost": 35,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Morks Kunnin",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Skwad Leader",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "War Horde",
                      "enhancements": [
                          {
                              "name": "Follow Me Ladz",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Headwoppas Killchoppa",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Kunnin But Brutal",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Supa-Cybork Body",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Tau Empire",
              "name": "Tau Empire",
              "key": "Tau Empire",
              "detachments": [
                  {
                      "name": "Auxiliary Cadre",
                      "enhancements": [
                          {
                              "name": "Admired Leader",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Fanatical Convert",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Student of Kauyon",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Transponder Lock Module",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Kauyon",
                      "enhancements": [
                          {
                              "name": "Exemplar of the Kauyon",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Precision of the Patient Hunter",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Solid-image Projection Unit",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Through Unity, Devastation",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Kroot Hunting Pack",
                      "enhancements": [
                          {
                              "name": "Borthrod Gland",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Kroothawk Flock",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Nomadic Hunter",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Root-carved Weapons",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Montka",
                      "enhancements": [
                          {
                              "name": "Coordinated Exploitation",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Exemplar of the Montka",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Strategic Conqueror",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Strike Swiftly",
                              "cost": 25,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Retaliation Cadre",
                      "enhancements": [
                          {
                              "name": "Internal Grenade Racks",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Prototype Weapon System",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Puretide Engram Neurochip",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Starflare Ignition System",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          },
          {
              "army": "Tyranids",
              "name": "Tyranids",
              "key": "Tyranids",
              "detachments": [
                  {
                      "name": "Assimilation Swarm",
                      "enhancements": [
                          {
                              "name": "Biophagic Flow",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Instinctive Defence",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Parasitic Biomorphology",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Regenerating Monstrosity",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Crusher Stampede",
                      "enhancements": [
                          {
                              "name": "Enraged Reserves",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Monstrous Nemesis",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Null Nodules",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Ominous Presence",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Invasion Fleet",
                      "enhancements": [
                          {
                              "name": "Adaptive Biology",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Alien Cunning",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Perfectly Adapted",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Synaptic Linchpin",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Synaptic Nexus",
                      "enhancements": [
                          {
                              "name": "Power of the Hive Mind",
                              "cost": 10,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Psychostatic Disruption",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Synaptic Control",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "The Dirgeheart of Kharis",
                              "cost": 15,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Unending Swarm",
                      "enhancements": [
                          {
                              "name": "Adrenalised Onslaught",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Naturalised Camouflage",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Piercing Talons",
                              "cost": 25,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Relentless Hunger",
                              "cost": 20,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Vanguard Onslaught",
                      "enhancements": [
                          {
                              "name": "Chameleonic",
                              "cost": 15,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Hunting Grounds",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Neuronode",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Stalker",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  },
                  {
                      "name": "Warrior Bioform Onslaught",
                      "enhancements": [
                          {
                              "name": "Elevated Might",
                              "cost": 30,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Ocular Adaptation",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Sensory Assimilation",
                              "cost": 20,
                              "doesCostPoints": true
                          },
                          {
                              "name": "Synaptic Tyrant",
                              "cost": 10,
                              "doesCostPoints": true
                          }
                      ]
                  }
              ]
          }
      ]
  }
};

export interface Roster {
  dateCreated: Date;
  dateModified: Date;
  owner: string;
  name: string;
  points: number;
  gameEdition: string;
  faction: string;
  army: string;
  detachment?: string;
  armyUnits: UnitSelection[];
  allyUnits: UnitSelection[];
};