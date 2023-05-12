import { Box, Stack, SxProps, Theme, Typography } from "@mui/material"
import { FontSize } from "../../../Utils/Font"
import { useState } from "react";
import { SxT, centerProps } from "../../../Utils/CssProps";
import { useWindowSize } from "../../../Utils/WindowSize";
import { Palette } from "../../../Utils/Palette";
import { IconTitle } from "../Types/IconTitle";
import { TopMenuIcon, TopMenuIconProps } from "./TopMenuIcon";
import { Routes } from "../../../Utils/Routes";
import { TopMenuProps } from "..";

export type TopMenuLayoutProps = {
    menuHeight: number;
    iconWidth: number;
    logoWidth: number;
    iconTitles: IconTitle[];
}

export const TopMenuLayout = ({ props }: { props: TopMenuLayoutProps }) => {
    const { menuHeight, iconWidth, logoWidth, iconTitles } = props
    const { windowWidth, windowHeight } = useWindowSize();
    const [ height, setHeight ] = useState(menuHeight);
    const topMenuSx: SxProps<Theme> = {
        overflow: "hidden",
    }
    const logoSx: SxT = {
        width: 120,
        height,
        ...centerProps
    }
    const marginSx: SxT = {
        width: windowWidth - logoWidth - 2 * iconWidth - 10,
        height,
    }
    return (
        <Box height={height} bgcolor={Palette.MidnightBlue} sx={topMenuSx}>
            <Stack direction="row">
                <Box sx={logoSx}>
                    <Typography color={Palette.White} fontWeight={800} fontSize={FontSize.large}>
                        Educ
                    </Typography>
                </Box>
                <Box sx={marginSx}></Box>
                {iconTitles.map((x) => {
                    const iconProps: TopMenuIconProps = {
                        width: iconWidth,
                        height,
                        ...x,
                    }
                    return <TopMenuIcon props={iconProps} />;
                })}
            </Stack>
        </Box>
    )
}

