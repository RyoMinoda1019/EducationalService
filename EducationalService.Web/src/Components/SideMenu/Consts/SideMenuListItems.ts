
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import TableChartIcon from '@mui/icons-material/TableChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Routes } from "../../../Utils/Routes";
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export type SideMenuListItem = {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    title: string;
    jumpTo: string;
}

export const SideMenuListItems: SideMenuListItem[] = [
    { title: "Home", Icon: HomeIcon, jumpTo: Routes.MemberHome },
    { title: "Teacher", Icon: GroupsIcon, jumpTo: Routes.MemberTeacher },
    { title: "Student", Icon: SchoolIcon, jumpTo: Routes.MemberStudent },
    { title: "Schedule", Icon: TableChartIcon, jumpTo: Routes.MemberSchedule },
    { title: "Setting", Icon: SettingsIcon, jumpTo: Routes.MemberSetting },
];