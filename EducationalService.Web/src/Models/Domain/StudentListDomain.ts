import { ListColumnDomain } from "./ListColumnDomain";
import { SearchConditionDomain } from "./SearchConditionDomain";
import { SearchResultMeta } from "./SearchResultMeta";

export type StudentListDomain = {
    Students: StudentListItemDomain[],
    SearchResultMeta: SearchResultMeta,
    Columns: ListColumnDomain[],
    SearchCondition: SearchConditionDomain,
}

export const defaultStudentListDomain: StudentListDomain = {
    Students: [],
    SearchResultMeta: SearchResultMeta.defaultData,
    Columns: [],
    SearchCondition: SearchConditionDomain.defaultSearchCondition,
}

export class StudentListItemDomain {
    Id: string;
    Name: string;
    No: string;
    Index: number;
    Classroom: string;
    EnteredAt: Date | null;
    GraduatedAt: Date | null;
    Note: string;
    CustomizeColumn: object;


    constructor(id: string, name: string, no: string, 
        note: string, index: number, classroom: string,
        enteredAt: Date | null, graduatedAt: Date | null
    ) {
        this.Id = id;
        this.Name = name;
        this.No = no;
        this.Note = note;
        this.Index = index;
        this.Classroom = classroom;
        this.EnteredAt = enteredAt;
        this.GraduatedAt = graduatedAt;
        this.CustomizeColumn = { "picturePath": "" };
    }

    getValue(variant: string) : string {
        const json: any = this.toJson();
        const targetVariant = variant.replaceAll(" ", "");
        const candidate1 = json[targetVariant];
        if (candidate1 !== undefined) return candidate1;
        const customized = json["CustomizeColumn"];
        const candidate2 = customized[variant];
        if (candidate2 !== undefined) return candidate2;
        throw new Error("Variant:" + variant + " is Undefined");
    }

    getTableRow(variants: string[]): string[] {
        var tableRow = [] as string[];
        variants.forEach(x => {
            var value = this.getValue(x);
            if (typeof value === "object") {
                if (new Date(value) !== undefined) {
                    const date = new Date(value);
                    tableRow.push(date.toDateString());
                }
            } else {
                tableRow.push(value);
            }
        });
        return tableRow;
    }
    toJson(): object {
        return {
            "Id": this.Id,
            "Name": this.Name,
            "No": this.No,
            "Index": this.Index,
            "Classroom": this.Classroom,
            "Note": this.Note,
            "EnteredAt": this.EnteredAt,
            "GraduatedAt": this.GraduatedAt,
            "CustomizeColumn": this.CustomizeColumn
        }
    }
}