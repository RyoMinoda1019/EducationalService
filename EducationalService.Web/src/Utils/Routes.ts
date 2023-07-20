import { LanguageFlexible } from "./Language";

export const Routes = {
    GuestHome: "/",
    GuestLogIn: "/login",
    GuestSignUp: "/signup",
    MemberDashboard: "/dashboard",
    MemberTeacher: "/teachers",
    MemberStudentList: "/students",
    MemberClassList: "/classes",
    MemberStudent: "/students/:id",
    MemberSchedule: "/schedules",
    MemberSetting: "/setting",
}

export const getRoute = (route: string, id: string) => {
    return route.replace(":id", id);
}

export const getRouteText = (language: string, route: string): string => {
    var text: LanguageFlexible = new LanguageFlexible("", "");
    switch (route) {
        case Routes.MemberDashboard:
            text = new LanguageFlexible("Dashboard", "ダッシュボード");
            break;
        case Routes.MemberSchedule:
            text = new LanguageFlexible("Schedule", "スケジュール");
            break;
        case Routes.MemberStudent:
            text = new LanguageFlexible("Detail", "詳細");
            break;
        case Routes.MemberStudentList:
            text = new LanguageFlexible("Student", "生徒一覧");
            break;
        case Routes.MemberTeacher:
            text = new LanguageFlexible("Teacher", "先生一覧")
            break;
        case Routes.MemberClassList:
            text = new LanguageFlexible("Class", "クラス一覧");
            break;
    }
    if (text === undefined || text === null) {
        return "";
    }
    return text?.getText(language);
}