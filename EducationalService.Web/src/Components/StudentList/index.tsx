import { useContext, useEffect, useState } from "react";
import { SideMenuWidthContext } from "../../Context/SideMenuWidthContext";
import { useWindowSize } from "../../Utils/WindowSize";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { SxT, centerProps } from "../../Utils/CssProps";
import { PageSideMargin } from "../../Utils/CssConsts";
import { StudentListContext } from "../../Context/StudentListContext";
import StudentListSearcher, { StudentListSearcherProps } from "./Components/StudentListSearcher";
import { useLocation } from "react-router-dom";
import { getSearchConditionFromQuery } from "./Functions/getSearchConditionFromQuery";
import StudentListPager, { StudentListPagerProps } from "./Components/StudentListPager";
import { StudentListItemDomain } from "../../Models/Domain/StudentListDomain";
import { Palette } from "../../Utils/Palette";
import StudentListContents, { StudentListContentsProps } from "./Components/StudentListContents";


export const StudentList = () => {
    const { sideMenuWidth, setSideMenuWidth } = useContext(SideMenuWidthContext);
    const { studentList, setStudentList } = useContext(StudentListContext);
    const { search } = useLocation();
    const searchCondition = getSearchConditionFromQuery(search);
    const [ futurePage, setFuturePage ] = useState(1);
    const { windowWidth } = useWindowSize();
    const outerWidth = windowWidth - sideMenuWidth - PageSideMargin;
    const outerSx: SxT = {
        width: outerWidth
    }
    const searcherProps: StudentListSearcherProps = {
        height: 140,
        width: outerWidth,
    }
    const contentsProps: StudentListContentsProps = {
        studentList,
    }
    const pagerProps: StudentListPagerProps = {
        updatePage: (p: number) => { setFuturePage(p); },
        totalPage: studentList.SearchResultMeta.TotalPage,
        currentPage: studentList.SearchResultMeta.Page,
    }
    useEffect(() => {

    }, [futurePage])

    return (
        <Box sx={outerSx}>
            <StudentListSearcher props={searcherProps} />
            <StudentListContents props={contentsProps} />
            <StudentListPager props={pagerProps} />
        </Box>
    );
}
