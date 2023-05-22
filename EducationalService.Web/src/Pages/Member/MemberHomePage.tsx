import { MainLayout } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { MainLayoutProps } from "../../Layout/MainLayout/Types/MainLayoutProps";

const MemberHomePage = (): React.ReactElement => {
    const layoutProps: MainLayoutProps ={
        layoutType: MainLayoutType.Member
    }
    return (
        <MainLayout props={layoutProps}>
            <></>
        </MainLayout>
    );
}

export default MemberHomePage;
