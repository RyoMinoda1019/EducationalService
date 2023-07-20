import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { SxT, centerLeftProps, centerProps } from "../../../Utils/CssProps";
import { Palette } from "../../../Utils/Palette";
import { Routes, getRoute, getRouteText } from "../../../Utils/Routes";
import { Language, LanguageFlexible } from "../../../Utils/Language";
import { useNavigate } from "react-router-dom";
import { FontSize } from "../../../Utils/Font";

export type MainLayoutBreadcrumbProps = {
    height: number,
    breadcrumbPaths: string[] | null
}

const MainLayoutBreadcrumb = ({ props }: { props: MainLayoutBreadcrumbProps }) => {
    const { height, breadcrumbPaths } = props;
    const navigate = useNavigate();
    const outerSx: SxT = {
        height,
        paddingLeft: 3,
        bgcolor: Palette.PaleBabyBlue,
        ...centerLeftProps
    }
    const linkSx: SxT = {
        cursor: "pointer"
    }
    const onClickLink = (path: string) => {
        navigate(getRoute(Routes.MemberStudent, ""));
    }
    return (
        <Box sx={outerSx}>
            <Breadcrumbs aria-label="breadcrumb">
                {breadcrumbPaths?.map((x, i) => {
                    if (i < breadcrumbPaths.length - 1) {
                        return (
                            <Link underline="hover" color="inherit" onClick={() => onClickLink(x)} sx={linkSx} fontSize={FontSize.middleSmall}>
                                {getRouteText(Language.English, x)}
                            </Link>
                        );
                    }
                    return (
                        <Typography color="text.primary" fontSize={FontSize.middleSmall}>{getRouteText(Language.English, x)}</Typography>
                    );
                })}
                
            </Breadcrumbs>
        </Box>
    );
}

export default MainLayoutBreadcrumb;