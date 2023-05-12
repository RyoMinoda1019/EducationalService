import { useContext } from "react";
import { SideMenuWidthContext } from "../../Context/SideMenuWidthContext";
import { Box, Stack } from "@mui/material";
import { SxT } from "../../Utils/CssProps";

export type SideMenuProps = {
    height: number;
}

export const SideMenu = ({ props }: { props: SideMenuProps }) => {
    const { height } = props;
    const { sideMenuWidth, setSideMenuWidth } = useContext(SideMenuWidthContext);
    const outerBoxSx: SxT = {
        width: sideMenuWidth,
        height,
        bgcolor: "red",
    }
    return (
        <Box sx={outerBoxSx}>
        </Box>
    );
}