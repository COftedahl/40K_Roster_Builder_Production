import { Autocomplete, Box, TextField } from "@mui/material";
import { SetStateAction, useRef, useState } from "react";
import { Detachment, FactionList, BattleSize, BattleSizeOptions } from "../../UtilityComponents/Army_Constants/Army_Constants";
import './FactionSelector.css';

interface FactionSelectorProps {
  faction: string | null;
  army: string | null;
  detachment: Detachment | null;
  battleSize: BattleSize | null;
  setFaction: React.Dispatch<SetStateAction<string | null>>;
  setArmy: React.Dispatch<SetStateAction<string | null>>;
  setDetachment: React.Dispatch<SetStateAction<Detachment | null>>;
  setBattleSize: React.Dispatch<SetStateAction<BattleSize | null>>;
}

const FactionSelector: React.FC<FactionSelectorProps> = ({faction, army, detachment, battleSize, setFaction, setArmy, setDetachment, setBattleSize}) => {

  const factionOptions = [
    FactionList.IMPERIUM.name, 
    FactionList.SPACE_MARINES.name, 
    FactionList.CHAOS.name, 
    FactionList.XENOS.name,  
  ]

  const [armyOptions, setArmyOptions] = useState<string[]>();
  const [detachmentOptions, setDetachmentOptions] = useState<Detachment[]>();

  const factionSelectorRef = useRef<HTMLElement>();
  const armySelectorRef = useRef<HTMLElement>();
  const detachmentSelectorRef = useRef<HTMLElement>();

  const handleFactionChange = (e: React.SyntheticEvent, value: string | null) => {
    setFaction(value);
    if (value && value.length > 0) {
      setArmyOptions(FactionList[value.toUpperCase().replace(" ", "_")].armies.map((army) => army.army));
    }
    else {
      setArmyOptions([]);
    }
    handleArmyChange(e, null);
  };

  const handleArmyChange = (e: React.SyntheticEvent, value: string | null) => {
    setArmy(value);
    if (value && value.length > 0) {
      setDetachmentOptions(FactionList[faction?.toUpperCase().replace(" ", "_") || ""].armies.find((army) => army.name === value)?.detachments);
    }
    else {
      setDetachmentOptions([]);
    }
    handleDetachmentChange(e, null);
  };

  const handleDetachmentChange = (e: React.SyntheticEvent, value: string | null) => {
    setDetachment(detachmentOptions?.find((detachment: Detachment) => detachment.name === value) || null);
  };

  const handleBattleSizeChange = (e: React.SyntheticEvent, value: string | null) => {
    setBattleSize(BattleSizeOptions.find((battleSize: BattleSize) => battleSize.name === value) || null);
  };

  return (
    <>
      <Box className="FactionSelectorBox">
        <Autocomplete 
          options={factionOptions} 
          openOnFocus 
          id="FactionSelector_FactionDropdown"
          className={"FactionSelector_FactionDropdown" + ((faction === undefined || faction === "" || faction === null) ? "" : "_filled")}
          renderInput={(params) => 
            <TextField {...params} 
              inputRef={factionSelectorRef}
              label="Faction"/>} 
          onChange={handleFactionChange}
          value={faction || null}
        ></Autocomplete>
        <Autocomplete 
          options={armyOptions || []} 
          openOnFocus 
          id="FactionSelector_ArmyDropdown"
          className={"FactionSelector_ArmyDropdown" + ((faction === undefined || faction === "" || faction === null) ? "_disabled" : "")}
          disabled={(faction === undefined || faction === "" || faction === null) ? true : false}
          renderInput={(params) => 
            <TextField {...params} 
              inputRef={armySelectorRef} label="Army"/>}
          onChange={handleArmyChange}
          value={army || null}
        ></Autocomplete>
        <Autocomplete 
          options={detachmentOptions?.map((detachment: Detachment) => detachment.name) || []} 
          openOnFocus 
          id="FactionSelector_DetachmentDropdown"
          className={"FactionSelector_DetachmentDropdown" + ((army === undefined || army === "" || army === null) ? "_disabled" : "")}
          disabled={(army === undefined || army === "" || army === null) ? true : false}
          renderInput={(params) => 
            <TextField {...params} 
              inputRef={detachmentSelectorRef} label="Detachment"/>}
          onChange={handleDetachmentChange}
          value={detachment?.name || null}
        ></Autocomplete>
        <br/>
        <Autocomplete
          options={BattleSizeOptions.map((battleSize: BattleSize) => battleSize.name) || []}
          openOnFocus
          id="FactionSelector_ArmySizeDropdown"
          className="FactionSelector_ArmySizeDropdown"
          renderInput={(params) => 
            <TextField {...params} 
              label="Battle Size"/>}
          onChange={handleBattleSizeChange}
          value={battleSize?.name || null}></Autocomplete>
      </Box>
    </>
  );
}

export default FactionSelector;