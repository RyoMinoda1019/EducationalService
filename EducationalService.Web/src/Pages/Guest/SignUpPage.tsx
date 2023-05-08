import { MainLayout } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { MainLayoutProps } from "../../Layout/MainLayout/Types/MainLayoutProps";

const SignUpPage = (): React.ReactElement => {
    const layoutProps: MainLayoutProps = {
        layoutType: MainLayoutType.Guest
    }
    return <MainLayout props={layoutProps}>Sign Up</MainLayout>;
}

export default SignUpPage;