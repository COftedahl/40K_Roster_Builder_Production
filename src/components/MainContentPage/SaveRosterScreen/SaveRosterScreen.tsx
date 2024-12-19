import { Box, Divider, FormControl, IconButton, Input, InputLabel, Typography } from "@mui/material";
import './SaveRosterScreen.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface SaveRosterScreenProps {
  saveRosterFunction: ({rosterOwner, rosterName} : {rosterOwner: string, rosterName: string}) => Promise<boolean>;
  downloadRosterFunction: ({rosterOwner, rosterName} : {rosterOwner: string, rosterName: string}) => Promise<boolean>;
}

const SaveRosterScreen: React.FC<SaveRosterScreenProps> = ({saveRosterFunction, downloadRosterFunction}) => {

  const navigate = useNavigate();

  const [rosterOwner, setRosterOwner] = useState<string>("");
  const [rosterName, setRosterName] = useState<string>("");
  const [hasSavedRoster, setHasSavedRoster] = useState<boolean>(false);
  const [saveRosterButtonText, setSaveRosterButtonText] = useState<string>("SAVE");

  const handleBackButtonClicked: React.MouseEventHandler = (event: React.MouseEvent) => {
    navigate("/");
  };

  const handleSaveButtonClicked: React.MouseEventHandler = async (event: React.MouseEvent) => {
    setHasSavedRoster(true);
    setSaveRosterButtonText("SAVING");
    try {
      const result = await saveRosterFunction({ rosterName: rosterName, rosterOwner: rosterOwner });
    
      if (result == true) {
        setHasSavedRoster(true);
        setSaveRosterButtonText("ROSTER SAVED");
      }
      else {
        setHasSavedRoster(false);
        setSaveRosterButtonText("RETRY SAVE");
      }
    }
    catch (e) {
      setHasSavedRoster(false);
      setSaveRosterButtonText("RETRY SAVE");
    }
  };
  
  const handleDownloadButtonClicked: React.MouseEventHandler = (event: React.MouseEvent) => {
    try {
      const result = downloadRosterFunction({ rosterName: rosterName, rosterOwner: rosterOwner });
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  };

  const handleRosterNameChange: React.ChangeEventHandler = (event: any) => {
    try {
      setRosterName(event.target.value);
    }
    catch (e) {
      console.error(e);
    }
  };

  const handleRosterOwnerChange: React.ChangeEventHandler = (event: any) => {
    try {
      setRosterOwner(event.target.value);
    }
    catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Box className="SaveRosterScreenBox">
        <Typography variant="h6" className="SaveRosterScreenBox_Header">Roster Information</Typography>
        <Divider className="SaveRosterScreenBox_Divider"/>
        {(((rosterOwner === undefined || rosterOwner.length <= 0 || rosterName === undefined || rosterName.length <= 0))) && 
          <Typography className="SaveRosterScreenBox_Header_Request">You must fill out these fields before saving or downloading</Typography>
        }
        <Box className="SaveRosterScreenBox_ContentBox">
          <FormControl className="SaveRosterScreenBox_FormInput">
            <InputLabel disableAnimation>Roster Name</InputLabel>
            <Input value={rosterName} onChange={handleRosterNameChange}>
            </Input>
          </FormControl>
          <FormControl className="SaveRosterScreenBox_FormInput">
            <InputLabel disableAnimation>Your Name</InputLabel>
            <Input value={rosterOwner} onChange={handleRosterOwnerChange}>
            </Input>
          </FormControl>
          <Divider className="SaveRosterScreenBox_Divider"/>
          {/* <Typography variant="h6" className="SaveRosterScreenBox_Header">Save Roster</Typography> */}
          <IconButton className="SaveRosterScreenBox_Button SaveRosterScreenBox_Button_Save" 
            onClick={handleSaveButtonClicked} 
            disabled={(((rosterOwner === undefined || rosterOwner.length <= 0 || rosterName === undefined || rosterName.length <= 0)) || hasSavedRoster)}
          >
            {saveRosterButtonText}
            </IconButton>
          <Typography className="SaveRosterScreenBox_DescriptionText">Saves roster to a database so it is available on this app later</Typography>
          <Divider className="SaveRosterScreenBox_Divider"/>
          <IconButton className="SaveRosterScreenBox_Button SaveRosterScreenBox_Button_Download" 
            onClick={handleDownloadButtonClicked} 
            disabled={(!(rosterOwner !== undefined && rosterOwner.length > 0 && rosterName !== undefined && rosterName.length > 0)) && !hasSavedRoster}
          >
            DOWNLOAD
          </IconButton>
          <Typography className="SaveRosterScreenBox_DescriptionText SaveRosterScreenBox_DescriptionText_Download">Downloads the roster as a pdf onto your local machine</Typography>
          <IconButton className="SaveRosterScreenBox_Button SaveRosterScreenBox_Button_Back" onClick={handleBackButtonClicked}>BACK</IconButton>
        </Box>
      </Box>
    </>
  );
}

export default SaveRosterScreen;