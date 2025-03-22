import { Box, CssBaseline } from '@mui/material'
import ThemeComponent from '../../UtilityComponents/Theme/Theme';
import Header from '../Header/Header'
import MainContentPage from '../../MainContentPage/MainContentPage';
import Footer from '../Footer/Footer';
import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CollapsibleCard from '../../UtilityComponents/CollapsibleCard/CollapsibleCard';
import FactionSelector from '../../MainContentPage/FactionSelector/FactionSelector';
import RosterBuildingArea from '../../MainContentPage/RosterBuildingArea/RosterBuildingArea';
import { Army, BattleSize, Detachment, Enhancement, Faction, FactionList, Roster, Unit, UnitSelection, UnitType } from '../../UtilityComponents/Army_Constants/Army_Constants';
import PathNotFoundScreen from '../PathNotFoundScreen/PathNotFoundScreen';
import './App.css'
import axios from 'axios';
import { server_url } from '../../UtilityComponents/Environment Variables/Environment Variables';
import SaveRosterScreen from '../../MainContentPage/SaveRosterScreen/SaveRosterScreen';
import saveRosterPDF from '../../UtilityComponents/Functions/PDFFunctions';
import ViewSavedRostersPage from '../../ViewSavedRostersPage/ViewSavedRostersPage';
import updateArmyRestrictions from '../../UtilityComponents/Functions/ArmyRestrictions';

interface AppProps {
  
}

