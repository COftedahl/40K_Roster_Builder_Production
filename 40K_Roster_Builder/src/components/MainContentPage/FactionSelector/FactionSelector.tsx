import { Autocomplete, Box, TextField } from "@mui/material";
import { useState } from "react";
import { FactionList } from "../../UtilityComponents/Army_Constants/Army_Constants";
import './FactionSelector.css';

interface FactionSelectorProps {

}

const FactionSelector: React.FC<FactionSelectorProps> = () => {

  const factionOptions = [
    FactionList.IMPERIUM.name, 
    FactionList.SPACE_MARINES.name, 
    FactionList.CHAOS.name, 
    FactionList.XENOS.name,  
  ]

  const [armyOptions, setArmyOptions] = useState();

  const [faction, setFaction] = useState<string | null>();
  const [army, setArmy] = useState<string | null>();
  const [detachment, setDetachment] = useState<string | null>();

  const handleFactionChange = (e: React.SyntheticEvent, value: string | null) => {
    setFaction(value);
    //also need to clear army selector
  };
  
  const handleArmyChange = (e: React.SyntheticEvent, value: string | null) => {
    setArmy(value);
    //also need to clear army selector
  };

  const handleDetachmentChange = (e: React.SyntheticEvent, value: string | null) => {
    setDetachment(value);
    //also need to clear army selector
  };

  return (
    <>
      <Box className="FactionSelectorBox">
        <Autocomplete 
          options={factionOptions} 
          openOnFocus 
          className={"FactionSelector_FactionDropdown" + ((faction === undefined || faction === "" || faction === null) ? "" : "_filled")}
          renderInput={(params) => <TextField {...params} label="Faction"/>} 
          onChange={handleFactionChange}
        ></Autocomplete>
        <Autocomplete 
          options={factionOptions} 
          openOnFocus 
          className={"FactionSelector_ArmyDropdown" + ((faction === undefined || faction === "" || faction === null) ? "_disabled" : "")}
          disabled={(faction === undefined || faction === "" || faction === null) ? true : false}
          renderInput={(params) => <TextField {...params} label="Army"/>}
          onChange={handleArmyChange}
        ></Autocomplete>
          <Autocomplete 
            options={factionOptions} 
            openOnFocus 
            className={"FactionSelector_DetachmentDropdown" + ((army === undefined || army === "" || army === null) ? "_disabled" : "")}
            disabled={(army === undefined || army === "" || army === null) ? true : false}
            onClick={focus} 
            renderInput={(params) => <TextField {...params} label="Detachment"/>}
            onChange={handleDetachmentChange}
          ></Autocomplete>
      </Box>
    </>
  );
}

export default FactionSelector;