import { useContext, useState } from "react";
import { SideMenuWidthContext } from "../../Context/SideMenuWidthContext";
import { useWindowSize } from "../../Utils/WindowSize";
import { Box, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { SxT, centerProps } from "../../Utils/CssProps";
import { PageSideMargin } from "../../Utils/CssConsts";
import { StudentListContext } from "../../Context/StudentListContext";
import StudentListSearcher, { StudentListSearcherProps } from "./Components/StudentListSearcher";
import { useLocation } from "react-router-dom";
import { getSearchConditionFromQuery } from "./Functions/getSearchConditionFromQuery";
import StudentListPager, { StudentListPagerProps } from "./Components/StudentListPager";


export const StudentList = () => {
    const { sideMenuWidth, setSideMenuWidth } = useContext(SideMenuWidthContext);
    const { studentList, setStudentList } = useContext(StudentListContext);
    const { search } = useLocation();
    const searchCondition = getSearchConditionFromQuery(search);
    const [ page, setPage ] = useState(0);
    const [ currentStudents, setCurrentStudents ] = useState(studentList.Students);
    const { windowWidth } = useWindowSize();
    const outerWidth = windowWidth - sideMenuWidth - PageSideMargin;
    const outerSx: SxT = {
        width: outerWidth
    }
    const searcherProps: StudentListSearcherProps = {
        height: 100,
        width: outerWidth,
    }
    const pagerProps: StudentListPagerProps = {
        updatePage: () => { console.log(); },

    }
    const updatePage = (num: number) => {
        setPage(num);
    }
    const columnLabels = studentList.Columns.map(x => x.label);
    const tableData: string[][] = studentList.Students.map(x => {
        return x.getTableRow(columnLabels);
    });
    return (
        <Box sx={outerSx}>
            <StudentListSearcher props={searcherProps} />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {studentList.Columns.map((x, i) => {
                                return (
                                    <TableCell key={i} align="center" width={x.width}>
                                        <TableSortLabel>
                                            {x.label}
                                        </TableSortLabel>
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row, i) => {
                            return (
                                <TableRow key={i}>
                                    {row.map((cell, ii) => {
                                        return (
                                            <TableCell key={ii} align="center">
                                                {cell}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <StudentListPager props={pagerProps} />
        </Box>
    );
}
