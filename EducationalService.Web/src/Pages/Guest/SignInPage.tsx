import { MainLayout } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Enum/MainLayoutType";
import { MainLayoutProps } from "../../Layout/MainLayout/Types/MainLayoutProps";

const SignInPage = (): React.ReactElement => {
    const layoutProps: MainLayoutProps = {
        layoutType: MainLayoutType.Guest
    }
    return <MainLayout props={layoutProps}>Sign In</MainLayout>;
}

export default SignInPage;