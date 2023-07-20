import { Routes } from "../../Utils/Routes";
import { TopMenuType } from "./Consts/TopMenuType";
import { TopMenuLayout } from "./Components/TopMenuLayout";
import { IconTitle } from "./Types/IconTitle";
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';

export type TopMenuProps = {
    menuHeight: number;
    iconWidth: number;
    logoWidth: number;
    type: string;
}

export const TopMenu = ({ props }: { props: TopMenuProps }) => {
    const { type } = props;
    var iconTitles: IconTitle[] = [];
    switch (type) {
        case TopMenuType.Guest:
            iconTitles = [
                { title: "Log In", jumpTo: Routes.GuestLogIn, Icon: LoginIcon },
                { title: "Sign Up", jumpTo: Routes.GuestSignUp, Icon: AddIcon },  
            ];
            break;
        case TopMenuType.Member:
            break;
    }
    return <TopMenuLayout props={{ ...props, iconTitles }} />
}