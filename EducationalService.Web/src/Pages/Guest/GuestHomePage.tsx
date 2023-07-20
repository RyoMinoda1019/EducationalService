import { MainLayout, MainLayoutProps } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { Routes } from "../../Utils/Routes";

const GuestHomePage = (): React.ReactElement => {
    const layoutProps: MainLayoutProps = {
        layoutType: MainLayoutType.Guest,
        currentPath: Routes.GuestHome,
        breadcrumbPaths: null
    }
    return (
        <MainLayout props={layoutProps}>
            Hello
        </MainLayout>
    );
}

export default GuestHomePage;