import { useContext } from "react";
import { SideMenuWidthContext } from "../../Context/SideMenuWidthContext";
import { useWindowSize } from "../../Utils/WindowSize";
import { Box } from "@mui/material";
import { SxT } from "../../Utils/CssProps";
import { PageSideMargin } from "../../Utils/CssConsts";

const StudentList = () => {
    const { sideMenuWidth, setSideMenuWidth } = useContext(SideMenuWidthContext);
    const { windowWidth } = useWindowSize();
    const outerSx: SxT = {
        width: windowWidth - sideMenuWidth - PageSideMargin,
        height: 400,
        bgcolor: "red"
    }
    return <Box sx={outerSx}></Box>;
}

export default StudentList;