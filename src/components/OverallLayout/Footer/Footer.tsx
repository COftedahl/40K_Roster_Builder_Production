import { Box, IconButton } from "@mui/material";
import './Footer.css';
import { useNavigate } from "react-router-dom";

interface FooterProps {
    onHomepage: boolean;
    clearButtonFunction: () => void;
}

const Footer: React.FC<FooterProps> = ({onHomepage, clearButtonFunction}) => {

  const navigate = useNavigate();

  const handleClearClicked = () => {
    clearButtonFunction();
  }

  const handleSaveClicked = () => {
    //display save roster popup - save after getting roster details, then offer to download roster
    navigate("/saveroster");
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