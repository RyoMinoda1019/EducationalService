import { useContext, useState } from "react";
import { SideMenuWidthContext } from "../../Context/SideMenuWidthContext";
import { MainLayout, MainLayoutProps } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { Stack } from "@mui/material";
import { SxT, centerProps } from "../../Utils/CssProps";
import { StudentList } from "../../Components/StudentList";
import { useWindowSize } from "../../Utils/WindowSize";
import { StudentListContext } from "../../Context/StudentListContext";
import { StudentListDomain, StudentListItemDomain } from "../../Models/Domain/StudentListDomain";
import { studentListMock } from "../../Models/Mock/StudentListMock";
import { FlexibleColumnDomain } from "../../Models/Domain/FlexibleColumnDomain";
import { Routes } from "../../Utils/Routes";

const MemberStudentListPage = () => {
    const defaultStudentList: StudentListDomain = studentListMock;
    const defaultStudentListColumns: FlexibleColumnDomain[] = FlexibleColumnDomain.defaultStudentListColumns;
    const [ studentList, setStudentList ] = useState(defaultStudentList);
    const [ studentListColumns, setStudentListColumns ] = useState(defaultStudentListColumns); 
    const layoutProps: MainLayoutProps ={
        layoutType: MainLayoutType.Member,
        currentPath: Routes.MemberStudentList,
        breadcrumbPaths: [
            Routes.MemberStudentList,
        ]
    }
    const listStackSx: SxT = {
        ...centerProps
    }
    return (
        <StudentListContext.Provider value={{ studentList, setStudentList }}>
            <MainLayout props={layoutProps}>
                <Stack direction="column" sx={listStackSx}>
                    <StudentList  />
                </Stack>
            </MainLayout>
        </StudentListContext.Provider>
    );
}

export default MemberStudentListPage;