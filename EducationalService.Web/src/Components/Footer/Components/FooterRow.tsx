import { Box, Stack, Typography } from "@mui/material";
import { FooterRowProps } from "./Types/FooterRowProsp";
import { SxT, centerProps, linkNoBorderProps } from "../../../Utils/CssProps";
import { FontSize } from "../../../Utils/Font";
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from "react-router-dom";

export const FooterRow = ({ props }: { props: FooterRowProps }) => {
    const { items, width } = props;
    const stackSx: SxT = {
        width, 
    }
    const listItemSx: SxT = {
        width,
    }
    const iconOuterSx: SxT = {
        width: 20,
        ...centerProps
    }
    const pointIconSx: SxT = {
        width: 3,
        height: 3
    }
    return (
        <Stack direction="column" sx={stackSx}>
            {items.map((x, i) => {
                return (
                    <Box sx={listItemSx} key={i}>
                        <Stack direction="row">
                            <Box sx={iconOuterSx}>
                                <CircleIcon sx={pointIconSx} />
                            </Box>
                            <Link to={x.jumpTo} style={linkNoBorderProps}>
                                <Typography fontSize={FontSize.small}>
                                    {x.text}
                                </Typography>
                            </Link>
                        </Stack>
                    </Box>
                );
            })}
        </Stack>
    );
}