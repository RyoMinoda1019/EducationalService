import { FlexibleColumnDomain } from "../Domain/FlexibleColumnDomain";
import { SearchConditionDomain } from "../Domain/SearchConditionDomain";
import { SearchResultMetaDomain } from "../Domain/SearchResultMetaDomain";
import { StudentListDomain, StudentListItemDomain } from "../Domain/StudentListDomain";

const  student1: StudentListItemDomain = new StudentListItemDomain("fe371924-fc50-11ed-be56-0242ac120002", "Herb Chase", "1", "", 0,"1-1", new Date(), new Date())
const  student2: StudentListItemDomain = new StudentListItemDomain("fe371c44-fc50-11ed-be56-0242ac120002", "Nathan Benitez", "1", "", 1,"1-2", new Date(), new Date())
const  student3: StudentListItemDomain = new StudentListItemDomain("fe371de8-fc50-11ed-be56-0242ac120002", "Roscoe Short", "1", "", 2,"1-3", new Date(), new Date())
const  student4: StudentListItemDomain = new StudentListItemDomain("fe371f6e-fc50-11ed-be56-0242ac120002", "Nestor Prince", "1", "", 3,"2-1", new Date(), new Date())
const  student5: StudentListItemDomain = new StudentListItemDomain("fe3720c2-fc50-11ed-be56-0242ac120002", "Junior Ibarra", "1", "Wheel Chair", 4,"2-2", new Date(), new Date())
const  student6: StudentListItemDomain = new StudentListItemDomain("fe372234-fc50-11ed-be56-0242ac120002", "Ezra Hubbard", "2", "", 5,"2-2", new Date(), new Date())
const  student7: StudentListItemDomain = new StudentListItemDomain("fe372392-fc50-11ed-be56-0242ac120002", "Reyes Chambers", "3", "", 6,"2-2", new Date(), new Date())
const  student8: StudentListItemDomain = new StudentListItemDomain("fe372720-fc50-11ed-be56-0242ac120002", "Micah Abbott", "4", "", 7,"2-2", new Date(), new Date())
const  student9: StudentListItemDomain = new StudentListItemDomain("fe3728ce-fc50-11ed-be56-0242ac120002", "Dario Yates", "5", "", 8,"2-2", new Date(), new Date())
const  student10: StudentListItemDomain = new StudentListItemDomain("fe372a40-fc50-11ed-be56-0242ac120002", "Erich Hanson", "6", "", 9,"2-2", new Date(), new Date())
const  student11: StudentListItemDomain = new StudentListItemDomain("fe372b9e-fc50-11ed-be56-0242ac120002", "Tommie Vance", "7", "", 10,"2-2", new Date(), new Date())
const  student12: StudentListItemDomain = new StudentListItemDomain("fe372d38-fc50-11ed-be56-0242ac120002", "Elva Mckenzie", "8", "", 11,"2-2", new Date(), new Date())
const  student13: StudentListItemDomain = new StudentListItemDomain("fe372eb4-fc50-11ed-be56-0242ac120002", "Ericka Pineda", "9", "", 12,"2-2", new Date(), new Date())
const  student14: StudentListItemDomain = new StudentListItemDomain("fe373030-fc50-11ed-be56-0242ac120002", "Palmer King", "10", "", 13,"2-2", new Date(), new Date())
const  student15: StudentListItemDomain = new StudentListItemDomain("fe3731c0-fc50-11ed-be56-0242ac120002", "Leon Higgins", "11", "", 14,"2-2", new Date(), new Date())
const  student16: StudentListItemDomain = new StudentListItemDomain("fe3735c6-fc50-11ed-be56-0242ac120002", "Clayton Estes", "12", "", 15,"2-2", new Date(), new Date())
const  student17: StudentListItemDomain = new StudentListItemDomain("fe373738-fc50-11ed-be56-0242ac120002", "Timothy Reid", "13", "", 16,"2-2", new Date(), new Date())
const  student18: StudentListItemDomain = new StudentListItemDomain("fe3738a0-fc50-11ed-be56-0242ac120002", "Pearlie Wade", "1", "", 17,"2-3", new Date(), new Date())
const  student19: StudentListItemDomain = new StudentListItemDomain("fe373a08-fc50-11ed-be56-0242ac120002", "Toney Bauer", "2", "", 18,"2-3", new Date(), new Date())
const  student20: StudentListItemDomain = new StudentListItemDomain("fe373b7a-fc50-11ed-be56-0242ac120002", "Adrienne Howell", "3", "", 19,"2-3", new Date(), new Date())

const searchResultMeta = new SearchResultMetaDomain(20, 1, 4, 84, 3);

export const studentListMock: StudentListDomain = {
    Students: [
        student1,student2,student3,student4,student5,student6,student7,student8,student9,student10,student11,student12,student13,student14,student15,student16,student17,student18,student19,student20
    ],
    SearchResultMeta: searchResultMeta,
    Columns: FlexibleColumnDomain.defaultStudentListColumns,
    SearchCondition: SearchConditionDomain.defaultSearchCondition,
}
