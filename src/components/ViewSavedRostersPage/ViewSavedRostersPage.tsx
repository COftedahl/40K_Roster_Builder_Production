import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FactionList, Roster, UnitSelection, UnitType } from "../UtilityComponents/Army_Constants/Army_Constants";
import { server_url } from "../UtilityComponents/Environment Variables/Environment Variables";
import axios from "axios";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import RosterBuildingArea from "../MainContentPage/RosterBuildingArea/RosterBuildingArea";
import { useNavigate } from "react-router-dom";
import './ViewSavedRostersPage.css';

interface ViewSavedRostersPageProps {
  handleSelectClicked: (roster: Roster) => void, 
}

const ViewSavedRostersPage: React.FC<ViewSavedRostersPageProps> = ({...props}) => {

    const navigate = useNavigate();

  const [rosterList, setRosterList] = useState<Roster[]>([]);
  const [currRosterIndex, setCurrRosterIndex] = useState<number>(-1);

  const [armyUnits, setArmyUnits] = useState<UnitSelection[]>([]);
  const [allyUnits, setAllyUnits] = useState<UnitSelection[]>([]);
  const [characterUnitList, setCharacterUnitList] = useState<UnitSelection[]>([]);
  const [battlelineUnitList, setBattlelineUnitList] = useState<UnitSelection[]>([]);
  const [otherUnitList, setOtherUnitList] = useState<UnitSelection[]>([]);
  const [allyCharacterUnitList, setAllyCharacterUnitList] = useState<UnitSelection[]>([]);
  const [allyBattlelineUnitList, setAllyBattlelineUnitList] = useState<UnitSelection[]>([]);
  const [allyOtherUnitList, setAllyOtherUnitList] = useState<UnitSelection[]>([]);

  const retrieveRosters = async () => {
    try {
      const response = await axios.get(server_url + "/rosters/allrosters");

      if (!response.data || response.data.length === 0) {
        console.warn("No rosters found");
        return [];
      }
      else if (response.status !== 200) {
        console.error("Fetch all rosters request returned error: ", response.data);
      }
      setRosterList(response.data.response);
      console.log(response.data.response);
    }
    catch (e) {
      console.error("Fetch all rosters request returned error: ", e);
    }
  };

  const handleBackwardClicked = () => {
    if ((currRosterIndex <= 0) && (rosterList && rosterList.length > 0)) {
      setCurrRosterIndex(currRosterIndex + rosterList.length - 1);
    }
    else {
      setCurrRosterIndex(currRosterIndex - 1);
    }
  };

  const handleForwardClicked = () => {
    if (currRosterIndex >= (rosterList.length - 1)) {
      setCurrRosterIndex(currRosterIndex % (rosterList.length - 1));
    }
    else {
      setCurrRosterIndex(currRosterIndex + 1);
    }
  };

  const handleSelectClicked = () => {
    if (rosterList && (rosterList.length > currRosterIndex) && (rosterList[currRosterIndex])) {
      props.handleSelectClicked(rosterList[currRosterIndex]);
      navigate("/");
    }
  }

  useEffect(() => {
    if (rosterList === undefined || rosterList.length <= 0) {
      retrieveRosters();
    }
  }, []);

  useEffect(() => {
    if (rosterList && rosterList.length > 0) {
      setCurrRosterIndex(() => 0);
    }
    else {
      setCurrRosterIndex(-1);
    }
  }, [rosterList]);

  useEffect(() => {
    if (rosterList && rosterList.length > 0) {
      setArmyUnits(rosterList[currRosterIndex].armyUnits);
      setAllyUnits(rosterList[currRosterIndex].allyUnits);
    }
  }, [currRosterIndex]);

  useEffect(() => {
    if (armyUnits && armyUnits.length > 0) {
      setCharacterUnitList(armyUnits.filter((unit: UnitSelection) => unit.unitType && unit.unitType.toLowerCase() === UnitType.CHARACTERS.toLowerCase()));
      setBattlelineUnitList(armyUnits.filter((unit: UnitSelection) => unit.unitType && unit.unitType.toLowerCase() === UnitType.BATTLELINE.toLowerCase()));
      setOtherUnitList(armyUnits.filter((unit: UnitSelection) => unit.unitType === undefined || (unit.unitType && unit.unitType.toLowerCase() === UnitType.OTHER.toLowerCase())));
    }
  }, [armyUnits]);

  useEffect(() => {
    if (allyUnits && allyUnits.length > 0) {
      setAllyCharacterUnitList(allyUnits.filter((unit: UnitSelection) => unit.unitType && unit.unitType.toLowerCase() === UnitType.CHARACTERS.toLowerCase()));
      setAllyBattlelineUnitList(allyUnits.filter((unit: UnitSelection) => unit.unitType && unit.unitType.toLowerCase() === UnitType.BATTLELINE.toLowerCase()));
      setAllyOtherUnitList(allyUnits.filter((unit: UnitSelection) => unit.unitType === undefined || (unit.unitType && unit.unitType.toLowerCase() === UnitType.OTHER.toLowerCase())));
    }
  }, [allyUnits]);

  return (
    <>
      {rosterList && rosterList.length > 0 && currRosterIndex >= 0 && currRosterIndex < rosterList.length ? 
      <>
      <Box className="ViewSavedRostersPageBox ViewSavedRostersPageBox_Rosters">
        <Box className="ViewSavedRostersPageBox ViewSavedRostersPageBox_ButtonBox">
          <IconButton className="ViewSavedRostersPageBox_Button ViewSavedRostersPageBox_Button_Backward" onClick={handleBackwardClicked}><ArrowBackIosIcon/></IconButton>
        </Box>
        <Box className="ViewSavedRostersPageBox_Inner">
          <IconButton className={"ViewSavedRostersPageBox_Button ViewSavedRostersPageBox_Button_Select"} onClick={handleSelectClicked}>SELECT ROSTER</IconButton>
          <Typography className="ViewSavedRostersPageBox_RosterMetadataText">{rosterList[currRosterIndex].name}<br/>{rosterList[currRosterIndex].owner}</Typography>
          <RosterBuildingArea
            army={rosterList[currRosterIndex].army} 
            detachment={FactionList[rosterList[currRosterIndex].faction.toUpperCase().replaceAll(" ","_")].armies.find((army) => army.name === rosterList[currRosterIndex].army)?.detachments ? (
                rosterList[currRosterIndex].detachment ? FactionList[rosterList[currRosterIndex].faction.toUpperCase().replaceAll(" ","_")].armies.find((army) => army.name === rosterList[currRosterIndex].army)?.detachments.find((currDetachment) => currDetachment.name.toLowerCase().replace(" ", "_") === rosterList[currRosterIndex].detachment.toLowerCase().replace(" ", "_"))
                : FactionList[rosterList[currRosterIndex].faction.toUpperCase().replaceAll(" ","_")].armies.find((army) => army.name === rosterList[currRosterIndex].army)?.detachments[0] ) 
              : undefined}
            pointsUsed={rosterList[currRosterIndex].points} 
            availableUnits={[]} 
            availableAllyUnits={[]} 
            unitList={[]} 
            enhancementList={[]} 
            characterUnitList={characterUnitList} 
            battlelineUnitList={battlelineUnitList} 
            otherUnitList={otherUnitList} 
            setCharacterUnitList={() => {}}
            setBattlelineUnitList={() => {}}
            setOtherUnitList={() => {}}
            allyCharacterUnitList={allyCharacterUnitList}
            allyBattlelineUnitList={allyBattlelineUnitList}
            allyOtherUnitList={allyOtherUnitList}
            setAllyCharacterUnitList={() => {}}
            setAllyBattlelineUnitList={() => {}}
            setAllyOtherUnitList={() => {}}
            allowRosterModifications={false}
          />
        </Box>
        <Box className="ViewSavedRostersPageBox ViewSavedRostersPageBox_ButtonBox">
          <IconButton className="ViewSavedRostersPageBox_Button ViewSavedRostersPageBox_Button_Forward" onClick={handleForwardClicked}><ArrowForwardIosIcon/></IconButton>
        </Box>
      </Box>
      </>
      : 
      <>
      <Box className="ViewSavedRostersPageBox ViewSavedRostersPageBox_NoRostersFound">
        <Typography variant="h6">No Rosters Found</Typography>
      </Box>
      </>
      }
    </>
  );
}

export default ViewSavedRostersPage;