import { Box, IconButton, Typography } from "@mui/material";
import './Footer.css';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {

  const handleClick = () => {
    console.log("click");
  }


  return (
    <>
      <Box className="FooterBar">
        <IconButton className="FooterClearButton" onClick={handleClick}>CLEAR</IconButton>
        <IconButton className="FooterSaveButton" onClick={handleClick}>SAVE</IconButton>
      </Box>
    </>
  );
}

export default Footer;