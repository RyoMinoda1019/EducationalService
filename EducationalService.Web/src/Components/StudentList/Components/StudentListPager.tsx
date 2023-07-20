import { Box, Pagination } from "@mui/material";
import { SxT, centerProps } from "../../../Utils/CssProps";
import { Palette } from "../../../Utils/Palette";

export type StudentListPagerProps = {
    updatePage: (page: number) => void,
    totalPage: number,
    currentPage: number,
}

const StudentListPager = ({ props }: { props: StudentListPagerProps }) => {
    const { updatePage, totalPage, currentPage } = props;
    const mainSx: SxT = {
        height: 100,
        ...centerProps,
    }
    const bottomSx: SxT = {
        height: 50,
    }
    const pageSx: SxT = {
        color: Palette.DarkBlue
    }
    return (
        <Box>
            <Box sx={mainSx}>
                <Pagination 
                    count={totalPage} 
                    page={currentPage} 
                    size="large" 
                    sx={pageSx}
                    color="primary"
                    onChange={ (_: React.ChangeEvent<unknown>, value: number) => updatePage(value) } />
            </Box>
            <Box sx={bottomSx}></Box>
        </Box>
    );
}

export default StudentListPager;
