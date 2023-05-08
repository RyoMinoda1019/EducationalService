import { Box, Stack } from "@mui/material";

import { LayoutInnerContents } from "../Types/LayoutInnerContents";
import { MainLayoutProps } from "./Types/MainLayoutProps";
import { Palette } from "../../Utils/Palette";
import { SxT } from "../../Utils/CssProps";
import { TopMenu, TopMenuProps } from "../../Components/TopMenu";
import { LaptopMainLayoutStructure } from "./Consts/LaptopMainLayoutStructure";
import { useState } from "react";
import { useWindowSize } from "../../Utils/WindowSize";
import { Footer } from "../../Components/Footer";
import { FooterProps } from "../../Components/Footer/Types/FooterProps";
import { FooterType } from "../../Components/Footer/Consts/FooterType";

export const GuestMainLayout = ({ props, children }: { props: MainLayoutProps, children: LayoutInnerContents }) => {
    const { LaptopTopMenuHeight, LogoWidth, IconWidth, LaptopFooterHeight } = LaptopMainLayoutStructure;
    const { windowHeight, windowWidth } = useWindowSize();
    const [ topMenuHeight, setTopMenuHeight ] = useState(LaptopTopMenuHeight);
    
    const exteriorSx: SxT = {
        overflow: "hidden",
    }
    const scrollerSx: SxT = {
        overflowY: "auto",
        height: windowHeight - topMenuHeight
    }
    const contentSx: SxT = {
        bgcolor: Palette.White,
        minHeight: windowHeight - LaptopFooterHeight - topMenuHeight,
    }
    const topMenuProps: TopMenuProps = {
        menuHeight: topMenuHeight,
        iconWidth: IconWidth,
        logoWidth: LogoWidth
    }
    const footerProps: FooterProps = {
        footerHeight: LaptopFooterHeight,
        type: FooterType.Guest
    }
    return (
        <Stack direction="column" sx={exteriorSx}>
            <TopMenu props={topMenuProps} />
            <Stack direction="column" sx={scrollerSx}>
                <Box sx={contentSx}>
                    {children}
                </Box>
                <Footer props={footerProps} />
            </Stack>
        </Stack>
    );
}