const App: React.FC<AppProps> = () => {

  const CollapsibleBoxNames: string[] = ["FactionSelectorBox", "RosterCreatorBox"];

  const [activeCollapsibleBox, setActiveCollabsibleBox] = useState<string>(CollapsibleBoxNames[0]);

  const [faction, setFaction] = useState<string | null>(null);
  const [army, setArmy] = useState<string | null>(null);
  const [detachment, setDetachment] = useState<Detachment | null>(null);
  const [battleSize, setBattleSize] = useState<BattleSize | null>(null);

  

  const [availableUnits, setAvailableUnits] = useState<Unit[]>([]);
  const [availableAllyUnits, setAvailableAllyUnits] = useState<Unit[]>([]);
  // const [availableCharacterUnits, setAvailableCharacterUnits] = useState<Unit[]>([]);
  // const [availableBattlelineUnits, setAvailableBattlelineUnits] = useState<Unit[]>([]);
  // const [availableOtherUnits, setAvailableOtherUnits] = useState<Unit[]>([]);

  const [unitList, setUnitList] = useState<UnitSelection[]>([]);
  const [allyUnitList, setAllyUnitList] = useState<UnitSelection[]>([]);
  const [enhancementList, setEnhancementList] = useState<Enhancement[]>(detachment ? detachment.enhancements : []);
  const [pointsUsed, setPointsUsed] = useState<number>(0);

  // const [characterUnitList, setCharacterUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.CHARACTERS));
  // const [battlelineUnitList, setBattlelineUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.BATTLELINE));
  // const [otherUnitList, setOtherUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.OTHER));
  const [characterUnitList, setCharacterUnitList] = useState<UnitSelection[]>([]);
  const [battlelineUnitList, setBattlelineUnitList] = useState<UnitSelection[]>([]);
  const [otherUnitList, setOtherUnitList] = useState<UnitSelection[]>([]);
  const [allyCharacterUnitList, setAllyCharacterUnitList] = useState<UnitSelection[]>([]);
  const [allyBattlelineUnitList, setAllyBattlelineUnitList] = useState<UnitSelection[]>([]);
  const [allyOtherUnitList, setAllyOtherUnitList] = useState<UnitSelection[]>([]);

  const factionSelectorProps = {
    faction: faction,
    army: army, 
    detachment: detachment, 
    battleSize: battleSize,
    setFaction: setFaction, 
    setArmy: setArmy, 
    setDetachment: setDetachment,
    setBattleSize: setBattleSize,
  }
  
  useEffect(() => {
    setUnitList([...characterUnitList, ...battlelineUnitList, ...otherUnitList]);
    updateArmyRestrictions(faction, army, [...characterUnitList, ...battlelineUnitList, ...otherUnitList], setUnitList, availableUnits, setAvailableUnits);
  }, [characterUnitList, battlelineUnitList, otherUnitList]);

  useEffect(() => {
    setAllyUnitList([...allyCharacterUnitList, ...allyBattlelineUnitList, ...allyOtherUnitList]);
  }, [allyCharacterUnitList, allyBattlelineUnitList, allyOtherUnitList]);

  useEffect(() => {
    setEnhancementList(detachment ? detachment.enhancements : []);
  }, [detachment]);

  useEffect(() => {
    retrieveAvailableUnits();
    retrieveAvailableAllyUnits();
  }, [army]);

  useEffect(() => {
    setPointsUsed(() => {
      let cost: number = 0;
      unitList.map((unit: UnitSelection) => {
        cost += (unit.costOptions[unit.selectedSizeIndex]?.cost) + (unit.enhancement && unit.enhancement.doesCostPoints ? unit.enhancement.cost : 0);
      });
      allyUnitList.map((unit: UnitSelection) => {
        cost += (unit.costOptions[unit.selectedSizeIndex]?.cost) + (unit.enhancement && unit.enhancement.doesCostPoints ? unit.enhancement.cost : 0);
      });
      return cost;
    });
  }, [unitList, allyUnitList]);

  const handleBoxClick = (clickedBoxName: string) => (event: React.SyntheticEvent, isBoxClicked: boolean) => {
    setActiveCollabsibleBox(isBoxClicked ? clickedBoxName : "");
  };

  const retrieveAvailableUnits = async () => {
    try {
      if (army && army.length > 0 && army.toLowerCase() !== "none") {
        const response = await axios.post(server_url + "/units/factionunits", {
          armyName: army.toUpperCase(),
        });
  
        if (!response.data || response.data.length === 0) {
          console.warn("No units found for army " + army);
          return [];
        }
        else if (response.status !== 200) {
          console.error("Fetch Units request for army " + army + " produced an error: " + response.data);
        }
        setAvailableUnits(response.data);
      }
      else {
        setAvailableUnits([]);
      }
    }
    catch (e) {
      console.error(e);
    }
  };  

  const retrieveAvailableAllyUnits = async () => {
    try {
      let armyNameString: String = "";
      switch (faction) {
        case (Faction.IMPERIUM): 
        case (Faction.SPACE_MARINES): 
          armyNameString = Faction.IMPERIUM + " Allies";
          break;
        case (Faction.CHAOS):
          armyNameString = Faction.CHAOS + " Allies";
          break;
        case (Faction.XENOS):
          switch (army) {
            case (Army.AELDARI): 
            case (Army.DRUKHARI): 
            case (Army.GENESTEALER_CULTS): 
              armyNameString = army + " Allies";
              break;
            default: 
              armyNameString = "";
              break;
          }
          break;
      }

      if (army && army.length > 0 && army.toLowerCase() !== "none") {
        const response = await axios.post(server_url + "/units/allyunits", {
          armyName: armyNameString,
        });
  
        if (!response.data || response.data.length === 0) {
          console.warn("No units found for ally army " + army + ", sent string \"armyName\":" + armyNameString);
          return [];
        }
        else if (response.status !== 200) {
          console.error("Fetch Units request for ally army " + army + " produced an error: " + response.data);
        }
        setAvailableAllyUnits(response.data);
      }
      else {
        setAvailableAllyUnits([]);
      }
    }
    catch (e) {
      console.error(e);
    }
  }

  const handleClearButtonClicked = () => {
    setCharacterUnitList([]);
    setBattlelineUnitList([]);
    setOtherUnitList([]);
    setAllyCharacterUnitList([]);
    setAllyBattlelineUnitList([]);
    setAllyOtherUnitList([]);
    setDetachment(() => null);
    setArmy(() => null);
    setFaction(() => null);
    setBattleSize(() => null);
  };

  const saveRoster = async ({rosterName, rosterOwner} : {rosterOwner: string, rosterName: string}): Promise<boolean> => {

    const  bodyArgs = {
      owner: rosterOwner, 
      name: rosterName, 
      points: pointsUsed, 
      faction: faction, 
      detachment: (detachment ? detachment.name : "none"),
      army: army, 
      armyUnits: unitList, 
      allyUnits: allyUnitList
    }

    const response = await axios.post(server_url + "/rosters/saveroster", bodyArgs);
    
    if ((response.status !== 200) || (response.data.response.indexOf("Error") >= 0)) {
      console.error("Saving roster encountered error: ", response.data);
      return false;
    }
    else {
      console.log("Roster " +  rosterName + " saved");
      return true;
    }
  };

  const saveRosterToPDF = async ({rosterName, rosterOwner} : {rosterOwner: string, rosterName: string}): Promise<boolean> => {
    console.log(army, faction, detachment);
    const result = await saveRosterPDF({
      rosterName: rosterName,
      rosterOwner: rosterOwner, 
      faction: faction || "", 
      army: army || "", 
      detachment: (detachment && detachment !== null ? detachment.name : ""), 
      rosterCost: pointsUsed, 
      armyUnits: unitList, 
      allyUnits: allyUnitList
    });
    return result;
  };

  const setArmyUnitListBreakdowns = (armyList: UnitSelection[]) => {
    const characterUnits: UnitSelection[] = armyList.filter((armyUnit: UnitSelection) => armyUnit.unitType && armyUnit.unitType.toLowerCase() === UnitType.CHARACTERS.toLowerCase());
    const battlelineUnits: UnitSelection[] = armyList.filter((armyUnit: UnitSelection) => armyUnit.unitType && armyUnit.unitType.toLowerCase() === UnitType.BATTLELINE.toLowerCase());
    const otherUnits: UnitSelection[] = armyList.filter((armyUnit: UnitSelection) => !armyUnit.unitType || armyUnit.unitType.toLowerCase() === UnitType.OTHER.toLowerCase());

    setCharacterUnitList(characterUnits);
    setBattlelineUnitList(battlelineUnits);
    setOtherUnitList(otherUnits);
  }

  const setAllyUnitListBreakdowns = (allyList: UnitSelection[]) => {
    const characterUnits: UnitSelection[] = allyList.filter((armyUnit: UnitSelection) => armyUnit.unitType && armyUnit.unitType.toLowerCase() === UnitType.CHARACTERS.toLowerCase());
    const battlelineUnits: UnitSelection[] = allyList.filter((armyUnit: UnitSelection) => armyUnit.unitType && armyUnit.unitType.toLowerCase() === UnitType.BATTLELINE.toLowerCase());
    const otherUnits: UnitSelection[] = allyList.filter((armyUnit: UnitSelection) => !armyUnit.unitType || armyUnit.unitType.toLowerCase() === UnitType.OTHER.toLowerCase());

    setCharacterUnitList(characterUnits);
    setBattlelineUnitList(battlelineUnits);
    setOtherUnitList(otherUnits);
  }

  const handleViewingRosterSelected = (roster: Roster) => {
    console.log("Loading roster from db: ", roster);
    setFaction(roster.faction);
    setArmy(roster.army);
    setAllyUnitListBreakdowns(roster.allyUnits);
    setArmyUnitListBreakdowns(roster.armyUnits);
    if (roster.detachment) {
      const detachmentOptions: Detachment[] = (FactionList[roster.faction?.toUpperCase().replace(" ", "_") || ""].armies.find((army) => army.name === roster.army)?.detachments);
      const detachment = (detachmentOptions && detachmentOptions.length > 0 ? detachmentOptions.find((detachment: Detachment) => detachment.name.toLowerCase() === roster.detachment.toLowerCase()) : null);
      if (detachment) {
        setDetachment(detachment);
      }
    }
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Box className="AppContainer">
          <CssBaseline/>
          <ThemeComponent/>
          <Header onHomepage={true}/>
          <MainContentPage/>
          <Footer onHomepage={true} clearButtonFunction={handleClearButtonClicked}/>
      </Box>), 
      errorElement: (
        <Box className="AppContainer">
          <CssBaseline/>
          <ThemeComponent/>
          <Header onHomepage={false}/>
          <Box className="MainContentPageOuterContainer">
            <Box className="MainContentPageContainer">
              <PathNotFoundScreen/>
            </Box>
          </Box>
          <Footer onHomepage={false} clearButtonFunction={handleClearButtonClicked}/>
      </Box>
      ), 
      children: [
        {
          path: "",
          element: <>
            <CollapsibleCard summary="Faction Selector" expanded={activeCollapsibleBox === CollapsibleBoxNames[0]} onChange={handleBoxClick} boxName={CollapsibleBoxNames[0]}>
              <FactionSelector {...factionSelectorProps}/>
            </CollapsibleCard>
            <CollapsibleCard summary="Roster Builder"  expanded={activeCollapsibleBox === CollapsibleBoxNames[1]} onChange={handleBoxClick} boxName={CollapsibleBoxNames[1]}>
              <RosterBuildingArea 
                army={army ? army : "None"} 
                detachment={detachment ? detachment : undefined} 
                selectedRosterSize={battleSize} 
                pointsUsed={pointsUsed} 
                availableUnits={availableUnits}
                availableAllyUnits={availableAllyUnits}
                unitList={unitList}
                enhancementList={enhancementList}
                characterUnitList={characterUnitList}
                battlelineUnitList={battlelineUnitList}
                otherUnitList={otherUnitList}
                setCharacterUnitList={setCharacterUnitList}
                setBattlelineUnitList={setBattlelineUnitList}
                setOtherUnitList={setOtherUnitList}
                allyCharacterUnitList={allyCharacterUnitList}
                allyBattlelineUnitList={allyBattlelineUnitList}
                allyOtherUnitList={allyOtherUnitList}
                setAllyCharacterUnitList={setAllyCharacterUnitList}
                setAllyBattlelineUnitList={setAllyBattlelineUnitList}
                setAllyOtherUnitList={setAllyOtherUnitList}/>
            </CollapsibleCard>
          </>,
        }
      ]
    }, 
    {
      path: "saveroster", 
      element: (<Box className="AppContainer">
        <CssBaseline/>
        <ThemeComponent/>
        <Header onHomepage={false}/>
        <Box className="MainContentPageOuterContainer">
            <Box className="MainContentPageContainer">
              <SaveRosterScreen saveRosterFunction={saveRoster} downloadRosterFunction={saveRosterToPDF}/>
            </Box>
          </Box>
        <Footer onHomepage={false} clearButtonFunction={handleClearButtonClicked}/>
    </Box>),
    errorElement: (
      <Box className="AppContainer">
        <CssBaseline/>
        <ThemeComponent/>
        <Header onHomepage={false}/>
        <Box className="MainContentPageOuterContainer">
          <Box className="MainContentPageContainer">
            <PathNotFoundScreen/>
          </Box>
        </Box>
        <Footer onHomepage={false} clearButtonFunction={handleClearButtonClicked}/>
    </Box>
    ),
    }, 
    {
      path: "viewrosters",
      element: (<Box className="AppContainer">
        <CssBaseline/>
        <ThemeComponent/>
        <Header onHomepage={false}/>
        <Box className="MainContentPageOuterContainer">
            <Box className="MainContentPageContainer">
              <ViewSavedRostersPage handleSelectClicked={handleViewingRosterSelected}/>
            </Box>
          </Box>
        <Footer onHomepage={false} clearButtonFunction={handleClearButtonClicked}/>
    </Box>),
    errorElement: (
      <Box className="AppContainer">
        <CssBaseline/>
        <ThemeComponent/>
        <Header onHomepage={false}/>
        <Box className="MainContentPageOuterContainer">
          <Box className="MainContentPageContainer">
            <PathNotFoundScreen/>
          </Box>
        </Box>
        <Footer onHomepage={false} clearButtonFunction={handleClearButtonClicked}/>
    </Box>
    ),
    }, 
    {
      path: "error", 
      element: (
        <Box className="AppContainer">
          <CssBaseline/>
          <ThemeComponent/>
          <Header onHomepage={false}/>
          <Box className="MainContentPageOuterContainer">
            <Box className="MainContentPageContainer">
              <PathNotFoundScreen/>
            </Box>
          </Box>
          <Footer onHomepage={false} clearButtonFunction={handleClearButtonClicked}/>
      </Box>
      ), 
      errorElement: (
        <Box className="AppContainer">
          <CssBaseline/>
          <ThemeComponent/>
          <Header onHomepage={false}/>
          <Box className="MainContentPageOuterContainer">
            <Box className="MainContentPageContainer">
              <PathNotFoundScreen/>
            </Box>
          </Box>
          <Footer onHomepage={false} clearButtonFunction={handleClearButtonClicked}/>
      </Box>
      ),
    }
  ], 
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true, 
      v7_skipActionErrorRevalidation: true
    }
  });


  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }}/>
    </>
  )
}

