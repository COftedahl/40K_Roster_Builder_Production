import { AppBar, Box, IconButton, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const ToggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1, 
          display: "flex", flexDirection: "row", 
          justifyContent: "space-between", 
          height: "9%"}}>
        <IconButton className="MenuButton" sx={{position: "fixed", left: "10px", top: "2px", outline: "none !important"}} onClick={ToggleSidebar}>
          <MenuIcon fontSize="large"/>
        </IconButton>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center"}}>
          <Typography variant="h3" noWrap sx={{maxWidth: "80%", alignSelf: "center", textSizeAdjust: "none", WebkitTextSizeAdjust: "none", maxHeight: "100%"}}>Warhammer 40,000 Roster Builder</Typography>  
        </Box>
      </AppBar>
      <Sidebar open={open}/>
    </>
  );
}

export default Header;