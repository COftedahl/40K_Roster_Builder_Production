import { Box, CssBaseline } from '@mui/material'
import ThemeComponent from '../../UtilityComponents/Theme/Theme';
import Header from '../Header/Header'
import MainContentPage from '../../MainContentPage/MainContentPage';
import Footer from '../Footer/Footer';
import './App.css'

interface AppProps {
  
}

const App: React.FC<AppProps> = () => {

  return (
    <>
      <Box className="AppContainer">
        <CssBaseline/>
        <ThemeComponent/>
        <Header/>
        <MainContentPage/>
        <Footer/>
      </Box>
    </>
  )
}

export default App
