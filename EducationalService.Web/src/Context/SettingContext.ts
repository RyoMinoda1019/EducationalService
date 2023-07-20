import { createContext } from "react";
import { StudentListDomain, defaultStudentListDomain } from "../Models/Domain/StudentListDomain";
import { SettingDomain } from "../Models/Domain/SettingDomain";

export type SettingState = {
    setting: SettingDomain,
    setSetting: React.Dispatch<React.SetStateAction<SettingDomain>>;
}

export const defaultSettingState: SettingState = {
    setting: SettingDomain.default,
    setSetting: () => {}
};


export const SettingContext = createContext(defaultSettingState);