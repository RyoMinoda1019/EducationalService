import { Stack } from "@mui/material";
import { LanguageFlexible } from "../../Utils/Language";
import DashboardHeading from "./Components/DashboardHeading"
import { SxT } from "../../Utils/CssProps";
import MyClassSummary, { MyClassSummaryProps } from "./Components/MyClassSummary";
import { ClassroomDomain } from "../../Models/Domain/ClassroomDomain";
import { ClassroomListDomain } from "../../Models/Domain/ClassroomListDomain";

export type DashboardProps = {
    classrooms: ClassroomListDomain[],
}

const Dashboard = ({ props }: { props: DashboardProps }) => {
    const { classrooms } = props;
    const padding = 5;
    const outerSx: SxT = {
        paddingLeft: 2,
        paddingRight: 2
    }
    const classSummaryProps: MyClassSummaryProps = {
        classrooms,
        padding,
    }
    return (
        <Stack sx={outerSx}>
            <DashboardHeading>{new LanguageFlexible("My Class", "マイ クラス")}</DashboardHeading>
                <MyClassSummary props={classSummaryProps} />
            <DashboardHeading>{new LanguageFlexible("Attendance", "出席管理")}</DashboardHeading>
        </Stack>
    );
}

export default Dashboard;