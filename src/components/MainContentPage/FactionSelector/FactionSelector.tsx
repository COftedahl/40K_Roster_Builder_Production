import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import { Detachment, FactionList, BattleSize, BattleSizeOptions } from "../../UtilityComponents/Army_Constants/Army_Constants";
import './FactionSelector.css';
import React from "react";

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

  const [armyOptions, setArmyOptions] = useState<string[] | undefined>((faction && FactionList[faction?.toUpperCase().replace(" ", "_") || ""] ? FactionList[faction?.toUpperCase().replace(" ", "_") || ""].armies.map((army) => army.army) : undefined));
  const [detachmentOptions, setDetachmentOptions] = useState<Detachment[] | undefined>(faction && FactionList[faction?.toUpperCase().replace(" ", "_") || ""] ? FactionList[faction?.toUpperCase().replace(" ", "_") || ""].armies.find((list_army) => list_army.name === army)?.detachments || undefined : undefined);
  const [justLoaded, setJustLoaded] = useState<boolean>(true);

  const factionSelectorRef = React.createRef();
  const armySelectorRef = React.createRef();
  const detachmentSelectorRef = React.createRef();

  const handleFactionChange = (e: SelectChangeEvent, child: ReactNode) => {
    setFaction(e.target.value);
    if (e.target.value && e.target.value.length > 0) {
      setArmyOptions(FactionList[e.target.value.toUpperCase().replace(" ", "_")].armies.map((army) => army.army));
    }
    else {
      setArmyOptions([]);
    }
    handleArmyChange(null, null);
  };

  const handleArmyChange = (e: SelectChangeEvent | null, child: ReactNode) => {
    setArmy(e?.target.value || "");
    if (e?.target.value && e.target.value.length > 0) {
      setDetachmentOptions(FactionList[faction?.toUpperCase().replace(" ", "_") || ""].armies.find((army) => army.name === e.target.value)?.detachments);
    }
    else {
      setDetachmentOptions([]);
    }
    handleDetachmentChange(null, null);
  };

  const handleDetachmentChange = (e: SelectChangeEvent | null, child: ReactNode) => {
    setDetachment(detachmentOptions?.find((detachment: Detachment) => detachment.name === e?.target.value) || null);
  };

  const handleBattleSizeChange = (e: SelectChangeEvent, child: ReactNode) => {
    setBattleSize(BattleSizeOptions.find((battleSize: BattleSize) => battleSize.name === e.target.value) || null);
  };

  useEffect(() => {
    setJustLoaded(true);
  }, []);  

  useEffect(() => {
    setJustLoaded(false);
    if (faction && faction !== "" && !justLoaded) {
      if (armySelectorRef.current) {
        setInterval(() => {armySelectorRef.current?.focus()}, 5);
      }
    }
  }, [faction]);  
  
  useEffect(() => {
    if (army && army !== "" && !justLoaded) {
      if (detachmentSelectorRef.current) {
        setInterval(() => {detachmentSelectorRef.current?.focus()}, 3);
      }
    }
  }, [army]);

  useEffect(() => {
    if (detachmentOptions && detachmentOptions.length === 1) {
      setDetachment(detachmentOptions[0]);
    }
  }, [detachmentOptions]);

  return (
    <>
      <Box className="FactionSelectorBox">
        <FormControl 
            className={"FactionSelector_Dropdown FactionSelector_FactionDropdown" + ((faction === undefined || faction === "" || faction === null) ? "" : "_filled")}>
          <InputLabel>Faction</InputLabel>
          <Select 
            id="FactionSelector_FactionDropdown"
            onChange={handleFactionChange}
            value={faction || ""}
            label="Faction"
            inputProps={{ref: factionSelectorRef}}
          >
            <MenuItem className="FactionSelector_Dropdown_Item FactionSelector_Dropdown_Item_Blank" key={-1} value={undefined}></MenuItem>
            {factionOptions.map((faction: string, index: number) => {
              return (
                <MenuItem className="FactionSelector_Dropdown_Item" key={index} value={faction}>{faction}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl 
            className={"FactionSelector_Dropdown" + ((faction === undefined || faction === "" || faction === null) ? "_disabled" : "") +" FactionSelector_ArmyDropdown" + ((faction === undefined || faction === "" || faction === null) ? "_disabled" : "")}>
              
          <InputLabel>Army</InputLabel>
          <Select 
            id="FactionSelector_ArmyDropdown"
            disabled={(faction === undefined || faction === "" || faction === null) ? true : false}
            onChange={handleArmyChange}
            value={army || ""}
            label="Army" 
            inputProps={{ref: armySelectorRef}}
          >
              <MenuItem className="FactionSelector_Dropdown_Item" key={-1} value={undefined}></MenuItem>
            {armyOptions?.map((army: string, index: number) => {
              return (
                <MenuItem className="FactionSelector_Dropdown_Item" key={index} value={army}>{army}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl 
            className={"FactionSelector_Dropdown" + ((army === undefined || army === "" || army === null) ? "_disabled" : "") +" FactionSelector_DetachmentDropdown" + ((army === undefined || army === "" || army === null) ? "_disabled" : "")}>
              
          <InputLabel>Detachment</InputLabel>
          <Select 
            id="FactionSelector_DetachmentDropdown"
            disabled={(army === undefined || army === "" || army === null) ? true : false}
            onChange={handleDetachmentChange}
            value={detachment?.name || ""}
            label="Detachment"
            inputProps={{ref: detachmentSelectorRef}}
          >
              <MenuItem className="FactionSelector_Dropdown_Item" key={-1} value={undefined}></MenuItem>
            {detachmentOptions?.map((detachment: Detachment, index: number) => {
              return (
                <MenuItem className="FactionSelector_Dropdown_Item" key={index} value={detachment.name}>{detachment.name}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <br/>
        <FormControl 
            className="FactionSelector_Dropdown FactionSelector_ArmySizeDropdown">
          <InputLabel>Battle Size</InputLabel>
          <Select
            id="FactionSelector_ArmySizeDropdown"
            onChange={handleBattleSizeChange}
            value={battleSize?.name || ""}
            label="Battle Size"
          >
              <MenuItem className="FactionSelector_Dropdown_Item" key={-1} value={undefined}></MenuItem>
              {BattleSizeOptions?.map((battleSize: BattleSize, index: number) => {
              return (
                <MenuItem className="FactionSelector_Dropdown_Item" key={index} value={battleSize.name}>{battleSize.name}</MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default FactionSelector;