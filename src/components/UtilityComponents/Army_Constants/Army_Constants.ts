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
    key: "Space Marines", 
    name: "Space Marines", 
    armies: [
      {army: Army.BLACK_TEMPLARS, name: Army.BLACK_TEMPLARS, key: Army.BLACK_TEMPLARS, detachments: [
        {name: "Righteous Crusaders", enhancements: [
          {name: "Perdition's Edge", cost: 15, doesCostPoints: true}, 
          {name: "Sigismund's Seal", cost: 20, doesCostPoints: true}, 
          {name: "Tannhauser's Bones", cost: 35, doesCostPoints: true}, 
          {name: "Witchseeker Bolts", cost: 10, doesCostPoints: true},
        ]}
      ]}, 
      {army: Army.BLOOD_ANGELS, name: Army.BLOOD_ANGELS, key: Army.BLOOD_ANGELS, detachments: [
        {name: "Sons of Sanguinius", enhancements: [
          {name: "Archangel's Shard", cost: 25, doesCostPoints: true}, 
          {name: "Artisan of War", cost: 20, doesCostPoints: true}, 
          {name: "Icon of the Angel", cost: 10, doesCostPoints: true}, 
          {name: "Visage of Death", cost: 15, doesCostPoints: true},
        ]}, 
        {name: "Angelic Inheritors", enhancements: [
          {name: "Prescient Flash", cost: 20, doesCostPoints: true}, 
          {name: "Troubling Visions", cost: 15, doesCostPoints: true}, 
          {name: "Blazing Icon", cost: 20, doesCostPoints: true}, 
          {name: "Ordained Sacrifice", cost: 25, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.DARK_ANGELS, name: Army.DARK_ANGELS, key: Army.DARK_ANGELS, detachments: [
        {name: "Unforgiven Task Force", enhancements: [
          {name: "Heavenfall Blade", cost: 20, doesCostPoints: true}, 
          {name: "Pennant of Remembrance", cost: 10, doesCostPoints: true}, 
          {name: "Shroud of Heroes", cost: 25, doesCostPoints: true}, 
          {name: "Stubborn Tenacity", cost: 15, doesCostPoints: true},
        ]}, 
        {name: "Lion's Blade Task Force", enhancements: [
          {name: "Calibanite Armaments", cost: 15, doesCostPoints: true}, 
          {name: "Lord of the Hunt", cost: 15, doesCostPoints: true}, 
          {name: "Stalwart Champion", cost: 25, doesCostPoints: true}, 
          {name: "Fulgus Magna", cost: 20, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.DEATHWATCH, name: Army.DEATHWATCH, key: Army.DEATHWATCH, detachments: [
        {name: "Black Spear Task Force", enhancements: [
          {name: "Beacon Angelis", cost: 25, doesCostPoints: true}, 
          {name: "Osseus Key", cost: 15, doesCostPoints: true}, 
          {name: "The Tome of Ectoclades", cost: 30, doesCostPoints: true}, 
          {name: "Thief of Secrets", cost: 25, doesCostPoints: true},
        ]}
      ]}, 
      {army: Army.GREY_KNIGHTS, name: Army.GREY_KNIGHTS, key: Army.GREY_KNIGHTS, detachments: [
        {name: "Teleport Strike Force", enhancements: [
          {name: "Domina Liber Daemonica", cost: 20, doesCostPoints: true}, 
          {name: "First to the Fray", cost: 35, doesCostPoints: true}, 
          {name: "Inescapable Wrath", cost: 15, doesCostPoints: true}, 
          {name: "Sigil of Exigence", cost: 30, doesCostPoints: true},
        ]}, 
        {name: "Warpbane Task Force", enhancements: [
          {name: "Mandulian Reliquary", cost: 20, doesCostPoints: true}, 
          {name: "Radiant Champion", cost: 15, doesCostPoints: true}, 
          {name: "Phial of the Abyss", cost: 25, doesCostPoints: true}, 
          {name: "Paragon of Sanctity", cost: 10, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.SPACE_MARINES, name: Army.SPACE_MARINES, key: Army.SPACE_MARINES, detachments: [
        {name: "1st Company Task Force", enhancements: [
          {name: "Fear Made Manifest", cost: 30, doesCostPoints: true}, 
          {name: "Iron Resolve", cost: 15, doesCostPoints: true}, 
          {name: "Rites of War", cost: 10, doesCostPoints: true}, 
          {name: "The Imperium's Sword", cost: 25, doesCostPoints: true},
        ]}, 
        {name: "Anvil Siege Force", enhancements: [
          {name: "Architect of War", cost: 25, doesCostPoints: true},
          {name: "Fleet Commander", cost: 15, doesCostPoints: true}, 
          {name: "Indomitable Fury", cost: 20, doesCostPoints: true}, 
          {name: "Stoic Defender", cost: 15, doesCostPoints: true}, 
        ]}, 
        {name: "Firestorm Assault Force", enhancements: [
          {name: "Adamantine Mantle", cost: 20, doesCostPoints: true}, 
          {name: "Champion of Humanity", cost: 10, doesCostPoints: true}, 
          {name: "Forged in Battle", cost: 15, doesCostPoints: true}, 
          {name: "War-Tempered Artifice", cost: 25, doesCostPoints: true},
        ]}, 
        {name: "Gladius Task Force", enhancements: [
          {name: "Adept of the Codex", cost: 20, doesCostPoints: true}, 
          {name: "Artificer Armour", cost: 10, doesCostPoints: true}, 
          {name: "Fire Discipline", cost: 30, doesCostPoints: true}, 
          {name: "The Honour Vehement", cost: 15, doesCostPoints: true},
        ]}, 
        {name: "Ironstorm Spearhead", enhancements: [
          {name: "Adept of the Omnissiah", cost: 25, doesCostPoints: true}, 
          {name: "Master of the Machine War", cost: 20, doesCostPoints: true}, 
          {name: "Target Augury Web", cost: 40, doesCostPoints: true}, 
          {name: "The Flesh is Weak", cost: 10, doesCostPoints: true},
        ]}, 
        {name: "Stormlance Task Force", enhancements: [
          {name: "Feinting WIthdrawal", cost: 20, doesCostPoints: true}, 
          {name: "Fury of the Storm", cost: 25, doesCostPoints: true}, 
          {name: "Hunter's Instincts", cost: 10, doesCostPoints: true}, 
          {name: "Portents of Wisdom", cost: 15, doesCostPoints: true},
        ]}, 
        {name: "Vanguard Spearhead", enhancements: [
          {name: "Execute and Redeploy", cost: 20, doesCostPoints: true}, 
          {name: "Ghostweave Cloak", cost: 15, doesCostPoints: true}, 
          {name: "Shadow War Veteran", cost: 30, doesCostPoints: true}, 
          {name: "The Blade Driven Deep", cost: 25, doesCostPoints: true},
        ]}, 
        {name: "Librarius Conclave", enhancements: [
          {name: "Prescience", cost: 25, doesCostPoints: true}, 
          {name: "Celerity", cost: 30, doesCostPoints: true}, 
          {name: "Obfuscation", cost: 20, doesCostPoints: true}, 
          {name: "Fusillade", cost: 15, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.SPACE_WOLVES, name: Army.SPACE_WOLVES, key: Army.SPACE_WOLVES, detachments: [
        {name: "Champions of Russ", enhancements: [
          {name: "Black Death", cost: 25, doesCostPoints: true}, 
          {name: "Frost Weapon", cost: 15, doesCostPoints: true}, 
          {name: "The Pelt of Balewolf", cost: 10, doesCostPoints: true},
          {name: "Wolf Tail Talisman", cost: 20, doesCostPoints: true},
        ]}
      ]}, 
    ]
  }, 
  IMPERIUM: {
    key: "Imperium", 
    name: "Imperium", 
    armies: [
      {army: Army.ADEPTA_SORORITAS, name: Army.ADEPTA_SORORITAS, key: Army.ADEPTA_SORORITAS, detachments: [
        {name: "Hallowed Martyrs", enhancements: [
          {name: "Blade of Saint Ellynor", cost: 15, doesCostPoints: true}, 
          {name: "Litanies of Faith", cost: 25, doesCostPoints: true}, 
          {name: "Mantle of Ophelia", cost: 20, doesCostPoints: true}, 
          {name: "Saintly Example", cost: 10, doesCostPoints: true},
        ]}, 
        {name: "Champions of Faith", enhancements: [
          {name: "Triptych of Judgement", cost: 15, doesCostPoints: true}, 
          {name: "Mark of Devotion", cost: 30, doesCostPoints: true}, 
          {name: "Eyes of the Oracle", cost: 10, doesCostPoints: true}, 
          {name: "Sanctified Amulet", cost: 25, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.ADEPTUS_CUSTODES, name: Army.ADEPTUS_CUSTODES, key: Army.ADEPTUS_CUSTODES, detachments: [
        {name: "Shield Host", enhancements: [
          {name: "Ceaseless Hunter", cost: 30, doesCostPoints: true}, 
          {name: "Inspirational Example", cost: 10, doesCostPoints: true}, 
          {name: "Unstoppable Destroyer", cost: 25, doesCostPoints: true}, 
          {name: "Veiled Blade", cost: 25, doesCostPoints: true},
        ]}, 
        {name: "Solar Spearhead", enhancements: [
          {name: "Adamantine Talisman", cost: 25, doesCostPoints: true}, 
          {name: "Augury Uplink", cost: 25, doesCostPoints: true}, 
          {name: "Honoured Fallen", cost: 15, doesCostPoints: true}, 
          {name: "Veteran of the Kataphraktoi", cost: 10, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.ADEPTUS_MECHANICUS, name: Army.ADEPTUS_MECHANICUS, key: Army.ADEPTUS_MECHANICUS, detachments: [
        {name: "Rad Cohort", enhancements: [
          {name: "Archived Purge Protocols", cost: 10, doesCostPoints: true}, 
          {name: "Excoriating Emanation", cost: 25, doesCostPoints: true}, 
          {name: "Master Annihilator", cost: 35, doesCostPoints: true}, 
          {name: "Omni-Sterilizer", cost: 20, doesCostPoints: true}
        ]}, 
        {name: "Haloscreed Battle Clade", enhancements: [
          {name: "Transoracular Dyad Wafers", cost: 30, doesCostPoints: true}, 
          {name: "Cognitive Reinforcements", cost: 35, doesCostPoints: true}, 
          {name: "Sanctified Ordinance", cost: 10, doesCostPoints: true}, 
          {name: "Inloaded Lethality", cost: 15, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.ADEPTUS_TITANICUS, name: Army.ADEPTUS_TITANICUS, key: Army.ADEPTUS_TITANICUS, detachments: [
        {name: "Rad Cohort", enhancements: [
          {name: "Archived Purge Protocols", cost: 10, doesCostPoints: true}, 
          {name: "Excoriating Emanation", cost: 25, doesCostPoints: true}, 
          {name: "Master Annihilator", cost: 35, doesCostPoints: true}, 
          {name: "Omni-Sterilizer", cost: 20, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.AGENTS_OF_THE_IMPERIUM, name: Army.AGENTS_OF_THE_IMPERIUM, key: Army.AGENTS_OF_THE_IMPERIUM, detachments: [
        {name: "Battle Host", enhancements: [
          {name: "Fate's Messenger", cost: 15, doesCostPoints: true}, 
          {name: "Reader of the Runes", cost: 20, doesCostPoints: true}, 
          {name: "The Phoenix Gem", cost: 25, doesCostPoints: true}, 
          {name: "The Weeping Stones", cost: 15, doesCostPoints: true},
        ]}, 
        {name: "Veiled Blade Elimination Force", enhancements: [
          {name: "Decoy Targets", cost: 40, doesCostPoints: true}, 
          {name: "Esoteric Explosives", cost: 40, doesCostPoints: true}, 
          {name: "Intraneural Biotech", cost: 35, doesCostPoints: true}, 
          {name: "Micromelta Rounds", cost: 45, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.ASTRA_MILITARUM, name: Army.ASTRA_MILITARUM, key: Army.ASTRA_MILITARUM, detachments: [
        {name: "Combined Regiment", enhancements: [
          {name: "Death Mask of Ollanius", cost: 10, doesCostPoints: true}, 
          {name: "Drill Commander", cost: 20, doesCostPoints: true}, 
          {name: "Grand Strategist", cost: 15, doesCostPoints: true}, 
          {name: "Kurov's Aquila", cost: 40, doesCostPoints: true},
        ]}, 
        {name: "Bridgehead Strike", enhancements: [
          {name: "Bombast-Class Vox-Array", cost: 25, doesCostPoints: true}, 
          {name: "Priority-Drop Beacon", cost: 30, doesCostPoints: true}, 
          {name: "Shroud Projector", cost: 15, doesCostPoints: true}, 
          {name: "Advance Augury", cost: 15, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.IMPERIAL_KNIGHTS, name: Army.IMPERIAL_KNIGHTS, key: Army.IMPERIAL_KNIGHTS, detachments: [
        {name: "Noble Lance", enhancements: [
          {name: "Banner of Macharius Triumphant", cost: 30, doesCostPoints: true}, 
          {name: "Mysterious Guardian", cost: 35, doesCostPoints: true}, 
          {name: "Mythic Hero", cost: 25, doesCostPoints: true},
          {name: "Revered Knight", cost: 20, doesCostPoints: true},
          {name: "Unyielding Paragon", cost: 40, doesCostPoints: true},
        ]}, 
        {name: "Questor Forgepact", enhancements: [
          {name: "Omnissian Champion", cost: 30, doesCostPoints: true}, 
          {name: "Knight of the Opus Mechanica", cost: 20, doesCostPoints: true}, 
          {name: "Magos Questoris", cost: 35, doesCostPoints: true}, 
          {name: "Vocifer Magnificat", cost: 15, doesCostPoints: true}
        ]}
      ]}, 
    ]
  }, 
  CHAOS: {
    key: "Chaos", 
    name: "Chaos", 
    armies: [
      {army: Army.CHAOS_DAEMONS, name: Army.CHAOS_DAEMONS, key: Army.CHAOS_DAEMONS, detachments: [
        {name: "Daemonic Incursion", enhancements: [
          {name: "Ar'gath, the King of Blades", cost: 20, doesCostPoints: true}, 
          {name: "Soulstealer", cost: 15, doesCostPoints: true}, 
          {name: "The Endless Gift", cost: 30, doesCostPoints: true}, 
          {name: "The Everstave", cost: 25, doesCostPoints: true}, 
        ]}, 
        {name: "Blood Legion", enhancements: [
          {name: "Slaughterthirst", cost: 35, doesCostPoints: true}, 
          {name: "Fury's Cage", cost: 20, doesCostPoints: true}, 
          {name: "Brazenmaw", cost: 15, doesCostPoints: true}, 
          {name: "Gateway Unto Damnation", cost: 10, doesCostPoints: true}
        ]}, 
        {name: "Legion of Excess", enhancements: [
          {name: "False Majesty", cost: 30, doesCostPoints: true}, 
          {name: "Dreaming Crown", cost: 30, doesCostPoints: true}, 
          {name: "Avatar of Perfection", cost: 15, doesCostPoints: true}, 
          {name: "Soul Glutton", cost: 10, doesCostPoints: true}
        ]},
        {name: "Plague Legion", enhancements: [
          {name: "Cankerblight", cost: 15, doesCostPoints: true}, 
          {name: "Maggot Maws", cost: 15, doesCostPoints: true}, 
          {name: "Droning Shroud", cost: 35, doesCostPoints: true}, 
          {name: "Font of Spores", cost: 20, doesCostPoints: true}
        ]}, 
        {name: "Scintillating Legion", enhancements: [
          {name: "Inescapable Eye", cost: 10, doesCostPoints: true}, 
          {name: "Infernal Puppeteer", cost: 10, doesCostPoints: true}, 
          {name: "Neverblade", cost: 20, doesCostPoints: true}, 
          {name: "Improbable Shield", cost: 30, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.CHAOS_KNIGHTS, name: Army.CHAOS_KNIGHTS, key: Army.CHAOS_KNIGHTS, detachments: [
        {name: "Traitoris Lance", enhancements: [
          {name: "Aura of Terror", cost: 25, doesCostPoints: true}, 
          {name: "Lord of Dread", cost: 35, doesCostPoints: true}, 
          {name: "Panolpy of the Cursed Knight", cost: 40, doesCostPoints: true}, 
          {name: "The Traitor's Mark", cost: 30, doesCostPoints: true}, 
        ]}, 
        {name: "Iconoclast Fiefdom", enhancements: [
          {name: "Profane Altar", cost: 20, doesCostPoints: true}, 
          {name: "Pave the Way", cost: 15, doesCostPoints: true}, 
          {name: "Tyrant's Banner", cost: 5, doesCostPoints: true}, 
          {name: "Diabolical Resilience", cost: 35, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.CHAOS_SPACE_MARINES, name: Army.CHAOS_SPACE_MARINES, key: Army.CHAOS_SPACE_MARINES, detachments: [
        {name: "Slaves to Darkness", enhancements: [
          {name: "Eye of Tzeentch", cost: 30, doesCostPoints: true}, 
          {name: "Intoxicating Elixir", cost: 15, doesCostPoints: true}, 
          {name: "Liber Hereticus", cost: 40, doesCostPoints: true}, 
          {name: "Orbs of Unlife", cost: 25, doesCostPoints: true}, 
          {name: "Talisman of Burning Blood", cost: 20, doesCostPoints: true},
        ]}, 
        {name: "Creations of Bile", enhancements: [
          {name: "Surgical Precision", cost: 10, doesCostPoints: true}, 
          {name: "Living Carapace", cost: 15, doesCostPoints: true}, 
          {name: "Helm of All-Seeing", cost: 25, doesCostPoints: true}, 
          {name: "Prime Test Subject", cost: 35, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.DEATH_GUARD, name: Army.DEATH_GUARD, key: Army.DEATH_GUARD, detachments: [
        {name: "Plague Company", enhancements: [
          {name: "Deadly Pathogen", cost: 15, doesCostPoints: true}, 
          {name: "Living Plague", cost: 20, doesCostPoints: true}, 
          {name: "Shamblerot", cost: 25, doesCostPoints: true}, 
          {name: "The Droning", cost: 10, doesCostPoints: true}, 
        ]}, 
        {name: "Flyblown Host", enhancements: [
          {name: "Droning Chorus", cost: 15, doesCostPoints: true}, 
          {name: "Insectile Murmuration", cost: 20, doesCostPoints: true}, 
          {name: "Rejuvenating Swarm", cost: 10, doesCostPoints: true}, 
          {name: "Plagueveil", cost: 25, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.THOUSAND_SONS, name: Army.THOUSAND_SONS, key: Army.THOUSAND_SONS, detachments: [
        {name: "Cult of Magic", enhancements: [
          {name: "Arcance Vortex", cost: 15, doesCostPoints: true}, 
          {name: "Athenaen Scrolls", cost: 20, doesCostPoints: true}, 
          {name: "Lord of Forbidden Lore", cost: 25, doesCostPoints: true}, 
          {name: "Umbralefic Crystal", cost: 20, doesCostPoints: true}, 
        ]}, 
        {name: "Hexwarp Thrallband", enhancements: [
          {name: "Arcane Might", cost: 20, doesCostPoints: true}, 
          {name: "Empowered Manifestation", cost: 20, doesCostPoints: true}, 
          {name: "Empyric Onslaught", cost: 25, doesCostPoints: true}, 
          {name: "Noctilith Mantle", cost: 15, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.WORLD_EATERS, name: Army.WORLD_EATERS, key: Army.WORLD_EATERS, detachments: [
        {name: "Berserker Warband", enhancements: [
          {name: "Battle Lust", cost: 15, doesCostPoints: true}, 
          {name: "Berserker Glaive", cost: 25, doesCostPoints: true}, 
          {name: "Favoured of Khorne", cost: 30, doesCostPoints: true}, 
          {name: "Helm of Brazen Ire", cost: 25, doesCostPoints: true}, 
        ]}
      ]}, 
    ],
  }, 
  XENOS: {
    key: "Xenos",
    name: "Xenos",
    armies: [
      {army: Army.AELDARI, name: Army.AELDARI, key: Army.AELDARI, detachments: [
        {name: "Battle Host", enhancements: [
          {name: "Fate's Messenger", cost: 15, doesCostPoints: true}, 
          {name: "Reader of the Runes", cost: 20, doesCostPoints: true}, 
          {name: "The Phoenix Gem", cost: 25, doesCostPoints: true}, 
          {name: "The Weeping Stones", cost: 15, doesCostPoints: true}, 
        ]}, 
        {name: "Armoured Warhost", enhancements: [
          {name: "Guiding Presence", cost: 25, doesCostPoints: true}, 
          {name: "Harmonisation Matrix", cost: 30, doesCostPoints: true}, 
          {name: "Spirit Stone of Raelyth", cost: 20, doesCostPoints: true}, 
          {name: "Guileful Strategist", cost: 15, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.DRUKHARI, name: Army.DRUKHARI, key: Army.DRUKHARI, detachments: [
        {name: "Realspace Raiders", enhancements: [
          {name: "Crucible of Malediction", cost: 10, doesCostPoints: true}, 
          {name: "Blood Dancer", cost: 20, doesCostPoints: true}, 
          {name: "Labyrinthine Cunning", cost: 30, doesCostPoints: true}, 
          {name: "The Art of Pain", cost: 25, doesCostPoints: true}, 
        ]}, 
        {name: "Reaper's Wager", enhancements: [
          {name: "Archraider", cost: 15, doesCostPoints: true}, 
          {name: "Webway Walker", cost: 15, doesCostPoints: true}, 
          {name: "Reaper's Cowl", cost: 25, doesCostPoints: true}, 
          {name: "Conductor of Torment", cost: 20, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.GENESTEALER_CULTS, name: Army.GENESTEALER_CULTS, key: Army.GENESTEALER_CULTS, detachments: [
        {name: "Ascension Day", enhancements: [
          {name: "Focus of Adoration", cost: 10, doesCostPoints: true}, 
          {name: "Inscrutible Cunning", cost: 30, doesCostPoints: true}, 
          {name: "Meticulous Planner", cost: 40, doesCostPoints: true}, 
          {name: "Prowling Agitant", cost: 15, doesCostPoints: true}, 
        ]}, 
        {name: "Final Day", enhancements: [
          {name: "Synaptic Auger", cost: 15, doesCostPoints: true}, 
          {name: "Enraptured Damnation", cost: 10, doesCostPoints: true}, 
          {name: "Vanguard Tyrant", cost: 25, doesCostPoints: true}, 
          {name: "Inhuman Integration", cost: 20, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.LEAGUES_OF_VOTANN, name: Army.LEAGUES_OF_VOTANN, key: Army.LEAGUES_OF_VOTANN, detachments: [
        {name: "Oathband", enhancements: [
          {name: "A Long List", cost: 15, doesCostPoints: true}, 
          {name: "Appraising Glare", cost: 20, doesCostPoints: true}, 
          {name: "Grim Demeanour", cost: 20, doesCostPoints: true}, 
          {name: "Wayfarer's Grace", cost: 25, doesCostPoints: true}, 
        ]}, 
        {name: "Hearthband", enhancements: [
          {name: "Bastion Shield", cost: 25, doesCostPoints: true}, 
          {name: "Quake Multigenerator", cost: 15, doesCostPoints: true}, 
          {name: "Ironskein", cost: 10, doesCostPoints: true}, 
          {name: "High Kahl", cost: 30, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.NECRONS, name: Army.NECRONS, key: Army.NECRONS, detachments: [
        {name: "Awakened Dynasty", enhancements: [
          {name: "Hypermaterial Ablator", cost: 25, doesCostPoints: true}, 
          {name: "Sempiternal Weave", cost: 10, doesCostPoints: true}, 
          {name: "The Sovereign Coronal", cost: 30, doesCostPoints: true}, 
          {name: "Veil of Darkness", cost: 20, doesCostPoints: true}, 
        ]}, 
        {name: "Starshatter Arsenal", enhancements: [
          {name: "Dread Majesty", cost: 30, doesCostPoints: true}, 
          {name: "Miniaturised Nebuloscope", cost: 15, doesCostPoints: true}, 
          {name: "Demanding Leader", cost: 10, doesCostPoints: true}, 
          {name: "Chrono-Impedance Fields", cost: 25, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.ORKS, name: Army.ORKS, key: Army.ORKS, detachments: [
        {name: "Waaagh Tribe", enhancements: [
          {name: "Follow Me Ladz", cost: 25, doesCostPoints: true}, 
          {name: "Headwoppa's Killchoppa", cost: 20, doesCostPoints: true}, 
          {name: "Kunnin' but Brutal", cost: 15, doesCostPoints: true}, 
          {name: "Supa-Cybork Body", cost: 15, doesCostPoints: true}, 
        ]}, 
        {name: "Taktikal Brigade", enhancements: [
          {name: "Skwad Leader", cost: 15, doesCostPoints: true}, 
          {name: "Mek Kaptin", cost: 35, doesCostPoints: true}, 
          {name: "Mork's Kunnin", cost: 15, doesCostPoints: true}, 
          {name: "Gob Boomer", cost: 10, doesCostPoints: true}
        ]}
      ]}, 
      {army: Army.TAU_EMPIRE, name: Army.TAU_EMPIRE, key: Army.TAU_EMPIRE, detachments: [
        {name: "Kauyon", enhancements: [
          {name: "Exemplar of the Kauyon", cost: 15, doesCostPoints: true}, 
          {name: "Precision of the Patient Hunter", cost: 20, doesCostPoints: true}, 
          {name: "Puretide Engram Neurochip", cost: 25, doesCostPoints: true}, 
          {name: "Through Unity, Devastation", cost: 20, doesCostPoints: true}, 
        ]}
      ]}, 
      {army: Army.TYRANIDS, name: Army.TYRANIDS, key: Army.TYRANIDS, detachments: [
        {name: "Assimilation Swarm", enhancements: [
          {name: "Biophagic Flow", cost: 10, doesCostPoints: true}, 
          {name: "Instinctive Defense", cost: 15, doesCostPoints: true}, 
          {name: "Parasitic Biomorphology", cost: 25, doesCostPoints: true}, 
          {name: "Regenerating Monstrosity", cost: 20, doesCostPoints: true}, 
        ]}, 
        {name: "Crusher Stampede", enhancements: [
          {name: "Enraged Reserves", cost: 20, doesCostPoints: true}, 
          {name: "Monstrous Nemesis", cost: 25, doesCostPoints: true}, 
          {name: "Null Nodules", cost: 10, doesCostPoints: true}, 
          {name: "Ominous Presence", cost: 15, doesCostPoints: true}, 
        ]}, 
        {name: "Invasion Fleet", enhancements: [
          {name: "Adaptive Biology", cost: 25, doesCostPoints: true}, 
          {name: "Alien Cunning", cost: 30, doesCostPoints: true}, 
          {name: "Perfectly Adapted", cost: 15, doesCostPoints: true}, 
          {name: "Synaptic Lynchpin", cost: 20, doesCostPoints: true}, 
        ]}, 
        {name: "Synaptic Nexus", enhancements: [
          {name: "Power of the Hive Mind", cost: 10, doesCostPoints: true}, 
          {name: "Psychostatic Disruption", cost: 30, doesCostPoints: true}, 
          {name: "Synaptic Control", cost: 20, doesCostPoints: true}, 
          {name: "The Dirgeheart of Kharis", cost: 15, doesCostPoints: true}, 
        ]}, 
        {name: "Unending Swarm", enhancements: [
          {name: "Adrenalised Onslaught", cost: 15, doesCostPoints: true}, 
          {name: "Naturalised Camoflauge", cost: 30, doesCostPoints: true}, 
          {name: "Piercing Talons", cost: 25, doesCostPoints: true}, 
          {name: "Relentless Hunger", cost: 20, doesCostPoints: true}, 
        ]}, 
        {name: "Vanguard Onslaught", enhancements: [
          {name: "Chameleonic", cost: 15, doesCostPoints: true}, 
          {name: "Hunting Grounds", cost: 20, doesCostPoints: true}, 
          {name: "Neuronode", cost: 30, doesCostPoints: true}, 
          {name: "Stalker", cost: 10, doesCostPoints: true}, 
        ]}, 
        {name: "Warrior Bioform Onslaught", enhancements: [
          {name: "Synaptic Tyrant", cost: 10, doesCostPoints: true}, 
          {name: "Oracular Adaptation", cost: 20, doesCostPoints: true}, 
          {name: "Sensory Assimilation", cost: 20, doesCostPoints: true}, 
          {name: "Elevated Might", cost: 30, doesCostPoints: true}
        ]}
      ]}, 
    ]
  }, 
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