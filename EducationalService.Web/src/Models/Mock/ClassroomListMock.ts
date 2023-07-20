import { ClassroomListDomain } from "../Domain/ClassroomListDomain";

const classroom1: ClassroomListDomain = new ClassroomListDomain("1", "2-3", 30, 28, "English");
const classroom2: ClassroomListDomain = new ClassroomListDomain("1", "2-4", 32, 31, "Math");

export const defaultHomeClassroomList: ClassroomListDomain[] = [
    classroom1, classroom2
];