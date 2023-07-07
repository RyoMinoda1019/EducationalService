import { useContext, useState } from "react";
import { SideMenuWidthContext } from "../../Context/SideMenuWidthContext";
import { MainLayout } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { MainLayoutProps } from "../../Layout/MainLayout/Types/MainLayoutProps";
import { Stack } from "@mui/material";
import { SxT, centerProps } from "../../Utils/CssProps";
import { StudentList } from "../../Components/StudentList/StudentList";
import { useWindowSize } from "../../Utils/WindowSize";
import { StudentListContext } from "../../Context/StudentListContext";
import { StudentListDomain, StudentListItemDomain } from "../../Models/Domain/StudentListDomain";
import { studentListMock } from "../../Models/Mock/StudentListMock";
import { ListColumnDomain } from "../../Models/Domain/ListColumnDomain";

const MemberStudentPage = () => {
    const defaultStudentList: StudentListDomain = studentListMock;
    const defaultStudentListColumns: ListColumnDomain[] = ListColumnDomain.defaultStudentListColumns;
    const [ studentList, setStudentList ] = useState(defaultStudentList);
    const [ studentListColumns, setStudentListColumns ] = useState(defaultStudentListColumns); 
    const layoutProps: MainLayoutProps ={
        layoutType: MainLayoutType.Member
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

export default MemberStudentPage;