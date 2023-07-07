export type searchCondition = {
    page: number;
    count: number;
    className: string | null;
    name: string | null;
    others: string | null;
}

export const getSearchConditionFromQuery = (query: string): searchCondition => {
    var page = 0;
    var count = 30;
    var className = null;
    var name = null;
    var others = null;
    return {
        page, 
        count,
        className,
        name,
        others,
    }
}