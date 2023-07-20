import { Box, Button, Stack, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SxT, centerLeftProps, centerProps, commonButtonProps, getNoReactionButtonProps, linkNoBorderProps, transitionProps } from "../../../Utils/CssProps";
import { SideMenuType } from "../Consts/SideMenuType";
import { Palette } from "../../../Utils/Palette";
import { FontSize } from "../../../Utils/Font";
import { Link, useLocation } from "react-router-dom";
import { SideMenuListItem } from "../Consts/SideMenuListItems";

export type SideMenuItemProps = {
    sideMenuListItem: SideMenuListItem,
    sideMenuWidth: number,
    currentPath: string
}

export const SideMenuItem = ({ props }: { props: SideMenuItemProps }) => {
    const { sideMenuListItem, sideMenuWidth, currentPath } = props;
    const { jumpTo, Icon, title } = sideMenuListItem;
    const bgcolor = currentPath !== jumpTo ? "transparent" : Palette.PaleBabyBlue;
    const color = currentPath !== jumpTo ? Palette.White : Palette.DarkBlue;
    const menuIconOuterSx: SxT = {
        width: SideMenuType.Icon,
        height: SideMenuType.Icon * 0.7,
        overflow: "hidden",
        ...{
            ...centerProps,
            ...transitionProps,
        } as SxT,
    }
    const menuIconButtonSx: SxT = {
        width: sideMenuWidth,
        height: SideMenuType.Icon,
        overflow: "hidden",
        borderRadius: 0,
        ...{
            ...centerLeftProps,
            ...transitionProps,
            ...commonButtonProps,
            ...getNoReactionButtonProps(bgcolor),
        } as SxT,
    }
    const menuIconSx: SxT = {
        color,
        width: SideMenuType.Icon,
        height: SideMenuType.Icon * 0.4,
    }
    const menuTitle: SxT = {
        color,
        width: SideMenuType.IconTitle - SideMenuType.Icon,
        height: SideMenuType.Icon * 0.7,
        paddingRight: 1.0,
        fontSize: FontSize.middleSmall,
        ...{
            ...centerLeftProps,
            ...transitionProps,
        } as SxT,
    }
    return (
        <Link to={jumpTo} style={linkNoBorderProps}>
            <Button sx={menuIconButtonSx}>
                <Stack direction="row">
                    <Box sx={menuIconOuterSx}>
                        <Icon sx={menuIconSx} />
                    </Box>
                    <Box sx={menuTitle}>
                        {title}
                    </Box>
                </Stack>
            </Button>
        </Link>
    );
};
