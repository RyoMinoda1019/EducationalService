export class ClassroomListDomain {
    Id: string;
    Name: string;
    StudentCount: number;
    TodaysAttendance: number;
    CurrentClassroom: string;
    
    constructor(
        id: string, 
        name: string, 
        studentCount: number,
        todaysAttendance: number,
        currentClassroom: string
    ) {
        this.Id = id;
        this.Name = name;
        this.StudentCount = studentCount;
        this.TodaysAttendance = todaysAttendance;
        this.CurrentClassroom = currentClassroom;
    }
}