import GuestHomePage from "../Pages/Guest/GuestHomePage";
import LogInPage from "../Pages/Guest/LogInPage";
import SignUpPage from "../Pages/Guest/SignUpPage";
import MemberHomePage from "../Pages/Member/MemberHomePage";
import MemberSchedulePage from "../Pages/Member/MemberSchedulePage";
import MemberStudentPage from "../Pages/Member/MemberStudentPage";
import MemberTeacherPage from "../Pages/Member/MemberTeacherPage";
import SettingPage from "../Pages/Member/SettingPage";
import GuestErrorPage from "../Pages/Util/GuestErrorPage";
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
            new Page(Routes.GuestLogin, LogInPage()),
            new Page(Routes.GuestSignup, SignUpPage()),
            new Page(Routes.MemberHome, MemberHomePage()),
            new Page(Routes.MemberTeacher, MemberTeacherPage()),
            new Page(Routes.MemberStudent, MemberStudentPage()),
            new Page(Routes.MemberSchedule, MemberSchedulePage()),
            new Page(Routes.MemberSetting, SettingPage()),
        ];
    }
}

export default Page;