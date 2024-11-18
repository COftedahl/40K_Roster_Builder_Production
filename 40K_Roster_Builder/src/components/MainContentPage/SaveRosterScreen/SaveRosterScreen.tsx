import { Box, FormControl, IconButton, Input, InputLabel } from "@mui/material";
import './SaveRosterScreen.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { server_url } from "../../UtilityComponents/Environment Variables/Environment Variables";

interface SaveRosterScreenProps {
  saveRosterFunction: (rosterOwner: string, rosterName: string) => void;
}

const SaveRosterScreen: React.FC<SaveRosterScreenProps> = ({saveRosterFunction}) => {

  const navigate = useNavigate();

  const [rosterOwner, setRosterOwner] = useState<string>("");
  const [rosterName, setRosterName] = useState<string>("");

  const handleBackButtonClicked: React.MouseEventHandler = (event: React.MouseEvent) => {
    navigate("/");
  };

  const handleSaveButtonClicked: React.MouseEventHandler = (event: React.MouseEvent) => {
    saveRosterFunction(rosterOwner, rosterName);
  };

  const handleRosterNameChange: React.ChangeEventHandler = (event: React.ChangeEvent) => {
    try {
      setRosterName(event.target.value);
    }
    catch (e) {
      console.error(e);
    }
  };

  const handleRosterOwnerChange: React.ChangeEventHandler = (event: React.ChangeEvent) => {
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
        <IconButton className="SaveRosterScreenBox_Button SaveRosterScreenBox_Button_Back" onClick={handleBackButtonClicked}>BACK</IconButton>
        <IconButton className="SaveRosterScreenBox_Button SaveRosterScreenBox_Button_Save" onClick={handleSaveButtonClicked} disabled={!(rosterOwner !== undefined && rosterOwner.length > 0 && rosterName !== undefined) && rosterName.length > 0}>SAVE</IconButton>
      </Box>
    </>
  );
}

export default SaveRosterScreen;