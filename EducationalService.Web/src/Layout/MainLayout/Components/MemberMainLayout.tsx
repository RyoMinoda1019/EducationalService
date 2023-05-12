import { Stack, Box } from "@mui/material";
import { Footer } from "../../../Components/Footer";
import { TopMenu, TopMenuProps } from "../../../Components/TopMenu";
import { LayoutInnerContents } from "../../Types/LayoutInnerContents";
import { MainLayoutProps } from "../Types/MainLayoutProps";
import { useContext, useState } from "react";
import { FooterType } from "../../../Components/Footer/Consts/FooterType";
import { FooterProps } from "../../../Components/Footer/Types/FooterProps";
import { TopMenuType } from "../../../Components/TopMenu/Consts/TopMenuType";
import { SxT } from "../../../Utils/CssProps";
import { useWindowSize } from "../../../Utils/WindowSize";
import { LaptopMainLayoutStructure } from "../Consts/LaptopMainLayoutStructure";
import { Palette } from "../../../Utils/Palette";
import { SideMenu, SideMenuProps } from "../../../Components/SideMenu/SideMenu";

export const MemberMainLayout = ({ props, children }: { props: MainLayoutProps, children: LayoutInnerContents }) => {
    const { LaptopTopMenuHeight, LogoWidth, IconWidth } = LaptopMainLayoutStructure;
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
        minHeight: windowHeight - topMenuHeight,
    }
    const topMenuProps: TopMenuProps = {
        menuHeight: topMenuHeight,
        iconWidth: IconWidth,
        logoWidth: LogoWidth,
        type: TopMenuType.Member
    }
    const sideMenuProps: SideMenuProps = {
        height: windowHeight - topMenuHeight,
    }
    return (
        <Stack direction="column" sx={exteriorSx}>
            <TopMenu props={topMenuProps} />
            <Stack direction="row" sx={scrollerSx}>
                <SideMenu props={sideMenuProps} />
                <Box sx={contentSx}>
                    {children}
                </Box>
            </Stack>
        </Stack>
    );
}