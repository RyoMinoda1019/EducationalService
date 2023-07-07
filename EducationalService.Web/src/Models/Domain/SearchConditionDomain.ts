export class SearchConditionDomain {
    Text: string;
    Genre: string | null;
    Count: number;
    Order: string | null;
    IsPreserved: boolean;

    constructor(
        text: string,
        genre: string |  null, 
        count: number, 
        order: string | null,
        isPreserved: boolean,
    ) {
        this.Text = text;
        this.Genre = genre;
        this.Count = count;
        this.Order = order;
        this.IsPreserved = isPreserved;
    }

    static get defaultSearchCondition() {
        return new SearchConditionDomain(
            "", null, 20, null, false,
        );
    }
}