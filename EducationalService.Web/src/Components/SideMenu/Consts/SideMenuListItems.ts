
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import TableChartIcon from '@mui/icons-material/TableChart';
import SettingsIcon from '@mui/icons-material/Settings';
import ClassIcon from '@mui/icons-material/Class';
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
    { title: "Dashboard", Icon: HomeIcon, jumpTo: Routes.MemberDashboard },
    { title: "Teacher", Icon: GroupsIcon, jumpTo: Routes.MemberTeacher },
    { title: "Student", Icon: SchoolIcon, jumpTo: Routes.MemberStudentList },
    { title: "Classroom", Icon: ClassIcon, jumpTo: Routes.MemberClassList },
    { title: "Schedule", Icon: TableChartIcon, jumpTo: Routes.MemberSchedule },
    { title: "Setting", Icon: SettingsIcon, jumpTo: Routes.MemberSetting },
];