import { MainLayout } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { MainLayoutProps } from "../../Layout/MainLayout/Types/MainLayoutProps";

const GuestHomePage = (): React.ReactElement => {
    const layoutProps: MainLayoutProps = {
        layoutType: MainLayoutType.Guest,
        sideMenuWidth: null
    }
    return (
        <MainLayout props={layoutProps}>
            Hello
        </MainLayout>
    );
}

export default GuestHomePage;