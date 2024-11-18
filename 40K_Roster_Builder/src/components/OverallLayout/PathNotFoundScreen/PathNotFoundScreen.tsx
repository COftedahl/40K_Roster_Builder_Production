import { Box, Divider, IconButton, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import './PathNotFoundScreen.css';

interface PathNotFoundScreenProps {

}

const PathNotFoundScreen: React.FC<PathNotFoundScreenProps> = () => {

  const error: any = useRouteError();
  const errorCode: number = (error && error.status ? error.status : -1);
  console.error(error);
  const navigate = useNavigate();

  const getErrorHeaderText = (errorCode: number): string => {
    switch(errorCode) {
      case 404: 
        return "Path Not Found";
        break;
      case 403: 
        return "Access Denied";
        break;
      default: return "Page Error";
      break;
    }
  }

  const getErrorBodyText = (errorCode: number): string => {
    switch(errorCode) {
      case 404: 
        return "This page does not exist (or is not accessible yet). ";
        break;
      case 403: 
        return "You do not have permission to access this page or resource. ";
        break;
      default: 
        return "";
        break;
    }
  }

  const handleSendReportClicked = () => {

  }

  const handleReturnHomeClicked = () => {
    navigate("/");
  }

  return (
    <>
    <Box className="PathNotFoundScreenBox">
      <Typography variant="h6">{getErrorHeaderText(errorCode)}</Typography>
      <Divider className="PathNotFoundScreenBox_Divider"/>
      <Typography>Oops! Looks like you found a bug! <br/>
        {getErrorBodyText(errorCode)}
        If you think this should be looked at, click the "Send Error Report" button below. <br/>
        You can use the sidebar to navigate back as usual, or use the "Return Home" button below to return to the Home page. <br/>
        Error Code: {errorCode}</Typography>
        <IconButton className="PathNotFoundScreenBox_Button PathNotFoundScreenBox_Button_SendReport" onClick={handleSendReportClicked}>SEND ERROR REPORT</IconButton>
        <IconButton className="PathNotFoundScreenBox_Button PathNotFoundScreenBox_Button_ReturnHome" onClick={handleReturnHomeClicked}>RETURN HOME</IconButton>
    </Box>
    </>
  );
}

export default PathNotFoundScreen;