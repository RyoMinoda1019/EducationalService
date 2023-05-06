import { MainLayoutType } from "./Enum/MainLayoutType";
import { GuestMainLayout } from "./GuestLayout";
import { LayoutInnerContents } from "./Types/LayoutInnerContents";
import { MainLayoutProps } from "./Types/MainLayoutProps";

export const MainLayout = ({ props, children }: { props: MainLayoutProps, children: LayoutInnerContents }) => {
    const { layoutType } = props;

    switch (layoutType) {
        case MainLayoutType.Guest:
            return <GuestMainLayout props={props}>{children}</GuestMainLayout>;
        default:
            return <></>;
    }
}

