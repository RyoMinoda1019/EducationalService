import { MainLayout, MainLayoutProps } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { Routes } from "../../Utils/Routes";

const MemberTeacherPage = (): React.ReactElement => {
    const layoutProps: MainLayoutProps ={
        layoutType: MainLayoutType.Member,
        currentPath: Routes.MemberTeacher,
        breadcrumbPaths: [
            Routes.MemberTeacher
        ]
    }
    return (
        <MainLayout props={layoutProps}>
            
        </MainLayout>
    );
}

export default MemberTeacherPage;