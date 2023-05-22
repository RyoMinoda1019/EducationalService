import { useContext } from "react";
import { SideMenuWidthContext } from "../../Context/SideMenuWidthContext";
import { Box, Button, Stack } from "@mui/material";
import { SxT, blueButtonProps, centerLeftProps, centerProps, centerRightProps, commonButtonProps, getNoReactionButtonProps, linkNoBorderProps, transitionProps, transparentButtonProps } from "../../Utils/CssProps";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { SideMenuType } from "./Consts/SideMenuType";
import { Palette } from "../../Utils/Palette";
import { SideMenuItem, SideMenuItemProps } from "./Components/SideMenuItem";
import { SideMenuListItems } from "./Consts/SideMenuListItems";

export type SideMenuProps = {
    height: number;
}

export const SideMenu = ({ props }: { props: SideMenuProps }) => {
    const { height } = props;
    const { sideMenuWidth, setSideMenuWidth } = useContext(SideMenuWidthContext);

    const outerBoxSx: SxT = {
        width: sideMenuWidth,
        height,
        overflow: "hidden",
        bgcolor: Palette.Blue,
        ...transitionProps
    }
    const adjusterLayer: SxT = {
        width: sideMenuWidth,
        height: 15,
        overflow: "hidden",
        ...{
            ...transitionProps,
            ...centerRightProps
        } as SxT
    }
    const leftIconDisplay: string = sideMenuWidth === SideMenuType.Icon ? "none" : "";
    const rightIconDisplay: string = sideMenuWidth === SideMenuType.IconTitle ? "none" : "";
    const adjusterIconButton: SxT = {
        width: 15,
        height: 15,
        ...{ 
            ...transparentButtonProps, 
            ...commonButtonProps 
        } as SxT
    }
    const adjusterButton: SxT  = {
        height: 10,
        width: 10,
        color: Palette.White,
    }
    const onClickLeftIcon = () => {
        const newWidth = sideMenuWidth === SideMenuType.IconTitle ? SideMenuType.Icon : SideMenuType.None;
        setSideMenuWidth(newWidth);
    }
    const onClickRightIcon = () => {
        const newWidth = sideMenuWidth === SideMenuType.None ? SideMenuType.Icon : SideMenuType.IconTitle;
        setSideMenuWidth(newWidth);
    };

    return (
        <Box sx={outerBoxSx}>
            <Stack direction="column">
                <Stack direction="row" sx={adjusterLayer}>
                    <Button sx={{ ...adjusterIconButton, display: leftIconDisplay }} onClick={onClickLeftIcon}>
                        <ArrowBackIosNewIcon sx={adjusterButton} />
                    </Button>
                    <Button sx={{ ...adjusterIconButton, display: rightIconDisplay}} onClick={onClickRightIcon}>
                        <ArrowForwardIosIcon sx={adjusterButton} />
                    </Button>
                </Stack>
                {SideMenuListItems.map((x, i) => {
                    const itemProps: SideMenuItemProps = {
                        sideMenuWidth,
                        sideMenuListItem: x,
                    }
                    return <SideMenuItem key={i} props={itemProps} />
                })}
            </Stack>
        </Box>
    );
}