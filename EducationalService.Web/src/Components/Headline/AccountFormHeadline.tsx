import { Box, Typography } from "@mui/material";
import { LayoutInnerContents } from "../../Layout/Types/LayoutInnerContents";
import { FontSize } from "../../Utils/Font";
import { SxT, centerProps } from "../../Utils/CssProps";

export type AccountFormHeadlineProps = {
    height: number,
    width: number,
}

export const AccountFormHeadline = ({ props, children }: { props: AccountFormHeadlineProps, children: LayoutInnerContents }) => {
    const { height, width } = props;
    const titleSx: SxT = {
        width,
        height: height,
        fontSize: FontSize.large,
        ...centerProps
    }
    return (
        <Box sx={titleSx}>
            <Typography fontSize={FontSize.large}>
                {children}
            </Typography>
        </Box>
    );
}