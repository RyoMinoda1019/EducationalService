import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { StudentListDomain } from "../../../Models/Domain/StudentListDomain";
import { SxT } from "../../../Utils/CssProps";
import { Palette } from "../../../Utils/Palette";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, getRoute } from "../../../Utils/Routes";

export type StudentListContentsProps = {
    studentList: StudentListDomain,
}

const StudentListContents = ({ props }: { props: StudentListContentsProps }) => {
    const { studentList } = props;
    const [ activeStudent, setActiveStudent ] = useState<string | null>(null);
    const navigate = useNavigate();
    const columnLabels = studentList.Columns.map(x => x.label);
    const tableData: string[][] = studentList.Students.map(x => {
        return x.getTableRow(columnLabels);
    });
    const tableRowSx: SxT = {
        cursor: "default"
    }
    const getCellColor = (rowCount: number): SxT => {
        const studenId = studentList.Students[rowCount].Id;
        return {
            bgcolor: studenId === activeStudent ? Palette.BabyBlue : Palette.White,
        }
    }
    const updateActiveStudentListItem = (rowCount: number) => {
        var student = studentList.Students[rowCount];
        if (activeStudent === student.Id) {
            navigate(getRoute(Routes.MemberStudent, student.Id));
        } else {
            setActiveStudent(student.Id);
        }
    }

    return (
        <Box>
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
                                <TableRow key={i} onClick={() => updateActiveStudentListItem(i)} sx={tableRowSx}>
                                    {row.map((cell, ii) => {
                                        return (
                                            <TableCell key={ii} align="center" sx={{ ...getCellColor(i) }}>
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
        </Box>
    )
}

export default StudentListContents;