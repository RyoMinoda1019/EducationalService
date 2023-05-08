import { Stack } from "@mui/material";
import { FooterProps } from "./Types/FooterProps";
import { SxT } from "../../Utils/CssProps";
import { Palette } from "../../Utils/Palette";
import { FooterRow } from "./Molecules/FooterRow";
import { FooterRowProps } from "./Molecules/Types/FooterRowProsp";
import { Linker } from "../../Utils/Linker";
import { useWindowSize } from "../../Utils/WindowSize";

export const GuestFooter = ({ props }: { props: FooterProps }) => {
    const { footerHeight } = props;
    const { windowWidth } = useWindowSize();
    const sidePadding = 12;
    const tbPadding = 1;
    const exteriorSx: SxT = {
        height: footerHeight,
        bgcolor: Palette.PaleBabyBlue,
        paddingLeft: sidePadding,
        paddingRight: sidePadding,
        paddingTop: tbPadding,
        paddingBottom: tbPadding,
    }
    const rowCount = 3;
    const footerRow1: FooterRowProps = {
        subject: null,
        items: [
            { text: "Home", jumpTo: "/" },
            { text: "Log In", jumpTo: "/login" },
            { text: "Sign Up", jumpTo: "/signup" },
        ],
        width: (windowWidth - sidePadding * 8) / rowCount,
        height: (windowWidth - tbPadding * 8)
    }
    return (
        <Stack direction="row" sx={exteriorSx}>
            <FooterRow props={footerRow1} />
        </Stack>
    );
}