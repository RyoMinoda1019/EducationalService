import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import { LayoutInnerContents } from "./Types/LayoutInnerContents";
import { useState } from "react";
import { LaptopMainLayoutStructure } from "./Const/LaptopMainLayoutStructure";
import { MainLayoutProps } from "./Types/MainLayoutProps";
import { Palette } from "../../Utils/Palette";
import { SxT, centerProps } from "../../Utils/CssProps";
import { FontSize } from "../../Utils/Font";
import { useWindowSize } from "../../Utils/WindowSize";

export const GuestMainLayout = ({ props, children }: { props: MainLayoutProps, children: LayoutInnerContents }) => {
    const { LaptopHeight, IconWidth, LogoWidth } = LaptopMainLayoutStructure;
    const { windowWidth, windowHeight } = useWindowSize();
    const [ height, setHeight ] = useState(LaptopHeight);
    const topMenuSx: SxProps<Theme> = {
        overflow: "hidden",
    }
    const logoSx: SxT = {
        width: 120,
        height,
        ...centerProps
    }
    const marginSx: SxT = {
        width: windowWidth - LogoWidth - 2 * IconWidth - 10,
        height,
    }
    const signInSx: SxT = {
        width: IconWidth,
        height,
        ...centerProps,
    }
    const signUpSx: SxT = {
        ...signInSx,
    }
    const iconStackSx: SxT = {
        ...signInSx,
    }
    const iconSx: SxT = {
        height: height / 2.23,
        width: height / 2.8,
        color: Palette.White
    }
    const iconTitleSx: SxT = {
        height: height  / 8,
        width: IconWidth,
        color: Palette.White,
        fontSize: FontSize.tiny,
        ...centerProps
    }
    const contentSx: SxT = {
        bgcolor: Palette.White,
    }
    return (
        <Stack direction="column">
            <Box height={height} bgcolor={Palette.MidnightBlue} sx={topMenuSx}>
                <Stack direction="row">
                    <Box sx={logoSx}>
                        <Typography color={Palette.White} fontWeight={800} fontSize={FontSize.large}>
                            Educ
                        </Typography>
                    </Box>
                    <Box sx={marginSx}></Box>
                    <Box sx={signInSx}>
                        <Stack direction="column" sx={iconStackSx}>
                            <LoginIcon sx={iconSx} />
                            <Box sx={iconTitleSx}>
                                Log In
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={signUpSx}>
                        <Stack direction="column" sx={iconStackSx}>
                            <AddIcon sx={iconSx} />
                            <Box sx={iconTitleSx}>
                                Sign Up
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <Box sx={contentSx}>
                {children}
            </Box>
        </Stack>
    );
}
