import { Dispatch, createContext } from "react";
import { SideMenuType } from "../Components/SideMenu/Consts/SideMenuType";


type SideMenuWidthState = {
    sideMenuWidth: number;
    setSideMenuWidth: React.Dispatch<React.SetStateAction<number>>;
}

const defaultSideMenu: SideMenuWidthState = {
    sideMenuWidth: SideMenuType.None,
    setSideMenuWidth: () => {}
}

export const SideMenuWidthContext = createContext(defaultSideMenu);
