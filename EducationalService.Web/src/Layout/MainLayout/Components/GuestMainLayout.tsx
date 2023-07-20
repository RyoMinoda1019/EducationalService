import { Stack, Box } from "@mui/material";
import { useState } from "react";
import { Footer } from "../../../Components/Footer";
import { FooterType } from "../../../Components/Footer/Consts/FooterType";
import { FooterProps } from "../../../Components/Footer/Types/FooterProps";
import { TopMenuProps, TopMenu } from "../../../Components/TopMenu";
import { TopMenuType } from "../../../Components/TopMenu/Consts/TopMenuType";
import { SxT } from "../../../Utils/CssProps";
import { useWindowSize } from "../../../Utils/WindowSize";
import { LayoutInnerContents } from "../../Types/LayoutInnerContents";
import { LaptopMainLayoutStructure } from "../Consts/LaptopMainLayoutStructure";
import { Palette } from "../../../Utils/Palette";
import { MainLayoutProps } from "..";

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
        logoWidth: LogoWidth,
        type: TopMenuType.Guest
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

