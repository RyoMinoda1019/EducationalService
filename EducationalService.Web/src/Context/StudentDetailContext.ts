import { createContext } from "react";
import { StudentListDomain, defaultStudentListDomain } from "../Models/Domain/StudentListDomain";

export type StudentDetailState = {
    student: StudentListDomain,
    setStudent: React.Dispatch<React.SetStateAction<StudentListDomain>>;
}

export const defaultStudentDetailState: StudentDetailState = {
    student: defaultStudentListDomain,
    setStudent: () => {}
};


export const StudentDetailContext = createContext(defaultStudentDetailState);