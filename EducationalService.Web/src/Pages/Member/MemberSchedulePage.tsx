import { MainLayout, MainLayoutProps } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { Routes } from "../../Utils/Routes";

const MemberSchedulePage = () => {
    const layoutProps: MainLayoutProps ={
        layoutType: MainLayoutType.Member,
        currentPath: Routes.MemberSchedule,
        breadcrumbPaths: [
            Routes.MemberSchedule
        ],
    }
    return (
        <MainLayout props={layoutProps}>
            <></>
        </MainLayout>
    );
}

export default MemberSchedulePage;