import { LayoutInnerContents } from "../Types/LayoutInnerContents";
import { MainLayoutType } from "./Consts/MainLayoutType";
import { GuestMainLayout } from "./Components/GuestMainLayout";
import { MemberMainLayout } from "./Components/MemberMainLayout";

export type MainLayoutProps = {
    layoutType: string;
    currentPath: string;
    breadcrumbPaths: string[] | null;
}

export const MainLayout = ({ props, children }: { props: MainLayoutProps, children: LayoutInnerContents }) => {
    const { layoutType } = props;
    switch (layoutType) {
        case MainLayoutType.Guest:
            return <GuestMainLayout props={props}>{children}</GuestMainLayout>;
        case MainLayoutType.Member:
            return <MemberMainLayout props={props}>{children}</MemberMainLayout>;
        default:
            return <></>;
    }
}

