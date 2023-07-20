import { TeacherDomain } from "./TeacherDomain";

export class ClassroomDomain {
    Id: string;
    Name: string;
    Students: string[];
    Manager: TeacherDomain;
    SubManagers: TeacherDomain[];

    constructor(id: string, name: string, students: string[], manager: TeacherDomain, subManagers: TeacherDomain[]) {
        this.Id = id;
        this.Name = name;
        this.Students = students;
        this.Manager = manager;
        this.SubManagers = subManagers;
    }
}