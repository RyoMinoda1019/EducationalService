import { createContext } from "react";
import { StudentListDomain, defaultStudentListDomain } from "../Models/Domain/StudentList";

export type StudentListState = {
    studentList: StudentListDomain
}

export const defaultStudentListState: StudentListState = {
    studentList: defaultStudentListDomain
};


export const SideMenuWidthContext = createContext(defaultStudentListState);