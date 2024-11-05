import { CssBaseline } from '@mui/material'
import Header from '../Header/Header'
import './App.css'

interface AppProps {
  
}

const App: React.FC<AppProps> = () => {

  return (
    <>
      <CssBaseline/>
      <Header/>
    </>
  )
}

export default App
