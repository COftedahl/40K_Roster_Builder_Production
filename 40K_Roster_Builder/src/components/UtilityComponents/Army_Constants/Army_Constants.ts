export const enum UnitType {
  CHARACTERS = "Characters", 
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

interface FactionList {
  SPACE_MARINES: FactionListEntry;
  IMPERIUM: FactionListEntry;
  CHAOS: FactionListEntry;
  XENOS: FactionListEntry;
}

interface FactionListEntry {
  key: string;
  name: string;
  armies: Army[];
}

export const FactionList: FactionList = {
  SPACE_MARINES: {
    key: "Space Marines", 
    name: "Space Marines", 
    armies: [
      Army.BLACK_TEMPLARS, 
      Army.BLOOD_ANGELS,
      Army.DARK_ANGELS,
      Army.DEATHWATCH,
      Army.GREY_KNIGHTS,
      Army.SPACE_MARINES,
      Army.SPACE_WOLVES,
    ]
  }, 
  IMPERIUM: {
    key: "Imperium", 
    name: "Imperium", 
    armies: [
      Army.ADEPTA_SORORITAS, 
      Army.ADEPTUS_CUSTODES, 
      Army.ADEPTUS_MECHANICUS, 
      Army.ADEPTUS_TITANICUS, 
      Army.AGENTS_OF_THE_IMPERIUM, 
      Army.ASTRA_MILITARUM, 
      Army.IMPERIAL_KNIGHTS, 
    ],
  }, 
  CHAOS: {
    key: "Chaos", 
    name: "Chaos", 
    armies: [
      Army.CHAOS_DAEMONS, 
      Army.CHAOS_KNIGHTS, 
      Army.CHAOS_SPACE_MARINES, 
      Army.DEATH_GUARD, 
      Army.THOUSAND_SONS,
      Army.WORLD_EATERS,
    ],
  }, 
  XENOS: {
    key: "Xenos",
    name: "Xenos",
    armies: [
      Army.AELDARI, 
      Army.DRUKHARI, 
      Army.GENESTEALER_CULTS,
      Army.LEAGUES_OF_VOTANN, 
      Army.NECRONS,
      Army.ORKS,
      Army.TAU_EMPIRE, 
      Army.TYRANIDS,
    ],
  }, 
};