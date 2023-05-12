import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FontSize } from "../../Utils/Font";
import { SxT, blueButtonProps, centerProps, linkNoBorderProps } from "../../Utils/CssProps";
import { Palette } from "../../Utils/Palette";
import { Link } from "react-router-dom";
import { FormLayout, FormLayoutProps } from "./FormLayout";

export type LogInFormProps = {
    width: number;
    height: number;
}

export const LogInForm = ({ props }: { props: LogInFormProps }) => {
    const { width, height } = props;
    const contentHeight = height - 80;
    const rowHeight = contentHeight / 4.5;
    const stackSx: SxT = {
        height: contentHeight,
        width: width,
        ...centerProps
    }
    const titleWidth = 120;
    const idFormLayoutProps: FormLayoutProps = {
        title: "ID",
        entireWidth: width,
        titleWidth,
        height: rowHeight,
    }
    const textFieldSx: SxT = {
        height: rowHeight,
        width: (width - titleWidth) * 0.8,
        margin: 0,
        padding: 0,
        fontSize: FontSize.middle,
        ...centerProps
    }
    const buttonsStackSx: SxT = {
        height: rowHeight * 2,
        width,
        ...centerProps
    }
    const buttonSx: SxT = {
        height: rowHeight / 1.3,
        width: width * 0.7,
        ...centerProps
    }
    const loginButtonSx: SxT = {
        height: 40,
        maxHeight: rowHeight / 2,
        width: 180,
        maxWidth: width * 0.5,
        textTransform: 'none',
        color: Palette.White,
        fontSize: FontSize.middle,
        ...blueButtonProps
    }
    return (
        <Stack direction="column" sx={stackSx}>
            <FormLayout props={idFormLayoutProps}>
                <TextField fullWidth sx={textFieldSx} id="id" size="small" />
            </FormLayout>
            <FormLayout props={{ ...idFormLayoutProps, title: "Password" }}>
                <TextField fullWidth  sx={textFieldSx} id="password" size="small" />
            </FormLayout>
            <Stack direction="column" sx={buttonsStackSx}>
                <Box sx={buttonSx}>
                    <Button sx={loginButtonSx}>
                        Log In
                    </Button>
                </Box>
                <Box sx={buttonSx}>
                    <Link to={"/"} style={linkNoBorderProps}>
                        <Typography fontSize={FontSize.middleSmall}>
                            Forget Password?
                        </Typography>
                    </Link>
                </Box>
            </Stack>
        </Stack>
    );
}