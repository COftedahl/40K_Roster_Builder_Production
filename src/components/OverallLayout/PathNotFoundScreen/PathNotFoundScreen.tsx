import { Box, Divider, FormControl, IconButton, Input, InputLabel, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";
import './PathNotFoundScreen.css';
import axios from "axios";
import { server_url } from "../../UtilityComponents/Environment Variables/Environment Variables";
import { useEffect, useState } from "react";

interface PathNotFoundScreenProps {

}

const PathNotFoundScreen: React.FC<PathNotFoundScreenProps> = () => {

  const [sentEmail, setSentEmail] = useState<boolean>(false);
  const [sendEmailButtonText, setSendEmailButtonText] = useState<string>("SEND ERROR REPORT")
  const [errorNotes, setErrorNotes] = useState<string>("");

  const error: any = useRouteError();
  const errorCode: number = (error && error.status ? error.status : -1);
  useEffect(() => {
    console.error(error);
  }, []);
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

  const handleSendReportClicked = async () => {
    setSentEmail(true);
    setSendEmailButtonText("SENDING REPORT");
    try {
      const formatter = new Intl.DateTimeFormat('en', {year: 'numeric', month: 'long', day: '2-digit', hourCycle: 'h24', hour: '2-digit', minute: '2-digit', second: '2-digit'});

      const response = await axios.post(server_url + "/email/senderrorreport", {
        emailContents: 
          "Error in 40K Web Roster Builder\n" + 
          "Occurred at " + formatter.format() + "\n" +
          "Occured from user: " + navigator.userAgent + "\n" +
          "Error Code: " + errorCode + "\n" + 
          "Error Message: " + JSON.stringify(error) + "\n" + 
          "User's Notes: " + errorNotes
      });
  
      if (response.status !== 200) {
        setSentEmail(false);
        setSendEmailButtonText("RETRY SENDING REPORT");
        console.error("Error when sending email: ", response.data);
      }
      else {
        setSentEmail(true);
        setSendEmailButtonText("EMAIL SENT");
        console.log(response.data);
      }
    }
    catch (e) {
      setSentEmail(false);
      setSendEmailButtonText("RETRY SENDING REPORT");
      console.error("Error when sending email: ", e);
    }
  }

  const handleReturnHomeClicked = () => {
    navigate("/");
  }

  const handleErrorNotesChange: React.ChangeEventHandler = (event: any) => {
    try {
      setErrorNotes(event.target.value);
    }
    catch (e) {
      console.error(e);
    }
  };

  return (
    <>
    <Box className="PathNotFoundScreenBox">
      <Typography variant="h6">{getErrorHeaderText(errorCode)}</Typography>
      <Divider className="PathNotFoundScreenBox_Divider"/>
      <Box className="PathNotFoundScreenBox_ContentBox">
        <Typography>Oops! Looks like you found a bug! <br/>
          {getErrorBodyText(errorCode)}
          If you think this should be looked at, click the "Send Error Report" button below. Any notes you wish to add to the error report may be entered in the textbox below. <br/>
          You can use the sidebar to navigate back as usual, or use the "Return Home" button below to return to the Home page. <br/>
          Error Code: {errorCode}
        </Typography>
        <FormControl className="PathNotFoundScreenBox_FormInput">
          <InputLabel disableAnimation>Error Notes</InputLabel>
          <Input value={errorNotes} onChange={handleErrorNotesChange} multiline>
          </Input>
        </FormControl>
        <IconButton className={"PathNotFoundScreenBox_Button PathNotFoundScreenBox_Button_SendReport" + (sentEmail ? " PathNotFoundScreenBox_Button_disabled" : "")} 
          disabled={sentEmail ? true : false} 
          onClick={handleSendReportClicked}>
            {sendEmailButtonText}
        </IconButton>
        <IconButton className="PathNotFoundScreenBox_Button PathNotFoundScreenBox_Button_ReturnHome" onClick={handleReturnHomeClicked}>RETURN HOME</IconButton>
      </Box>
    </Box>
    </>
  );
}

export default PathNotFoundScreen;