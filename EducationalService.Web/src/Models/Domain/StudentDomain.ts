import { ExamScoreDomain } from "./ExamScoreDomain";
import { StudentDescriptionDomain } from "./StudentDescriptionDomain";
import { StudentListItemDomain } from "./StudentListDomain";


export class StudentDomain extends StudentListItemDomain {
    ExamScores: ExamScoreDomain[];
    Descriptions: StudentDescriptionDomain[];

    constructor(
        id: string, name: string, no: string, 
        note: string, index: number, classroom: string,
        enteredAt: Date | null, removedAt: Date | null,
        examScores: ExamScoreDomain[], descriptions: StudentDescriptionDomain[],
    ) {
        super(id, name, no, note, index, classroom, enteredAt, removedAt);
        this.ExamScores = examScores;
        this.Descriptions = descriptions;
    }
}