import { createContext } from "react";
import { StudentListDomain, defaultStudentListDomain } from "../Models/Domain/StudentListDomain";

export type StudentListState = {
    studentList: StudentListDomain,
    setStudentList: React.Dispatch<React.SetStateAction<StudentListDomain>>;
}

export const defaultStudentListState: StudentListState = {
    studentList: defaultStudentListDomain,
    setStudentList: () => {}
};


export const StudentListContext = createContext(defaultStudentListState);