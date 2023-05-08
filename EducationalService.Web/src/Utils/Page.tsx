import GuestHomePage from "../Pages/Guest/GuestHomePage";
import LogInPage from "../Pages/Guest/LogInPage";
import SignUpPage from "../Pages/Guest/SignUpPage";
import MemberHomePage from "../Pages/Member/MemberHomePage";
import GuestErrorPage from "../Pages/Util/GuestErrorPage";

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
            new Page("/", GuestHomePage()),
            new Page("/login", LogInPage()),
            new Page("/signup", SignUpPage()),
            new Page("/home", MemberHomePage())
        ];
    }
}

export default Page;