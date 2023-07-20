import GuestErrorPage from "../Pages/Guest/GuestErrorPage";
import GuestHomePage from "../Pages/Guest/GuestHomePage";
import LogInPage from "../Pages/Guest/LogInPage";
import SignUpPage from "../Pages/Guest/SignUpPage";
import MemberClassPage from "../Pages/Member/MemberClassPage";
import MemberDashboardPage from "../Pages/Member/MemberDashboardPage";
import MemberHomePage from "../Pages/Member/MemberDashboardPage";
import MemberSchedulePage from "../Pages/Member/MemberSchedulePage";
import MemberStudentListPage from "../Pages/Member/MemberStudentListPage";
import MemberStudentPage from "../Pages/Member/MemberStudentPage";
import MemberTeacherPage from "../Pages/Member/MemberTeacherPage";
import SettingPage from "../Pages/Member/SettingPage";
import { Routes } from "./Routes";

class Page {
    Path: string = "";
    Component: React.ReactElement = <></>;
    Error: React.ReactElement = GuestErrorPage();

    constructor(path: string, component: React.ReactElement) {
        this.Path = path;
        this.Component = component;
    }

    static All(): Array<Page> {
        return [
            new Page(Routes.GuestHome, GuestHomePage()),
            new Page(Routes.GuestLogIn, LogInPage()),
            new Page(Routes.GuestSignUp, SignUpPage()),
            new Page(Routes.MemberDashboard, MemberDashboardPage()),
            new Page(Routes.MemberTeacher, MemberTeacherPage()),
            new Page(Routes.MemberStudentList, MemberStudentListPage()),
            new Page(Routes.MemberClassList, MemberClassPage()),
            new Page(Routes.MemberStudent, MemberStudentPage()),
            new Page(Routes.MemberSchedule, MemberSchedulePage()),
            new Page(Routes.MemberSetting, SettingPage()),
        ];
    }
}

export default Page;
