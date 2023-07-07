export type ListItemStringWidth = {
    width: number;
    title: string;
}


export const getStudentListItemColumnWidths = (entireWidth: number, items: ListItemStringWidth[]): number[] => {
    var width = entireWidth;
    var array = Array<number>();
    items.forEach((element, i) => {
        if (width > element.width) {
            array.push(element.width);
        }
        width = width - element.width;
    });
    return array;
}