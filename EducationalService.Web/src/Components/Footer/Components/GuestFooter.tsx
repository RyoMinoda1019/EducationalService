import { Stack } from "@mui/material";
import { FooterProps } from "../Types/FooterProps";
import { SxT } from "../../../Utils/CssProps";
import { Palette } from "../../../Utils/Palette";
import { FooterRow } from "./FooterRow";
import { FooterRowProps } from "./Types/FooterRowProsp";
import { Linker } from "../../../Utils/Linker";
import { useWindowSize } from "../../../Utils/WindowSize";
import { Routes } from "../../../Utils/Routes";

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
        items: [
            { text: "Home", jumpTo: Routes.GuestHome },
            { text: "Log In", jumpTo: Routes.GuestLogIn },
            { text: "Sign Up", jumpTo: Routes.GuestSignUp },
        ],
        width: (windowWidth - sidePadding * 8) / rowCount,
        height: (windowWidth - tbPadding * 8)
    }
    const footerRow2: FooterRowProps = {
        ...footerRow1,
        items: [
            { text: "Dashboard", jumpTo: Routes.MemberDashboard },
        ],
    }
    return (
        <Stack direction="row" sx={exteriorSx}>
            <FooterRow props={footerRow1} />
            <FooterRow props={footerRow2} />
        </Stack>
    );
}