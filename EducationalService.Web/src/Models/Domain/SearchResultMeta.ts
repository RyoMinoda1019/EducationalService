export class SearchResultMeta {
    CountInThisPage: number;
    Page: number;
    TotalPage: number;
    TotalCount: number;
    NotificationCount: number;

    constructor(count: number, page: number, totalPage: number, totalCount: number, notificationCount: number) {
        this.CountInThisPage = count;
        this.Page = page;
        this.TotalCount = totalCount;
        this.TotalPage = totalPage;
        this.NotificationCount = notificationCount;
    }

    static get defaultData() {
        return new SearchResultMeta(0, 1, 1, 0, 0);
    } 
}