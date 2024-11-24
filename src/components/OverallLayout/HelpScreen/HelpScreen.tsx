import { Backdrop, Box, Divider, IconButton, Typography } from "@mui/material";
import './HelpScreen.css';

interface HelpScreenProps {
  open: boolean;
  closeBackdropFunction: () => void;
}

const HelpScreen: React.FC<HelpScreenProps> = ({open, closeBackdropFunction}) => {

  const handleBoxClick: React.MouseEventHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
    <Backdrop open={open} className="HelpScreen" sx={{zIndex: (theme) => theme.zIndex.drawer + 2}} onClick={closeBackdropFunction}>
      <Box className="HelpScreenBox" onClick={handleBoxClick}>
        <Typography variant="h6">App Guide</Typography>
        <Divider className="HelpScreenBox_Divider"/>
        <Typography>This app is a roster builder for Warhammer 40K. <br/>
              Begin by selecting your faction, army, detachment, and roster size from
               the faction selector area, open on startup. After that, click on the "Roster Builder" heading below the Faction Selector area. 
               You will see a roster display, with units separated into categories based first on whether they are from your faction versus allies, 
                and then based on unit type, e.g. Character, Battleline, or other. <br/>
                From this screen, you can use the "+" buttons on the right side to add units to your roster. <br/>
                If you wish to edit any unit already in your roster, simply click on that unit entry and edit their data from the popup. <br/>
                The sidebar (accessible from the buton on the left side of the appbar on the top of your screen) allows navigation to different screens, and the buttons 
                on the bottom of your screen modify your roster according to their indicated functionality. <br/>
                Any questions may be directed to your (possibly remote) IT Support Technician, Cole. <br/>
                Happy Roster Building! 
        </Typography>
        <IconButton className="HelpScreenBox_Button HelpScreenBox_Button_Back" onClick={closeBackdropFunction}>BACK</IconButton>
      </Box>
    </Backdrop>
    </>
  );
}

export default HelpScreen;