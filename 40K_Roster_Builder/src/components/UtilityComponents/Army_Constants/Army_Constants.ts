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
  unitType: UnitType;
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

export const FactionList: FactionList = {
  SPACE_MARINES: {
    key: "Space Marines", 
    name: "Space Marines", 
    armies: [
      {army: Army.BLACK_TEMPLARS, name: Army.BLACK_TEMPLARS, key: Army.BLACK_TEMPLARS, detachments: [{name: "det1", enhancements: []}]}, 
      {army: Army.BLOOD_ANGELS, name: Army.BLOOD_ANGELS, key: Army.BLOOD_ANGELS, detachments: []}, 
      {army: Army.DARK_ANGELS, name: Army.DARK_ANGELS, key: Army.DARK_ANGELS, detachments: []}, 
      {army: Army.DEATHWATCH, name: Army.DEATHWATCH, key: Army.DEATHWATCH, detachments: []}, 
      {army: Army.GREY_KNIGHTS, name: Army.GREY_KNIGHTS, key: Army.GREY_KNIGHTS, detachments: []}, 
      {army: Army.SPACE_MARINES, name: Army.SPACE_MARINES, key: Army.SPACE_MARINES, detachments: []}, 
      {army: Army.SPACE_WOLVES, name: Army.SPACE_WOLVES, key: Army.SPACE_WOLVES, detachments: []}, 
    ]
  }, 
  IMPERIUM: {
    key: "Imperium", 
    name: "Imperium", 
    armies: [
      {army: Army.ADEPTA_SORORITAS, name: Army.ADEPTA_SORORITAS, key: Army.ADEPTA_SORORITAS, detachments: []}, 
      {army: Army.ADEPTUS_CUSTODES, name: Army.ADEPTUS_CUSTODES, key: Army.ADEPTUS_CUSTODES, detachments: []}, 
      {army: Army.ADEPTUS_MECHANICUS, name: Army.ADEPTUS_MECHANICUS, key: Army.ADEPTUS_MECHANICUS, detachments: []}, 
      {army: Army.ADEPTUS_TITANICUS, name: Army.ADEPTUS_TITANICUS, key: Army.ADEPTUS_TITANICUS, detachments: []}, 
      {army: Army.AGENTS_OF_THE_IMPERIUM, name: Army.AGENTS_OF_THE_IMPERIUM, key: Army.AGENTS_OF_THE_IMPERIUM, detachments: []}, 
      {army: Army.ASTRA_MILITARUM, name: Army.ASTRA_MILITARUM, key: Army.ASTRA_MILITARUM, detachments: []}, 
      {army: Army.IMPERIAL_KNIGHTS, name: Army.IMPERIAL_KNIGHTS, key: Army.IMPERIAL_KNIGHTS, detachments: []}, 
    ]
  }, 
  CHAOS: {
    key: "Chaos", 
    name: "Chaos", 
    armies: [
      {army: Army.CHAOS_DAEMONS, name: Army.CHAOS_DAEMONS, key: Army.CHAOS_DAEMONS, detachments: []}, 
      {army: Army.CHAOS_KNIGHTS, name: Army.CHAOS_KNIGHTS, key: Army.CHAOS_KNIGHTS, detachments: []}, 
      {army: Army.CHAOS_SPACE_MARINES, name: Army.CHAOS_SPACE_MARINES, key: Army.CHAOS_SPACE_MARINES, detachments: []}, 
      {army: Army.DEATH_GUARD, name: Army.DEATH_GUARD, key: Army.DEATH_GUARD, detachments: []}, 
      {army: Army.THOUSAND_SONS, name: Army.THOUSAND_SONS, key: Army.THOUSAND_SONS, detachments: []}, 
      {army: Army.WORLD_EATERS, name: Army.WORLD_EATERS, key: Army.WORLD_EATERS, detachments: []}, 
    ],
  }, 
  XENOS: {
    key: "Xenos",
    name: "Xenos",
    armies: [
      {army: Army.AELDARI, name: Army.AELDARI, key: Army.AELDARI, detachments: []}, 
      {army: Army.DRUKHARI, name: Army.DRUKHARI, key: Army.DRUKHARI, detachments: []}, 
      {army: Army.GENESTEALER_CULTS, name: Army.GENESTEALER_CULTS, key: Army.GENESTEALER_CULTS, detachments: []}, 
      {army: Army.LEAGUES_OF_VOTANN, name: Army.LEAGUES_OF_VOTANN, key: Army.LEAGUES_OF_VOTANN, detachments: []}, 
      {army: Army.NECRONS, name: Army.NECRONS, key: Army.NECRONS, detachments: []}, 
      {army: Army.ORKS, name: Army.ORKS, key: Army.ORKS, detachments: []}, 
      {army: Army.TAU_EMPIRE, name: Army.TAU_EMPIRE, key: Army.TAU_EMPIRE, detachments: []}, 
      {army: Army.TYRANIDS, name: Army.TYRANIDS, key: Army.TYRANIDS, detachments: []}, 
    ]
  }, 
};