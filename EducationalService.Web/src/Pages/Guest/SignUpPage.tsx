import { Stack } from "@mui/material";
import { MainLayout, MainLayoutProps } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { AccountFormHeadline, AccountFormHeadlineProps } from "../../Components/Headline/AccountFormHeadline";
import { useWindowSize } from "../../Utils/WindowSize";
import { SignUpForm, SignUpFormProps } from "../../Components/Form/SignUpForm";
import { SxT, centerProps } from "../../Utils/CssProps";
import { Routes } from "../../Utils/Routes";

const SignUpPage = (): React.ReactElement => {
    const { windowWidth } = useWindowSize();
    const layoutProps: MainLayoutProps = {
        layoutType: MainLayoutType.Guest,
        currentPath: Routes.GuestSignUp,
        breadcrumbPaths: null
    }
    const outerStack: SxT = {
        marginTop: 5,
        marginBottom: 5,
        width: windowWidth,
        ...centerProps,
    }
    const headlineProps: AccountFormHeadlineProps = {
        height: 80,
        width: windowWidth
    }
    const formProps: SignUpFormProps = {

    }
    return (
        <MainLayout props={layoutProps}>
            <Stack direction="column" sx={outerStack}>
                <AccountFormHeadline props={headlineProps}>
                    Sign Up
                </AccountFormHeadline>
                <SignUpForm props={formProps} />
            </Stack>
        </MainLayout>
    );
}

export default SignUpPage;