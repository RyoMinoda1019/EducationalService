import { Stack, Typography, Box, TextField } from "@mui/material";
import { LayoutInnerContents } from "../../Layout/Types/LayoutInnerContents";
import { SxT, centerProps } from "../../Utils/CssProps";
import { FontSize } from "../../Utils/Font";

export type FormLayoutProps = {
    title: string,
    height: number,
    entireWidth: number
    titleWidth: number,
}

export const FormLayout = ({ props, children }: { props: FormLayoutProps, children: LayoutInnerContents }) => {
    const { title, entireWidth, titleWidth, height } = props;
    const stackSx: SxT = {
        height: height,
        width: entireWidth,
        ...centerProps
    }
    const titleSx: SxT = {
        fontSize: FontSize.middle,
        height: height,
        width: titleWidth,
        ...centerProps
    }
    const contentSx: SxT = {
        height: height,
        width: entireWidth - titleWidth,
        ...centerProps
    }
    return (
        <Stack direction="row" sx={stackSx}>
            <Typography sx={titleSx}>
                {title}
            </Typography>
            <Box sx={contentSx}>
                {children}
            </Box>
        </Stack>
    );
}