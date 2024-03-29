import { Box, Stack, Typography } from "@mui/material";
import { MainLayout, MainLayoutProps } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { FontSize } from "../../Utils/Font";
import { LogInForm, LogInFormProps } from "../../Components/Form/LogInForm";
import { SxT, centerProps } from "../../Utils/CssProps";
import { useWindowSize } from "../../Utils/WindowSize";
import { AccountFormHeadline, AccountFormHeadlineProps } from "../../Components/Headline/AccountFormHeadline";
import { Routes } from "../../Utils/Routes";

const LogInPage = (): React.ReactElement => {
    const { windowHeight, windowWidth } = useWindowSize();
    const width = 500;
    const formHeight = 430;
    const titleHeight = 70;
    const layoutProps: MainLayoutProps = {
        layoutType: MainLayoutType.Guest,
        currentPath: Routes.GuestLogIn,
        breadcrumbPaths: null
    }
    const stackSx: SxT = {
        width: windowWidth,
        height: formHeight + titleHeight,
        ...centerProps,
    }
    const headlineProps: AccountFormHeadlineProps = {
        height: titleHeight,
        width,
    }
    const formProps: LogInFormProps = {
        width, height: formHeight
    }
    return (
        <MainLayout props={layoutProps}>
            <Stack direction="column" sx={stackSx}>
                <AccountFormHeadline props={headlineProps}>
                    Sign In
                </AccountFormHeadline>
                <LogInForm props={formProps} />
            </Stack>
        </MainLayout>
    );
}

export default LogInPage;