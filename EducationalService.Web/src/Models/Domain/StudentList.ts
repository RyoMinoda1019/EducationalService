export type StudentListDomain = {
    Students: StudentListItemDomain[],
}

export const defaultStudentListDomain: StudentListDomain = {
    Students: []
}

export type StudentListItemDomain = {
    Name: string,
    No: number,
    Note: string,
}