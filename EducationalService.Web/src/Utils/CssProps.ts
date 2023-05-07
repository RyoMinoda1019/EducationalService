import { SxProps, Theme } from "@mui/material";

export type SxT = SxProps<Theme>

export const centerProps: SxT = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}