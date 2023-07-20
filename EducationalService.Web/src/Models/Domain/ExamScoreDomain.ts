import { StudentDomain } from "./StudentDomain";

export class ExamScoreDomain {
    Id: string;
    ExamId: string;
    Score: number;
    Student: StudentDomain;
    CreatedAt: Date | null;

    constructor(id: string, examId: string, score: number, student: StudentDomain, createdAt: Date | null) {
        this.Id = id;
        this.ExamId = examId;
        this.Score = score;
        this.Student = student;
        this.CreatedAt = createdAt;
    }
}