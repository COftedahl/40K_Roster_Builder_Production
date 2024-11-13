import { Box, IconButton, Typography } from "@mui/material";
import './Footer.css';

interface FooterProps {
    onHomepage: boolean;
}

const Footer: React.FC<FooterProps> = ({onHomepage}) => {

  const handleClick = () => {
    console.log("click");
  }

  return (
    <>
      <Box className="FooterBar">
        <IconButton className={"FooterClearButton FooterButton" + (onHomepage ? "" : " FooterButton_hidden")} onClick={handleClick}>CLEAR</IconButton>
        <IconButton className={"FooterSaveButton FooterButton" + (onHomepage ? "" : " FooterButton_hidden")} onClick={handleClick}>SAVE</IconButton>
      </Box>
    </>
  );
}

export default Footer;