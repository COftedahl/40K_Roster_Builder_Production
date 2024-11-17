import { Box, IconButton, Typography } from "@mui/material";
import './Footer.css';

interface FooterProps {
    onHomepage: boolean;
    clearButtonFunction: () => void;
    saveButtonFunction: () => void;
}

const Footer: React.FC<FooterProps> = ({onHomepage, clearButtonFunction, saveButtonFunction}) => {

  const handleClearClicked = () => {
    clearButtonFunction();
  }

  const handleSaveClicked = () => {
    saveButtonFunction();
  }

  return (
    <>
      <Box className="FooterBar">
        <IconButton className={"FooterClearButton FooterButton" + (onHomepage ? "" : " FooterButton_hidden")} onClick={handleClearClicked}>CLEAR</IconButton>
        <IconButton className={"FooterSaveButton FooterButton" + (onHomepage ? "" : " FooterButton_hidden")} onClick={handleSaveClicked}>SAVE</IconButton>
      </Box>
    </>
  );
}

export default Footer;