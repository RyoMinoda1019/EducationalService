import { useState } from "react";
import { ClassroomListContext } from "../../Context/ClassroomListContext";
import { MainLayout, MainLayoutProps } from "../../Layout/MainLayout";
import { MainLayoutType } from "../../Layout/MainLayout/Consts/MainLayoutType";
import { Routes } from "../../Utils/Routes";
import { ClassroomDomain } from "../../Models/Domain/ClassroomDomain";

const MemberClassPage = () => {
    const layoutProps: MainLayoutProps ={
        layoutType: MainLayoutType.Member,
        currentPath: Routes.MemberClassList,
        breadcrumbPaths: [
            Routes.MemberClassList
        ],
    }
    return (
        <MainLayout props={layoutProps}>
            <></>
        </MainLayout>
    );
}

export default MemberClassPage;
