import { SxProps, Theme } from "@mui/material";
import { Palette } from "./Palette";

export type SxT = SxProps<Theme>

export const transitionProps: SxT = {
    transition: "1s"
}

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

export const centerRightProps: SxT = {
    display: "flex",
    justifyContent: "end",
    alignItems: "center"
}
export const centerLeftProps: SxT = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center"
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

export const transparentButtonProps: SxT = {
    bgcolor: "transparent",
    '&:hover': {
        bgcolor: "transparent",
    },
}

export const getNoReactionButtonProps= (color: string): SxT  => {
    return {
        bgcolor: color,
        '&:hover': {
            bgcolor: color,
        },
    }
}

export const commonButtonProps: SxT = {
    padding: 0,
    margin: 0,
    minWidth: 0,
    minHeight: 0,
    textTransform: "none",
}