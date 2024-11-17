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
import { BattleSize, Detachment, Enhancement, Unit, UnitSelection, UnitType } from '../../UtilityComponents/Army_Constants/Army_Constants';
import PathNotFoundScreen from '../PathNotFoundScreen/PathNotFoundScreen';
import './App.css'
import axios from 'axios';

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
  // const [availableCharacterUnits, setAvailableCharacterUnits] = useState<Unit[]>([]);
  // const [availableBattlelineUnits, setAvailableBattlelineUnits] = useState<Unit[]>([]);
  // const [availableOtherUnits, setAvailableOtherUnits] = useState<Unit[]>([]);

  const [unitList, setUnitList] = useState<UnitSelection[]>([]);
  const [enhancementList, setEnhancementList] = useState<Enhancement[]>(detachment ? detachment.enhancements : []);
  const [pointsUsed, setPointsUsed] = useState<number>(0);

  // const [characterUnitList, setCharacterUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.CHARACTERS));
  // const [battlelineUnitList, setBattlelineUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.BATTLELINE));
  // const [otherUnitList, setOtherUnitList] = useState<UnitSelection[]>(unitListConst.filter((unit) => unit.unitType === UnitType.OTHER));
  const [characterUnitList, setCharacterUnitList] = useState<UnitSelection[]>([]);
  const [battlelineUnitList, setBattlelineUnitList] = useState<UnitSelection[]>([]);
  const [otherUnitList, setOtherUnitList] = useState<UnitSelection[]>([]);

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
  }, [characterUnitList, battlelineUnitList, otherUnitList]);

  useEffect(() => {
    setEnhancementList(detachment ? detachment.enhancements : []);
  }, [detachment]);

  useEffect(() => {
    retrieveAvailableUnits();
  }, [army]);

  useEffect(() => {
    setPointsUsed(() => {
      let cost: number = 0;
      unitList.map((unit: UnitSelection) => {
        cost += (unit.costOptions[unit.selectedSizeIndex]?.cost) + (unit.enhancement && unit.enhancement.doesCostPoints ? unit.enhancement.cost : 0);
      });
      return cost;
    });
  }, [unitList]);

  const handleBoxClick = (clickedBoxName: string) => (event: React.SyntheticEvent, isBoxClicked: boolean) => {
    setActiveCollabsibleBox(isBoxClicked ? clickedBoxName : "");
  };

  const retrieveAvailableUnits = async () => {
    try {
      if (army && army.length > 0 && army.toLowerCase() !== "none") {
        const response = await axios.post("http://localhost:5000/units/factionunits", {
          armyName: army,
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

  const handleClearButtonClicked = () => {
    setCharacterUnitList([]);
    setBattlelineUnitList([]);
    setOtherUnitList([]);
    setDetachment(() => null);
    setArmy(() => null);
    setFaction(() => null);
    setBattleSize(() => null);
  };

  const handleSaveButtonClicked = () => {

  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Box className="AppContainer">
          <CssBaseline/>
          <ThemeComponent/>
          <Header onHomepage={true}/>
          <MainContentPage/>
          <Footer onHomepage={true} clearButtonFunction={handleClearButtonClicked} saveButtonFunction={handleSaveButtonClicked}/>
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
          <Footer onHomepage={false} clearButtonFunction={handleClearButtonClicked} saveButtonFunction={handleSaveButtonClicked}/>
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
              unitList={unitList}
              enhancementList={enhancementList}
              characterUnitList={characterUnitList}
              battlelineUnitList={battlelineUnitList}
              otherUnitList={otherUnitList}
              setCharacterUnitList={setCharacterUnitList}
              setBattlelineUnitList={setBattlelineUnitList}
              setOtherUnitList={setOtherUnitList}/>
          </CollapsibleCard>
        </>,
        }
      ]
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