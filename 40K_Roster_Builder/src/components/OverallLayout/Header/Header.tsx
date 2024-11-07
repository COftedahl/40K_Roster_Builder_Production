import { Box, IconButton, Typography } from "@mui/material";
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
      <Box position="relative" className="HeaderBar" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <IconButton className="MenuButton" onClick={ToggleSidebar}>
          <MenuIcon fontSize="large"/>
        </IconButton>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center"}}>
          <Typography className="HeaderTitle" variant="h3" noWrap>Warhammer 40,000 Roster Builder</Typography>  
        </Box>
      </Box>
      <Sidebar open={open}/>
    </>
  );
}

export default Header;