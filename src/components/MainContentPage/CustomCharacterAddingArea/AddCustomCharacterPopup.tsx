import { Backdrop, Box, Divider, FormControl, IconButton, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent } from "@mui/material";
import { ICustomCharacter, ICustomCharacterAbility, ICustomCharacterSelection, ICustomCharacterSpecialism } from "../../UtilityComponents/Army_Constants/Army_Constants";
import './AddCustomCharacterPopup.css';
import { useEffect, useState } from "react";

interface AddCustomCharacterPopupProps {
  display: boolean, 
  closePopup: () => void, 
  onAddUnit: (characterAdding: ICustomCharacterSelection) => void, 
  army: string, 
  availableCharacters: ICustomCharacter[], 
}

const AddCustomCharacterPopup: React.FC<AddCustomCharacterPopupProps> = (props: AddCustomCharacterPopupProps) => {

  const [selectedCharacter, setSelectedCharacter] = useState<ICustomCharacter | null>(null);
  const [selectedSpecialism, setSelectedSpecialism] = useState<ICustomCharacterSpecialism | null>(null);
  const [selectedAbility, setSelectedAbility] = useState<ICustomCharacterAbility | null>(null);

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
  }

  const handleArchetypeSelectorChange = (event: SelectChangeEvent, child: any) => {
    try {
      resetCharacterOptions();
      setSelectedCharacter(props.availableCharacters.find((character: ICustomCharacter) => character.archetype === child?.props.value) || undefined);
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleSpecialismChanged = (event: SelectChangeEvent, child: any) => {
    try {
      setSelectedSpecialism(selectedCharacter.availableSpecialisms.find((specialism: ICustomCharacterSpecialism) => specialism.name === child?.props.value) || undefined)
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleAbilityChanged = (event: SelectChangeEvent, child: any) => {
    try {
      setSelectedAbility(selectedCharacter.availableAbilities.find((ability: ICustomCharacterAbility) => ability.name === child?.props.value) || undefined)
    }
    catch (e) {
      console.error(e);
    }
  }

  const calculateCost = (): number => {
    return 0;
  }

  const handleAddUnitClicked = () => {
    props.onAddUnit({
      archetype: selectedCharacter.archetype,
      totalCost: calculateCost(),
      faction: selectedCharacter.faction,
      army: selectedCharacter.army,
      selectedSpecialisms: [],
      selectedAbilities: [],
      loadout: []
    });
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
          </div>
          <Divider className="AddCustomCharacterPopupBox_Divider"/>
          <div className="AddCustomCharacter_InputAreaDiv flexColumn centerAlign centerJustify">
            <FormControl>
              <InputLabel htmlFor="AddCustomCharacterPopupBox_ArchetypeSelector" className="AddCustomCharacterPopupBox_ArchetypeSelectorLabel">Archetype
              </InputLabel>
              {isUserOnMobileDevice ? 
                <NativeSelect className="AddCustomCharacterPopupBox_ArchetypeSelector">
                  {props.availableCharacters !== undefined && props.availableCharacters.length > 0 && props.availableCharacters.map((availableUnit: ICustomCharacter, index: number) => {
                    return (<option className="AddCustomCharacterPopupBox_ArchetypeSelector_Item" value={availableUnit.archetype} key={index}>{(availableUnit.archetype)}</option>);
                  })}
                </NativeSelect>
              : 
                <Select id="AddCustomCharacterPopupBox_ArchetypeSelector" className="AddCustomCharacterPopupBox_ArchetypeSelector" value={selectedCharacter ? selectedCharacter.archetype : ""} label="Archetype" onChange={handleArchetypeSelectorChange}>
                  {props.availableCharacters !== undefined && props.availableCharacters.length > 0 && props.availableCharacters.map((availableUnit: ICustomCharacter, index: number) => {
                    return (<MenuItem className="AddCustomCharacterPopupBox_ArchetypeSelector_Item" value={availableUnit.archetype} key={index}>{(availableUnit.archetype)}</MenuItem>);
                  })}
                </Select>
              }
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="AddCustomCharacterPopupBox_SpecialismSelector" className="AddCustomCharacterPopupBox_ArchetypeSelectorLabel">Specialism
              </InputLabel>
              {isUserOnMobileDevice ? 
                <NativeSelect className="AddCustomCharacterPopupBox_SpecialismSelector">
                  {selectedCharacter !== null && selectedCharacter.availableSpecialisms !== undefined && selectedCharacter.availableSpecialisms.length > 0 && selectedCharacter.availableSpecialisms.map((specialism: ICustomCharacterSpecialism, index: number) => {
                    return (<option className="AddCustomCharacterPopupBox_SpecialismSelector_Item" value={specialism.name} key={index}>{(specialism.name)}</option>);
                  })}
                </NativeSelect>
              : 
                <Select id="AddCustomCharacterPopupBox_SpecialismSelector" className="AddCustomCharacterPopupBox_SpecialismSelector" value={selectedSpecialism ? selectedSpecialism.name : ""} label="Specialism" onChange={handleSpecialismChanged}>
                  {selectedCharacter !== null && selectedCharacter.availableSpecialisms !== undefined && selectedCharacter.availableSpecialisms.length > 0 && selectedCharacter.availableSpecialisms.map((specialism: ICustomCharacterSpecialism, index: number) => {
                    return (<MenuItem className="AddCustomCharacterPopupBox_SpecialismSelector_Item" value={specialism.name} key={index}>{(specialism.name)}</MenuItem>);
                  })}
                </Select>
              }
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="AddCustomCharacterPopupBox_AbilitySelector" className="AddCustomCharacterPopupBox_AbilitySelectorLabel">Ability
              </InputLabel>
              {isUserOnMobileDevice ? 
                <NativeSelect className="AddCustomCharacterPopupBox_AbilitySelector">
                  {selectedCharacter !== null && selectedCharacter.availableAbilities !== undefined && selectedCharacter.availableAbilities.length > 0 && selectedCharacter.availableAbilities.map((ability: ICustomCharacterAbility, index: number) => {
                    return (<option className="AddCustomCharacterPopupBox_AbilitySelector_Item" value={ability.name} key={index}>{(ability.name)}</option>);
                  })}
                </NativeSelect>
              : 
                <Select id="AddCustomCharacterPopupBox_AbilitySelector" className="AddCustomCharacterPopupBox_AbilitySelector" value={selectedAbility ? selectedAbility.name : ""} label="Ability" onChange={handleAbilityChanged}>
                  {selectedCharacter !== null && selectedCharacter.availableAbilities !== undefined && selectedCharacter.availableAbilities.length > 0 && selectedCharacter.availableAbilities.map((ability: ICustomCharacterAbility, index: number) => {
                    return (<MenuItem className="AddCustomCharacterPopupBox_AbilitySelector_Item" value={ability.name} key={index}>{(ability.name)}</MenuItem>);
                  })}
                </Select>
              }
            </FormControl>
          </div>
          <IconButton className="AddUnitPopupBox_Button AddUnitPopupBox_Button_Back" onClick={handleClosePopup}>BACK</IconButton>
          <IconButton className="AddUnitPopupBox_Button AddUnitPopupBox_Button_Save" onClick={handleAddUnitClicked} disabled={false}>Add</IconButton>
        </div>
      </Backdrop>
    </>
  );
}

export default AddCustomCharacterPopup;