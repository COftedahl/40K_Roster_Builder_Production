import { Backdrop, Box, Divider, FormControl, FormControlLabel, FormLabel, IconButton, InputLabel, MenuItem, NativeSelect, Radio, RadioGroup, Select, SelectChangeEvent } from "@mui/material";
import { ICustomCharacter, ICustomCharacterAbility, ICustomCharacterSelection, ICustomCharacterSpecialism, ICustomCharacterWeapon } from "../../UtilityComponents/Army_Constants/Army_Constants";
import './AddCustomCharacterPopup.css';
import { ChangeEvent, useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface AddCustomCharacterPopupProps {
  display: boolean, 
  closePopup: () => void, 
  onAddUnit: (characterAdding: ICustomCharacterSelection) => void, 
  army: string, 
  availableCharacters: ICustomCharacter[], 
}

interface ICharacterSelections {
  archetype: ICustomCharacter | null, 
  specialism: ICustomCharacterSpecialism | null, 
  ability: ICustomCharacterAbility | null, 
  loadout: ICustomCharacterWeapon[], 
}

const AddCustomCharacterPopup: React.FC<AddCustomCharacterPopupProps> = (props: AddCustomCharacterPopupProps) => {

  const [selectedCharacter, setSelectedCharacter] = useState<ICustomCharacter | null>(null);
  const [selectedSpecialism, setSelectedSpecialism] = useState<ICustomCharacterSpecialism | null>(null);
  const [selectedAbility, setSelectedAbility] = useState<ICustomCharacterAbility | null>(null);
  const [selectedLoadout, setSelectedLoadout] = useState<ICustomCharacterWeapon[]>([]);
  const [currCost, setCurrCost] = useState<number>(0);
  const [currWeaponIndex, setCurrWeaponIndex] = useState<number>(0);
  const [weaponFilter, setWeaponFilter] = useState<string>("all");
  const [availableWeaponsForSlot, setAvailableWeaponsForSlot] = useState<ICustomCharacterWeapon[]>([]);

  const handleBoxClicked: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleClosePopup = () => {
    resetCharacterOptions();
    props.closePopup();
  }

  const resetCharacterOptions = () => {
    setSelectedCharacter(null);
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

  const handleArchetypeSelectorChange = (event: SelectChangeEvent, child: any) => {
    try {
      resetCharacterOptions();
      const newVal: ICustomCharacter | null = props.availableCharacters.find((character: ICustomCharacter) => character.archetype === child?.props.value) || null;
      setSelectedCharacter(() => newVal);
      updateCost({archetype: newVal, specialism: null, ability: null, loadout: []});
      refreshAvailableWeapons(newVal, "all");
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleSpecialismChanged = (event: SelectChangeEvent, child: any) => {
    try {
      const newVal: ICustomCharacterSpecialism | null = selectedCharacter.availableSpecialisms.find((specialism: ICustomCharacterSpecialism) => specialism.name === child?.props.value) || null;
      setSelectedSpecialism(() => newVal)
      updateCost({...getCharacterSelections(), specialism: newVal});
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleAbilityChanged = (event: SelectChangeEvent, child: any) => {
    try {
      const newVal : ICustomCharacterAbility | null = selectedCharacter.availableAbilities.find((ability: ICustomCharacterAbility) => ability.name === child?.props.value) || null;
      setSelectedAbility(() => newVal);
      updateCost({...getCharacterSelections(), ability: newVal});
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleWeaponFilterChanged = (event: ChangeEvent<HTMLInputElement>, value: string) => {
    setWeaponFilter(value);
    refreshAvailableWeapons(selectedCharacter, value);
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

  const calculateCost = (selections: ICharacterSelections): number => {
    return (selections.archetype ? 
      selections.archetype.basePoints + 
        (selections.ability ? selections.ability.cost : 0) + 
        (selections.specialism ? selections.specialism.cost : 0) + 
        (selections.loadout.reduce((accum: number, currWeapon: ICustomCharacterWeapon) => accum + currWeapon.cost, 0))
    :
      0
    );
  }

  const getCharacterSelections = (): ICharacterSelections => {
    return {
      archetype: selectedCharacter, 
      ability: selectedAbility, 
      specialism: selectedSpecialism, 
      loadout: selectedLoadout, 
    }
  }

  const handleAddUnitClicked = () => {
    if (selectedCharacter !== null) {
      props.onAddUnit({
        archetype: selectedCharacter.archetype,
        totalCost: calculateCost(getCharacterSelections()),
        faction: selectedCharacter.faction,
        army: selectedCharacter.army,
        selectedSpecialisms: [selectedSpecialism],
        selectedAbilities: [selectedAbility],
        loadout: []
      });
    }
  }

  let isUserOnMobileDevice: boolean = false;
  useEffect(() => {
    isUserOnMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }, []);

  return (
    <>
      <Backdrop open={props.display} sx={{zIndex: (theme) => theme.zIndex.drawer + 2}} onClick={handleClosePopup}>
        <div className="AddCustomCharacterPopupBox card positionRelative" onClick={handleBoxClicked}>
          <div>
            <p className="AddCustomCharacter_Header_FactionText">
              {props.army}
            </p>
            <p className="AddCustomCharacter_Header_BoxNameText">
              Custom Character
            </p>
            <p key={currCost}>
              {currCost} pts
            </p>
          </div>
          <Divider className="AddCustomCharacterPopupBox_Divider"/>
          <div className="AddCustomCharacter_InputAreaDiv">
            <FormControl>
              <InputLabel htmlFor="AddCustomCharacterPopupBox_ArchetypeSelector" className="AddCustomCharacterPopupBox_ArchetypeSelectorLabel">Archetype
              </InputLabel>
              {isUserOnMobileDevice ? 
                <NativeSelect className="AddCustomCharacterPopupBox_ArchetypeSelector">
                  <option value={null}>None</option>
                  {props.availableCharacters !== undefined && props.availableCharacters.length > 0 && props.availableCharacters.map((availableUnit: ICustomCharacter, index: number) => {
                    return (<option className="AddCustomCharacterPopupBox_ArchetypeSelector_Item" value={availableUnit.archetype} key={index}>{(availableUnit.archetype + " | " + availableUnit.basePoints + " pts")}</option>);
                  })}
                </NativeSelect>
              : 
                <Select id="AddCustomCharacterPopupBox_ArchetypeSelector" className="AddCustomCharacterPopupBox_ArchetypeSelector" value={selectedCharacter ? selectedCharacter.archetype : ""} label="Archetype" onChange={handleArchetypeSelectorChange}>
                  <MenuItem value={null}>None</MenuItem>
                  {props.availableCharacters !== undefined && props.availableCharacters.length > 0 && props.availableCharacters.map((availableUnit: ICustomCharacter, index: number) => {
                    return (<MenuItem className="AddCustomCharacterPopupBox_ArchetypeSelector_Item" value={availableUnit.archetype} key={index}>{(availableUnit.archetype + " | " + availableUnit.basePoints + " pts")}</MenuItem>);
                  })}
                </Select>
              }
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="AddCustomCharacterPopupBox_SpecialismSelector" className="AddCustomCharacterPopupBox_ArchetypeSelectorLabel">Specialism
              </InputLabel>
              {isUserOnMobileDevice ? 
                <NativeSelect className="AddCustomCharacterPopupBox_SpecialismSelector">
                  <option value={""}>None</option>
                  {selectedCharacter !== null && selectedCharacter.availableSpecialisms !== undefined && selectedCharacter.availableSpecialisms !== null && selectedCharacter.availableSpecialisms.length > 0 && selectedCharacter.availableSpecialisms.map((specialism: ICustomCharacterSpecialism, index: number) => {
                    return (<option className="AddCustomCharacterPopupBox_SpecialismSelector_Item" value={specialism.name} key={index}>{(specialism.name + " | " + specialism.cost + " pts" + (specialism.restrictions.length > 0 ? " | " + specialism.restrictions : ""))}</option>);
                  })}
                </NativeSelect>
              : 
                <Select id="AddCustomCharacterPopupBox_SpecialismSelector" className="AddCustomCharacterPopupBox_SpecialismSelector" value={selectedSpecialism ? selectedSpecialism.name : ""} label="Specialism" onChange={handleSpecialismChanged}>
                  <MenuItem value={""}>None</MenuItem>
                  {selectedCharacter !== null && selectedCharacter.availableSpecialisms !== undefined && selectedCharacter.availableSpecialisms !== null && selectedCharacter.availableSpecialisms.length > 0 && selectedCharacter.availableSpecialisms.map((specialism: ICustomCharacterSpecialism, index: number) => {
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
                  {selectedCharacter !== null && selectedCharacter.availableAbilities !== undefined && selectedCharacter.availableAbilities.length > 0 && selectedCharacter.availableAbilities.map((ability: ICustomCharacterAbility, index: number) => {
                    return (<option className="AddCustomCharacterPopupBox_AbilitySelector_Item" value={ability.name} key={index}>{(ability.name + " | " + ability.cost + " pts" + (ability.restrictions.length > 0 ? " | " + ability.restrictions : ""))}</option>);
                  })}
                </NativeSelect>
              : 
                <Select id="AddCustomCharacterPopupBox_AbilitySelector" className="AddCustomCharacterPopupBox_AbilitySelector" value={selectedAbility ? selectedAbility.name : ""} label="Ability" onChange={handleAbilityChanged}>
                  <MenuItem value={""}>None</MenuItem>
                  {selectedCharacter !== null && selectedCharacter.availableAbilities !== undefined && selectedCharacter.availableAbilities.length > 0 && selectedCharacter.availableAbilities.map((ability: ICustomCharacterAbility, index: number) => {
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
              <IconButton className="AddCustomCharacterPopupBox_ArrowButton AddCustomCharacterPopupBox_Button_Backward" onClick={() => {}}><ArrowBackIosIcon/></IconButton>
              <div>
                <p>
                  {selectedCharacter !== null ? 
                    "This character may be armed with " + selectedCharacter.availableWeapons.availableLoadouts.join(" OR ") + "."
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
                      {selectedCharacter !== null && availableWeaponsForSlot !== undefined && availableWeaponsForSlot.length > 0 && availableWeaponsForSlot.map((weapon: ICustomCharacterWeapon, index: number) => {
                        return (<option className="AddCustomCharacterPopupBox_WeaponSelector_Item" value={weapon.name} key={index}>{(weapon.name + " | " + weapon.cost + " pts")}</option>);
                      })}
                    </NativeSelect>
                  : 
                    <Select id="AddCustomCharacterPopupBox_WeaponSelector" className="AddCustomCharacterPopupBox_WeaponSelector" value={""} label={"Weapon " + currWeaponIndex} onChange={() => {}}>
                      <MenuItem value={""}>None</MenuItem>
                      {selectedCharacter !== null && availableWeaponsForSlot !== undefined && availableWeaponsForSlot.length > 0 && availableWeaponsForSlot.map((weapon: ICustomCharacterWeapon, index: number) => {
                        return (<MenuItem className="AddCustomCharacterPopupBox_WeaponSelector" value={weapon.name} key={index}>{(weapon.name + " | " + weapon.cost + " pts")}</MenuItem>);
                      })}
                    </Select>
                  }
                </FormControl>
              </div>
              <IconButton className="AddCustomCharacterPopupBox_ArrowButton AddCustomCharacterPopupBox_Button_Forward" onClick={() => {}}><ArrowForwardIosIcon/></IconButton>
            </div>
          </div>
          <div className="AddCustomCharacterPopupBox_SpacingPar borderBox"/>
          <IconButton className="AddCustomCharacterPopupBox_Button AddCustomCharacterPopupBox_Button_Back" onClick={handleClosePopup}>BACK</IconButton>
          <IconButton className="AddCustomCharacterPopupBox_Button AddCustomCharacterPopupBox_Button_Save" onClick={handleAddUnitClicked} disabled={false}>Add</IconButton>
        </div>
      </Backdrop>
    </>
  );
}

export default AddCustomCharacterPopup;