export default App;

// const unitListConst: UnitSelection[] = [
  //   {
  //     name: "Typhus",
  //     unitType: UnitType.CHARACTERS,
  //     costOptions: [{
  //       cost: 200,
  //       numModels: 1,
  //       modelCountString: "1 model",
  //     }],
  //     isUnique: true,
  //     army: Army.DEATH_GUARD,
  //     faction: Faction.CHAOS,
  //     selectedSizeIndex: 0,
  //   },
  //   {
  //     name: "A Longer, random name",
  //     unitType: UnitType.OTHER,
  //     costOptions: [{
  //       cost: 10,
  //       numModels: 2,
  //       modelCountString: "2 models",
  //     }, {
  //       cost: 100,
  //       numModels: 10,
  //       modelCountString: "10 models",
  //     }, {
  //       cost: 200,
  //       numModels: 20,
  //       modelCountString: "20 models",
  //     }],
  //     isUnique: false,
  //     army: Army.DEATH_GUARD,
  //     faction: Faction.CHAOS,
  //     selectedSizeIndex: 1,
  //   },{
  //     name: "person 3",
  //     unitType: UnitType.OTHER,
  //     costOptions: [{
  //       cost: 50,
  //       numModels: 3,
  //       modelCountString: "3 models",
  //     }, {
  //       cost: 150,
  //       numModels: 5,
  //       modelCountString: "5 models",
  //     },],
  //     isUnique: false,
  //     army: Army.DEATH_GUARD,
  //     faction: Faction.CHAOS,
  //     selectedSizeIndex: 1,
  //   },{
  //     name: "A Longer, random name",
  //     unitType: UnitType.OTHER,
  //     costOptions: [{
  //       cost: 10,
  //       numModels: 2,
  //       modelCountString: "2 models",
  //     }, {
  //       cost: 100,
  //       numModels: 10,
  //       modelCountString: "10 models",
  //     }, {
  //       cost: 200,
  //       numModels: 20,
  //       modelCountString: "20 models",
  //     }],
  //     isUnique: false,
  //     army: Army.DEATH_GUARD,
  //     faction: Faction.CHAOS,
  //     selectedSizeIndex: 1,
  //   },
  //   {
  //     name: "Typhus",
  //     unitType: UnitType.CHARACTERS,
  //     costOptions: [{
  //       cost: 200,
  //       numModels: 1,
  //       modelCountString: "1 model",
  //     }],
  //     isUnique: true,
  //     army: Army.DEATH_GUARD,
  //     faction: Faction.CHAOS,
  //     selectedSizeIndex: 0,
  //   }
  // ];

  // const enhancementListConst: Enhancement[] = [
  //   {name: "Baleful Grimoire", cost: 20, doesCostPoints: true}, 
  //   {name: "Impossible Robe", cost: 25, doesCostPoints: true}
  // ];