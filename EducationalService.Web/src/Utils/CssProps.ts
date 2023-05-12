import { SxProps, Theme } from "@mui/material";
import { Palette } from "./Palette";

export type SxT = SxProps<Theme>

export const centerProps: SxT = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export const topCenterProps: SxT = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start"
}

export const linkNoBorderProps: React.CSSProperties = {
    border: "none",
    textDecoration: "none"
}

export const blueButtonProps: SxT = {
    bgcolor: Palette.Blue,
    color: Palette.White,
    '&:hover': {
        bgcolor: Palette.BabyBlue,
        color: Palette.White,
    },
}