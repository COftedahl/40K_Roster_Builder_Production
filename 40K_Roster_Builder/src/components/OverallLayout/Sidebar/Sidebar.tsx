import { CSSObject, List, ListItem, styled, Theme } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import React from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";

const drawerWidth: string = "28%";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  textWrap: 'wrap',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  textWrap: 'nowrap',
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

interface SidebarProps {
  open: boolean;
}

interface Link {
  text: string;
  path: string;
}

const Sidebar: React.FC<SidebarProps> = ({open}) => {
  
  const links: Link[] = [
    {text: "Homepage", path: "/"}, 
    {text: "Save Roster", path: "/saveroster"},
    {text: "View Saved Rosters", path: "/viewrosters"}, 
    {text: "Send Error Report", path: "/error"}
  ];

  return (
    <>
      <Drawer className="Sidebar"
        sx={{
          width: open ? "75%" : "0px !important",
          '& .MuiDrawer-paper': {width: open ? drawerWidth : "0px"}
        }}
        
        variant="permanent"
        anchor="left"
        open={open}
      >
        <List>
          {links.map((link: Link, index: number) => {
            return (
              <Link to={link.path} key={index}><ListItem>{link.text}</ListItem></Link>
              // <></>
            );
          })}
        </List>
        {/* <Typography>Here is some very long text that should wrap several lines and go on and on and on and we'll see if it transitions properly. </Typography> */}
      </Drawer>
    </>
  );
}

export default Sidebar;