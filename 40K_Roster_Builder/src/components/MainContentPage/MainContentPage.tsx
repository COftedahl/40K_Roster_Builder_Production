import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import './MainContentPage.css';

interface MainContentPageProps {

}

const MainContentPage: React.FC<MainContentPageProps> = () => {

  return (
    <>
    <Box className="MainContentPageOuterContainer">
      <Box className="MainContentPageContainer">
        <Outlet/>
      </Box>
    </Box>
    </>
  );
}

export default MainContentPage;