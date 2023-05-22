import { useContext } from "react";
import { SideMenuWidthContext } from "../../Context/SideMenuWidthContext";
import { MainLayout } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { MainLayoutProps } from "../../Layout/MainLayout/Types/MainLayoutProps";
import { Stack } from "@mui/material";
import StudentList from "../../Components/StudentList/StudentList";
import { SxT, centerProps } from "../../Utils/CssProps";

const MemberStudentPage = () => {
    const layoutProps: MainLayoutProps ={
        layoutType: MainLayoutType.Member
    }
    const outerStackSx: SxT = {
        ...centerProps
    }
    return (
        <MainLayout props={layoutProps}>
            <Stack direction="column" sx={outerStackSx}>
                <StudentList />
            </Stack>
        </MainLayout>
    );
}

export default MemberStudentPage;