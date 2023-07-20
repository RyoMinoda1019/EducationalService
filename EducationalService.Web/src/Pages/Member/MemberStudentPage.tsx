import { Stack } from "@mui/material";
import { MainLayout, MainLayoutProps } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { Routes } from "../../Utils/Routes";

const MemberStudentPage = () => {
    const layoutProps: MainLayoutProps ={
        layoutType: MainLayoutType.Member,
        currentPath: Routes.MemberStudentList,
        breadcrumbPaths: [
            Routes.MemberStudentList, Routes.MemberStudent
        ]
    }
    return (
        <MainLayout props={layoutProps}>

        </MainLayout>
    );
}

export default MemberStudentPage;