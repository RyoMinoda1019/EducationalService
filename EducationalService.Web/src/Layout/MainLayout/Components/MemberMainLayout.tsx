import { Stack, Box } from "@mui/material";
import { TopMenu, TopMenuProps } from "../../../Components/TopMenu";
import { LayoutInnerContents } from "../../Types/LayoutInnerContents";
import { useContext, useState } from "react";
import { TopMenuType } from "../../../Components/TopMenu/Consts/TopMenuType";
import { SxT, transitionProps } from "../../../Utils/CssProps";
import { useWindowSize } from "../../../Utils/WindowSize";
import { LaptopMainLayoutStructure } from "../Consts/LaptopMainLayoutStructure";
import { Palette } from "../../../Utils/Palette";
import { SideMenu, SideMenuProps } from "../../../Components/SideMenu";
import { SideMenuWidthContext } from "../../../Context/SideMenuWidthContext";
import { MainLayoutProps } from "..";
import MainLayoutBreadcrumb, { MainLayoutBreadcrumbProps } from "./MainLayoutBreadcrumb";

export const MemberMainLayout = ({ props, children }: { props: MainLayoutProps, children: LayoutInnerContents }) => {
    const { LaptopTopMenuHeight, LogoWidth, IconWidth } = LaptopMainLayoutStructure;
    const { currentPath, breadcrumbPaths } = props;
    const { sideMenuWidth } = useContext(SideMenuWidthContext);
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
        bgcolor: Palette.PaleBabyBlue,
        minHeight: windowHeight - topMenuHeight,
        width: windowWidth - sideMenuWidth,
        overflow: "auto"
    }
    const topMenuProps: TopMenuProps = {
        menuHeight: topMenuHeight,
        iconWidth: IconWidth,
        logoWidth: LogoWidth,
        type: TopMenuType.Member
    }
    const sideMenuProps: SideMenuProps = {
        height: windowHeight - topMenuHeight,
        currentPath: currentPath,
    }
    const breadcrumbProps: MainLayoutBreadcrumbProps = {
        height: 50,
        breadcrumbPaths,
    }
    return (
        <Stack direction="column" sx={exteriorSx}>
            <TopMenu props={topMenuProps} />
            <Stack direction="row" sx={scrollerSx}>
                <SideMenu props={sideMenuProps} />
                <Box sx={contentSx}>
                    <MainLayoutBreadcrumb props={breadcrumbProps} />
                    {children}
                </Box>
            </Stack>
        </Stack>
    );
}