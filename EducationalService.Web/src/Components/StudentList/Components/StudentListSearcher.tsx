import { Box } from "@mui/material";
import { SxT } from "../../../Utils/CssProps";
import { useContext } from "react";

export type StudentListSearcherProps = {
    height: number;
    width: number;
}

const StudentListSearcher = ({ props }: { props: StudentListSearcherProps }) => {
    const { height, width } = props;
    const outerSxT: SxT = {
        width, height
    }
    return (
        <Box sx={outerSxT}>

        </Box>
    );
}

export default StudentListSearcher;