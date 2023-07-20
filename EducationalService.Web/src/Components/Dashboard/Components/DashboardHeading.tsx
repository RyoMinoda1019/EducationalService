import { Box, Typography } from "@mui/material";
import { Language, LanguageFlexible } from "../../../Utils/Language";
import { useContext } from "react";
import { SettingContext } from "../../../Context/SettingContext";
import { FontSize } from "../../../Utils/Font";
import { SxT, centerLeftProps } from "../../../Utils/CssProps";
import { Palette } from "../../../Utils/Palette";

const DashboardHeading = ({ children }: { children: LanguageFlexible }) => {
    const { setting } = useContext(SettingContext);
    const outerSx: SxT = {
        height: 45,
        paddingLeft: 2,
        paddingTop: 1,
        color: Palette.DarkBlue,
        ...centerLeftProps,
    }
    return (
        <Box sx={outerSx}>
            <Typography fontSize={FontSize.middle + setting.Zoom}>
                {children.getText(setting.Language)}
            </Typography>
        </Box>
    );
}

export default DashboardHeading;