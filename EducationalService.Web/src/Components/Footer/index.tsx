import { FooterType } from "./Consts/FooterType";
import { GuestFooter } from "./GuestFooter";
import { FooterProps } from "./Types/FooterProps";

export const Footer = ({ props }: { props: FooterProps }) => {
    const { type } = props;
    switch (type) {
        case FooterType.Guest:
            return <GuestFooter props={props} />
    }
    return <></>;
}