import { Box, CssBaseline } from '@mui/material'
import ThemeComponent from '../../UtilityComponents/Theme/Theme';
import Header from '../Header/Header'
import MainContentPage from '../../MainContentPage/MainContentPage';
import Footer from '../Footer/Footer';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CollapsibleCard from '../../UtilityComponents/CollapsibleCard/CollapsibleCard';
import FactionSelector from '../../MainContentPage/FactionSelector/FactionSelector';
import RosterBuildingArea from '../../MainContentPage/RosterBuildingArea/RosterBuildingArea';
import { BattleSize, Detachment } from '../../UtilityComponents/Army_Constants/Army_Constants';
import PathNotFoundScreen from '../PathNotFoundScreen/PathNotFoundScreen';
import './App.css'

interface AppProps {
  
}

const App: React.FC<AppProps> = () => {

  const CollapsibleBoxNames: string[] = ["FactionSelectorBox", "RosterCreatorBox"];

  const [activeCollapsibleBox, setActiveCollabsibleBox] = useState<string>(CollapsibleBoxNames[0]);

  const [faction, setFaction] = useState<string | null>(null);
  const [army, setArmy] = useState<string | null>(null);
  const [detachment, setDetachment] = useState<Detachment | null>(null);
  const [battleSize, setBattleSize] = useState<BattleSize | null>(null);

  const handleBoxClick = (clickedBoxName: string) => (event: React.SyntheticEvent, isBoxClicked: boolean) => {
    setActiveCollabsibleBox(isBoxClicked ? clickedBoxName : "");
  };

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
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Box className="AppContainer">
          <CssBaseline/>
          <ThemeComponent/>
          <Header onHomepage={true}/>
          <MainContentPage/>
          <Footer onHomepage={true}/>
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
          <Footer onHomepage={false}/>
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
            <RosterBuildingArea factionName={army ? army : "None"} detachment={detachment ? detachment : undefined} selectedRosterSize={battleSize}/>
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

export default App
