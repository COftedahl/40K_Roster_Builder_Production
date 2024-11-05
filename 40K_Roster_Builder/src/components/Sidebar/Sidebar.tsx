import { CSSObject, styled, Theme, Typography } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import React from "react";

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

const Sidebar: React.FC<SidebarProps> = ({open}) => {
  

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            top: "9%",
            height: "91%",
            borderRadius: "8px",
            borderTopLeftRadius: "0px",
            width: open ? drawerWidth : 0,
            boxSizing: 'border-box',
            backgroundImage: "radial-gradient(white 50%, lightgrey)",
          }
        }}
        variant="permanent"
        anchor="left"
        open={open}
      >
        <Typography>Here is some very long text that should wrap several lines and go on and on and on and we'll see if it transitions properly. </Typography>
      </Drawer>
    </>
  );
}

export default Sidebar;