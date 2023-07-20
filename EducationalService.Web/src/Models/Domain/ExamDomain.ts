import { TeacherDomain } from "./TeacherDomain";

export class ExamDomain {
    Id: string;
    Subject: string;
    Manager: TeacherDomain;
    SubTeachers: TeacherDomain[];
    TargetClassIds: string[];
    TakenAt: Date | null;
    CreatedAt: Date | null;

    constructor(
        id: string, 
        subject: string, 
        manager: TeacherDomain, 
        subTeachers: TeacherDomain[],
        targetClassIds: string[],
        takenAt: Date | null,
        createdAt: Date | null
    ) {
        this.Id = id;
        this.Subject = subject;
        this.Manager = manager;
        this.SubTeachers = subTeachers;
        this.TargetClassIds = targetClassIds;
        this.TakenAt = takenAt;
        this.CreatedAt = createdAt;
    }
}