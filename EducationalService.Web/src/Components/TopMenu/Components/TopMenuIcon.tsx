import { Box, Stack, SvgIconTypeMap } from "@mui/material";
import { SxT, centerProps, topCenterProps } from "../../../Utils/CssProps";
import { FontSize } from "../../../Utils/Font";
import { Palette } from "../../../Utils/Palette";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type TopMenuIconProps = {
    width: number,
    height: number,
    Icon:  OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    },
    title: string,
    jumpTo: string,
}

export const TopMenuIcon = ({ props }: { props: TopMenuIconProps }) => {
    const { width, height, Icon, title } = props;
    const boxSx: SxT = {
        width,
        height,
        ...centerProps,
    }
    const iconStackSx: SxT = {
        width,
        height,
        ...centerProps,
    }
    const iconSx: SxT = {
        height: height / 2,
        width: height / 2.8,
        color: Palette.White
    }
    const iconTitleSx: SxT = {
        height: height / 3,
        width: width,
        color: Palette.White,
        fontSize: FontSize.tiny,
        ...topCenterProps
    }
    return (
        <Box sx={boxSx}>
            <Stack direction="column" sx={iconStackSx}>
                <Icon sx={iconSx} />
                <Box sx={iconTitleSx}>
                    {title}
                </Box>
            </Stack>
        </Box>
    );
}