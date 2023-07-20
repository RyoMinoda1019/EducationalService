export type searchCondition = {
    page: number;
    count: number;
    className: string | null;
    name: string | null;
    others: Map<string, string>;
}

export const getSearchConditionFromQuery = (query: string): searchCondition => {
    const questionRemoved = query.substring(1, query.length + 1);
    const splitted = questionRemoved.split("&");

    var page = 1;
    var count = 30;
    var className = null;
    var name = null;
    var others = new Map<string, string>;

    splitted.forEach(x => {
        const keyValue = x.split("=");
        switch (keyValue[0]) {
            case "page":
            case "count":
                count = Number(keyValue[1]);
                break;
            case "name":
            case "classname":
                name = keyValue[1]
                break;
            default:
                others.set(keyValue[0], keyValue[1]);
                break;
        }
    });

    return {
        page, 
        count,
        className,
        name,
        others,
    }
}