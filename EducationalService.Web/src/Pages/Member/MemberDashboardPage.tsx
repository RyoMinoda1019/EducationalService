import { useEffect, useState } from "react";
import Dashboard, { DashboardProps } from "../../Components/Dashboard";
import { SettingContext } from "../../Context/SettingContext";
import { MainLayout, MainLayoutProps } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { Routes } from "../../Utils/Routes";
import { ClassroomDomain } from "../../Models/Domain/ClassroomDomain";
import { ClassroomListContext } from "../../Context/ClassroomListContext";
import { ClassroomListDomain } from "../../Models/Domain/ClassroomListDomain";
import { defaultHomeClassroomList } from "../../Models/Mock/ClassroomListMock";

const MemberDashboardPage = (): React.ReactElement => {
    const layoutProps: MainLayoutProps ={
        layoutType: MainLayoutType.Member,
        currentPath: Routes.MemberDashboard,
        breadcrumbPaths: [
            Routes.MemberDashboard
        ],
    }
    const [ classrooms, setClassrooms ] = useState<ClassroomListDomain[]>([]);
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        if (!loading) return;
        setClassrooms(defaultHomeClassroomList);
        setLoading(false);
    }, [loading]);
    const dashboardProps: DashboardProps = {
        classrooms,
    }
    return (
        <MainLayout props={layoutProps}>
            <ClassroomListContext.Provider value={{ classrooms, setClassrooms }}>
                <Dashboard props={dashboardProps} />
            </ClassroomListContext.Provider>
        </MainLayout>
    );
}

export default MemberDashboardPage;
