import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import { LayoutInnerContents } from "./Types/LayoutInnerContents";
import { useState } from "react";
import { LaptopMainLayoutStructure } from "./Const/LaptopMainLayoutStructure";
import { MainLayoutProps } from "./Types/MainLayoutProps";
import { Palette } from "../../Utils/Palette";

export const GuestMainLayout = ({ props, children }: { props: MainLayoutProps, children: LayoutInnerContents }) => {
    const { LaptopHeight } = LaptopMainLayoutStructure;
    const [ height, setHeight ] = useState(LaptopHeight);

    const logoSx: SxProps<Theme> = {
        width: 100,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <Stack direction="column">
            <Box height={height} bgcolor={Palette.MidnightBlue}>
                <Box sx={logoSx}>
                    <Typography color={Palette.White} fontWeight={800}>
                        Educ
                    </Typography>
                </Box>
                <Box>
                    
                </Box>
            </Box>
            <Box>
                {children}
            </Box>
        </Stack>
    );
}
