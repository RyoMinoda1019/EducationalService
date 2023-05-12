import { Stack, TextField, Typography } from "@mui/material";
import { SxT, centerProps } from "../../Utils/CssProps";
import { FormLayout, FormLayoutProps } from "./FormLayout";

export type SignUpFormProps = {

}

export const SignUpForm = ({ props }: { props: SignUpFormProps }) => {
    const rowHeight = 80;
    const width = 600;
    const titleWidth = 150;
    const formLayoutProps: FormLayoutProps = {
        title: "ID",
        height: rowHeight,
        entireWidth: width,
        titleWidth,
    }
    const textFieldSx: SxT = {
        width: (width - titleWidth) * 0.8,
        height: rowHeight * 0.6,
    }
    return (
        <Stack direction="column">
            <FormLayout props={formLayoutProps}>
                <TextField size="small" fullWidth sx={textFieldSx} />
            </FormLayout>
        </Stack>
    );
}