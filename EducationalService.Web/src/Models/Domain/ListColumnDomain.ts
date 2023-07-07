export class ListColumnDomain {
    order: number;
    width: number;
    label: string;

    constructor(order: number, width: number, label: string) {
        this.order = order;
        this.width = width;
        this.label = label;
    }

    static get defaultStudentListColumns(): Array<ListColumnDomain> {
        return [
            new ListColumnDomain(0, 30, "Index"),
            new ListColumnDomain(1, 120, "Name"),
            new ListColumnDomain(2, 60,  "No"),
            new ListColumnDomain(3, 60, "Classroom"),
            new ListColumnDomain(4, 90, "Entered At"),
            new ListColumnDomain(5, 60, "Note"),
        ];
    }
}