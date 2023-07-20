export class FlexibleColumnDomain {
    order: number;
    width: number;
    label: string;

    constructor(order: number, width: number, label: string) {
        this.order = order;
        this.width = width;
        this.label = label;
    }

    static get defaultStudentListColumns(): Array<FlexibleColumnDomain> {
        return [
            new FlexibleColumnDomain(0, 30, "Index"),
            new FlexibleColumnDomain(1, 120, "Name"),
            new FlexibleColumnDomain(2, 60,  "No"),
            new FlexibleColumnDomain(3, 60, "Classroom"),
            new FlexibleColumnDomain(4, 90, "Entered At"),
            new FlexibleColumnDomain(5, 60, "Note"),
        ];
    }
}