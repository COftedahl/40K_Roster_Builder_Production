import { Box, IconButton, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import "./Header.css";
import HelpScreen from "../HelpScreen/HelpScreen";

interface HeaderProps {
  onHomepage: boolean;
}

const Header: React.FC<HeaderProps> = ({onHomepage}) => {
  const [open, setOpen] = useState(false);
  const [displayHelp, setDisplayHelp] = useState(false);

  const ToggleSidebar = () => {
    setOpen(!open);
  };

  const handleHelpClick = () => {
    setDisplayHelp(!displayHelp);
  }

  const closeBackdropFunction = () => {
    setDisplayHelp(false);
  }

  return (
    <>
      <Box position="relative" className="HeaderBar" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <IconButton className="MenuButton" onClick={ToggleSidebar}>
          <MenuIcon fontSize="large"/>
        </IconButton>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center"}}>
          <Typography className="HeaderTitle" variant="h3" noWrap>Warhammer 40,000 Roster Builder</Typography>  
        </Box>
        <IconButton className={"HelpButton HeaderButton" + (onHomepage ? "" : " HeaderButton_hidden")} onClick={handleHelpClick}><HelpOutlineIcon/></IconButton>
      </Box>
      <Sidebar open={open}/>
      <HelpScreen open={displayHelp} closeBackdropFunction={closeBackdropFunction}/>
    </>
  );
}

export default Header;