import { Box, Stack, SxProps, Theme, Typography } from "@mui/material"
import { FontSize } from "../../Utils/Font"
import { useState } from "react";
import { LaptopMainLayoutStructure } from "../../Layout/MainLayout/Consts/LaptopMainLayoutStructure";
import { SxT, centerProps } from "../../Utils/CssProps";
import { useWindowSize } from "../../Utils/WindowSize";
import { Palette } from "../../Utils/Palette";
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';

export type TopMenuProps = {
    menuHeight: number;
    iconWidth: number;
    logoWidth: number;
}

export const TopMenu = ({ props }: { props: TopMenuProps }) => {
    const { menuHeight, iconWidth, logoWidth } = props
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
    const signInSx: SxT = {
        width: iconWidth,
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
        height: height / 3,
        width: height / 2.8,
        color: Palette.White
    }
    const iconTitleSx: SxT = {
        height: height  / 3,
        width: iconWidth,
        color: Palette.White,
        fontSize: FontSize.tiny,
        ...centerProps
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
    )
}