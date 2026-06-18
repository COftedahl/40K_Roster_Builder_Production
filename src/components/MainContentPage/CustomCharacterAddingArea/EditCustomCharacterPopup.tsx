import { Backdrop, Box, Divider, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, NativeSelect, Radio, RadioGroup, Select, SelectChangeEvent } from "@mui/material";
import { ICustomCharacter, ICustomCharacterAbility, ICustomCharacterSelection, ICustomCharacterSpecialism, ICustomCharacterWeapon } from "../../UtilityComponents/Army_Constants/Army_Constants";
import { PropaneSharp } from "@mui/icons-material";
import { ChangeEvent, useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ICharacterSelections } from "./AddCustomCharacterPopup";

interface EditCustomCharacterPopupProps {
  open: boolean, 
  onClose: () => void, 
  unit: ICustomCharacterSelection | null, 
  characterData: ICustomCharacter | null, 
  saveCharacter: (newCharacter: ICustomCharacterSelection) => void, 
  deleteCharacter: () => void, 
}

const EditCustomCharacterPopup: React.FC<EditCustomCharacterPopupProps> = (props) => {

  const getTotalNumberWeaponSlots = (character: ICustomCharacter | null): number => {
    if (character !== null) {
      return (character.availableWeapons.meleeSlots + character.availableWeapons.rangedSlots);
    }
    else {
      return 0;
    }
  }

  const getStartingLoadoutArray = (): (ICustomCharacterWeapon | null)[] => {
    // console.log("StartingCharacterData: ", props.characterData);
    const arr = props.unit !== null ? [...props.unit.loadout, ...Array(getTotalNumberWeaponSlots(props.characterData) - props.unit.loadout.length).fill(null)] : [];
    // console.log(arr);
    return arr;
  }

  const getStartingSpecialism = (): ICustomCharacterSpecialism | null => {
    const result = props.unit !== null && props.unit.selectedSpecialisms ? JSON.parse(JSON.stringify(props.unit.selectedSpecialisms[0])) : null;
    // console.log(result);
    return result;
  }

  const getStartingAbility = (): ICustomCharacterAbility | null => {
    const result = props.unit !== null && props.unit.selectedAbilities ? JSON.parse(JSON.stringify(props.unit.selectedAbilities[0])) : null;
    // console.log(result);
    return result;
  }

  const [selectedSpecialism, setSelectedSpecialism] = useState<ICustomCharacterSpecialism | null>(getStartingSpecialism());
  const [selectedAbility, setSelectedAbility] = useState<ICustomCharacterAbility | null>(getStartingAbility());
  const [selectedLoadout, setSelectedLoadout] = useState<(ICustomCharacterWeapon | null)[]>(getStartingLoadoutArray());
  const [currCost, setCurrCost] = useState<number>(props.unit !== null ? props.unit.totalCost : 0);
  const [currWeaponIndex, setCurrWeaponIndex] = useState<number>(0);
  const [weaponFilter, setWeaponFilter] = useState<string>("all");
  const [availableWeaponsForSlot, setAvailableWeaponsForSlot] = useState<ICustomCharacterWeapon[]>([]);

  const setStartingValues = () => {
    setSelectedSpecialism(getStartingSpecialism());
    setSelectedAbility(getStartingAbility());
    setSelectedLoadout(getStartingLoadoutArray());
    setCurrCost(props.unit !== null ? props.unit.totalCost : 0);
  }

  useEffect(() => {
    setStartingValues();
    // logValues();
  }, [props.open])

  const logValues = () => {
    console.log("specialism: ", selectedSpecialism);
    console.log("abilities: ", selectedAbility);
    console.log("Loadout: ", selectedLoadout);
  }

  const handleClosePopup = () => {
    resetCharacterOptions();
    props.onClose();
  }

  const handleBoxClicked: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const resetCharacterOptions = () => {
    setSelectedSpecialism(null);
    setSelectedAbility(null);
    setSelectedLoadout([]);
    setCurrCost(0);
    setCurrWeaponIndex(0);
    setWeaponFilter("all");
  }

  const updateCost = (selections: ICharacterSelections) => {
    setCurrCost(() => calculateCost(selections));
  }

  const handleSpecialismChanged = (event: SelectChangeEvent, child: any) => {
    try {
      const newVal: ICustomCharacterSpecialism | null = props.characterData.availableSpecialisms.find((specialism: ICustomCharacterSpecialism) => specialism.name === child?.props.value) || null;
      setSelectedSpecialism(() => newVal)
      updateCost({...getCharacterSelections(), specialism: newVal});
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleAbilityChanged = (event: SelectChangeEvent, child: any) => {
    try {
      const newVal : ICustomCharacterAbility | null = props.characterData.availableAbilities.find((ability: ICustomCharacterAbility) => ability.name === child?.props.value) || null;
      setSelectedAbility(() => newVal);
      updateCost({...getCharacterSelections(), ability: newVal});
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleWeaponFilterChanged = (event: ChangeEvent<HTMLInputElement>, value: string) => {
    setWeaponFilter(value);
    handleWeaponChanged(event, {props: {value: null}});
    refreshAvailableWeapons(props.characterData, value);
  }

  const refreshAvailableWeapons = (character: ICustomCharacter, filter: string) => {
    setAvailableWeaponsForSlot([]);
    if(character !== null) {
      let avlblWeapons: ICustomCharacterWeapon[] = [];
      switch (filter) {
        case "all": 
          avlblWeapons = [...character.availableWeapons.availableRangedWeapons, ...character.availableWeapons.availableMeleeWeapons];
          break;
        case "ranged": 
          avlblWeapons = [...character.availableWeapons.availableRangedWeapons];
          break;
        case "melee": 
          avlblWeapons = [...character.availableWeapons.availableMeleeWeapons];
          break;
        default: 

          break;
      }
      setAvailableWeaponsForSlot(avlblWeapons);
    }
  }

  const handleWeaponChanged = (event: SelectChangeEvent, child: any) => {
    try {
      if (props.characterData !== null) {
        const newVal: ICustomCharacterWeapon | null = getAllAvailableWeapons(props.characterData).find((weapon: ICustomCharacterWeapon) => weapon.name === child?.props.value) || null;
        selectedLoadout.splice(currWeaponIndex, 1, newVal);
        const newArray: (ICustomCharacterWeapon | null)[] = selectedLoadout;
        setSelectedLoadout(() => [...newArray]);
        updateCost({...getCharacterSelections(), loadout: newArray});
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleForwardArrowClicked = () => {
    setWeaponFilter("all");
    refreshAvailableWeapons(props.characterData, "all");
    if (props.characterData !== null) {
      setCurrWeaponIndex((oldVal) => (oldVal + 1) % getTotalNumberWeaponSlots(props.characterData));
    }
    else {
      setCurrWeaponIndex(0);
    }
  }

  const handleBackwardArrowClicked = () => {
    setWeaponFilter("all");
    refreshAvailableWeapons(props.characterData, "all");
    if (props.characterData !== null) {
      const newVal = currWeaponIndex - 1 + (currWeaponIndex <= 0 ? (props.characterData.availableWeapons.meleeSlots + props.characterData.availableWeapons.rangedSlots) : 0);
      setCurrWeaponIndex(() => newVal);
    }
    else {
      setCurrWeaponIndex(0);
    }
  }

  const calculateCost = (selections: ICharacterSelections): number => {
    return (selections.archetype ? 
      selections.archetype.basePoints + 
        (selections.ability ? selections.ability.cost : 0) + 
        (selections.specialism ? selections.specialism.cost : 0) + 
        (selections.loadout.reduce((accum: number, currWeapon: ICustomCharacterWeapon | null) => accum + (currWeapon !== null ? currWeapon.cost : 0), 0))
    :
      0
    );
  }

  const getCharacterSelections = (): ICharacterSelections => {
    return {
      archetype: props.characterData, 
      ability: selectedAbility, 
      specialism: selectedSpecialism, 
      loadout: selectedLoadout, 
    }
  }

  const getAllAvailableWeapons = (character: ICustomCharacter): ICustomCharacterWeapon[] => {
    if (character !== null) {
      return [...character.availableWeapons.availableRangedWeapons, ...character.availableWeapons.availableMeleeWeapons]
    }
    return [];
  }

  const handleSaveClicked = () => {

  }

  let isUserOnMobileDevice: boolean = false;
  useEffect(() => {
    isUserOnMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }, []);

  return (
    <Backdrop className="EditCustomCharacterPopupBackground" sx={{zIndex: (theme) => theme.zIndex.drawer + 2}} open={props.open} onClick={handleClosePopup}>
      {props.unit !== null && props.unit !== undefined && props.characterData !== null && props.unit !== null && 
        <Box className="EditCustomCharacterDiv card PopupCard positionRelative" onClick={handleBoxClicked}>
          <div>
            <p className="AddCustomCharacter_Header_BoxNameText">
              {props.unit.archetype}
            </p>
            <p key={props.unit.totalCost}>
              {props.unit.totalCost} pts
            </p>
          </div>
          <Divider className="AddCustomCharacterPopupBox_Divider"/>
          <div className="EditCustomCharacter_InputArea">
            <FormControl>
              <InputLabel htmlFor="AddCustomCharacterPopupBox_SpecialismSelector" className="AddCustomCharacterPopupBox_ArchetypeSelectorLabel">Specialism
              </InputLabel>
              {isUserOnMobileDevice ? 
                <NativeSelect className="AddCustomCharacterPopupBox_SpecialismSelector">
                  <option value={""}>None</option>
                  {props.characterData !== null && props.characterData.availableSpecialisms !== undefined && props.characterData.availableSpecialisms !== null && props.characterData.availableSpecialisms.length > 0 && props.characterData.availableSpecialisms.map((specialism: ICustomCharacterSpecialism, index: number) => {
                    return (<option className="AddCustomCharacterPopupBox_SpecialismSelector_Item" value={specialism.name} key={index}>{(specialism.name + " | " + specialism.cost + " pts" + (specialism.restrictions.length > 0 ? " | " + specialism.restrictions : ""))}</option>);
                  })}
                </NativeSelect>
              : 
                <Select id="AddCustomCharacterPopupBox_SpecialismSelector" className="AddCustomCharacterPopupBox_SpecialismSelector" value={selectedSpecialism ? selectedSpecialism.name : ""} label="Specialism" onChange={handleSpecialismChanged}>
                  <MenuItem value={""}>None</MenuItem>
                  {props.characterData !== null && props.characterData.availableSpecialisms !== undefined && props.characterData.availableSpecialisms !== null && props.characterData.availableSpecialisms.length > 0 && props.characterData.availableSpecialisms.map((specialism: ICustomCharacterSpecialism, index: number) => {
                    console.log("Specialism: ", specialism, "selected specialism: ", selectedSpecialism)
                    return (<MenuItem className="AddCustomCharacterPopupBox_SpecialismSelector_Item" value={specialism.name} key={index}>{(specialism.name + " | " + specialism.cost + " pts" + (specialism.restrictions.length > 0 ? " | " + specialism.restrictions : ""))}</MenuItem>);
                  })}
                </Select>
              }
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="AddCustomCharacterPopupBox_AbilitySelector" className="AddCustomCharacterPopupBox_AbilitySelectorLabel">Ability
              </InputLabel>
              {isUserOnMobileDevice ? 
                <NativeSelect className="AddCustomCharacterPopupBox_AbilitySelector">
                  <option value={""}>None</option>
                  {props.characterData !== null && props.characterData.availableAbilities !== undefined && props.characterData.availableAbilities.length > 0 && props.characterData.availableAbilities.map((ability: ICustomCharacterAbility, index: number) => {
                    return (<option className="AddCustomCharacterPopupBox_AbilitySelector_Item" value={ability.name} key={index}>{(ability.name + " | " + ability.cost + " pts" + (ability.restrictions.length > 0 ? " | " + ability.restrictions : ""))}</option>);
                  })}
                </NativeSelect>
              : 
                <Select id="AddCustomCharacterPopupBox_AbilitySelector" className="AddCustomCharacterPopupBox_AbilitySelector" value={selectedAbility ? selectedAbility.name : ""} label="Ability" onChange={handleAbilityChanged}>
                  <MenuItem value={""}>None</MenuItem>
                  {props.characterData !== null && props.characterData.availableAbilities !== undefined && props.characterData.availableAbilities.length > 0 && props.characterData.availableAbilities.map((ability: ICustomCharacterAbility, index: number) => {
                    return (<MenuItem className="AddCustomCharacterPopupBox_AbilitySelector_Item" value={ability.name} key={index}>{(ability.name + " | " + ability.cost + " pts" + (ability.restrictions.length > 0 ? " | " + ability.restrictions : ""))}</MenuItem>);
                  })}
                </Select>
              }
            </FormControl>
            <Divider className="AddCustomCharacterPopupBox_Divider AddCustomCharacterPopupBox_InputArea_Divider"/>
            <p className="AddCustomCharacterPopupBox_LoadoutAreaText margin0">
              Loadout
            </p>
            <div className="AddCustomCharacterPopupBox_LoadoutArea flexRow centerAlign spaceBetweenJustify">
              <IconButton className="AddCustomCharacterPopupBox_ArrowButton AddCustomCharacterPopupBox_Button_Backward" onClick={handleBackwardArrowClicked}><ArrowBackIosIcon/></IconButton>
              <div>
                <p>
                  {props.characterData !== null ? 
                    "This character may be armed with " + props.characterData.availableWeapons.availableLoadouts.join(" OR ") + "."
                  : 
                    ""
                  }
                </p>
                <FormControl>
                  <FormLabel>Weapon Filter</FormLabel>
                  <RadioGroup row value={weaponFilter} onChange={handleWeaponFilterChanged}>
                    <FormControlLabel value="all" control={<Radio />} label="All" />
                    <FormControlLabel value="ranged" control={<Radio />} label="Ranged" />
                    <FormControlLabel value="melee" control={<Radio />} label="Melee" />
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="AddCustomCharacterPopupBox_WeaponSelector" className="AddCustomCharacterPopupBox_WeaponSelectorLabel">Weapon {currWeaponIndex}
                  </InputLabel>
                  {isUserOnMobileDevice ? 
                    <NativeSelect className="AddCustomCharacterPopupBox_WeaponSelector">
                      <option value={""}>None</option>
                      {props.characterData !== null && availableWeaponsForSlot !== undefined && availableWeaponsForSlot.length > 0 && availableWeaponsForSlot.map((weapon: ICustomCharacterWeapon, index: number) => {
                        return (<option className="AddCustomCharacterPopupBox_WeaponSelector_Item" value={weapon.name} key={index}>{(weapon.name + " | " + weapon.cost + " pts")}</option>);
                      })}
                    </NativeSelect>
                  : 
                    <Select id="AddCustomCharacterPopupBox_WeaponSelector" className="AddCustomCharacterPopupBox_WeaponSelector" value={selectedLoadout.length > 0 && selectedLoadout[currWeaponIndex] !== null ? selectedLoadout[currWeaponIndex].name : ""} label={"Weapon " + currWeaponIndex} onChange={handleWeaponChanged}>
                      <MenuItem value={""}>None</MenuItem>
                      {props.characterData !== null && availableWeaponsForSlot !== undefined && availableWeaponsForSlot.length > 0 && availableWeaponsForSlot.map((weapon: ICustomCharacterWeapon, index: number) => {
                        return (<MenuItem className="AddCustomCharacterPopupBox_WeaponSelector" value={weapon.name} key={index}>{(weapon.name + " | " + weapon.cost + " pts")}</MenuItem>);
                      })}
                    </Select>
                  }
                </FormControl>
              </div>
              <IconButton className="AddCustomCharacterPopupBox_ArrowButton AddCustomCharacterPopupBox_Button_Forward" onClick={handleForwardArrowClicked}><ArrowForwardIosIcon/></IconButton>
            </div>
            <div className="AddCustomCharacterPopupBox_SpacingParOne padding1 borderBox"/>
            <IconButton className="AddCustomCharacterPopupBox_Button AddCustomCharacterPopupBox_Button_Back" onClick={handleClosePopup}>BACK</IconButton>
            <IconButton className="AddCustomCharacterPopupBox_Button AddCustomCharacterPopupBox_Button_Save" onClick={handleSaveClicked} disabled={false}>Save</IconButton>
          </div>
          <div className="AddCustomCharacterPopupBox_SpacingPar borderBox"/>
        </Box>
      }
    </Backdrop>
  );
}

export default EditCustomCharacterPopup;