import { createContext } from "react";
import { StudentListDomain, defaultStudentListDomain } from "../Models/Domain/StudentListDomain";
import { ClassroomDomain } from "../Models/Domain/ClassroomDomain";
import { ClassroomListDomain } from "../Models/Domain/ClassroomListDomain";

export type ClassroomListState = {
    classrooms: ClassroomListDomain[],
    setClassrooms: React.Dispatch<React.SetStateAction<ClassroomListDomain[]>>;
}

export const defaultClassroomListState: ClassroomListState = {
    classrooms: [],
    setClassrooms: () => {}
};

export const ClassroomListContext = createContext(defaultClassroomListState);