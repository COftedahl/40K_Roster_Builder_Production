import { Box, Typography } from "@mui/material";
import './Footer.css';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {

  return (
    <>
      <Box className="FooterBar">
        <Typography>Here is some random text so I can see the footer</Typography>
      </Box>
    </>
  );
}

export default Footer;