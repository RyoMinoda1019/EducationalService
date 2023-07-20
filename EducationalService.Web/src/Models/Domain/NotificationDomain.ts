export class NotificationDomain {
    Id: string;
    Message: string;
    ReadAt: Date | null;
    CreatedAt: Date | null;
    Type: string;

    constructor(id: string, message: string, readAt: Date | null, createdAt: Date | null, type: string) {
        this.Id = id;
        this.Message = message;
        this.ReadAt = readAt;
        this.CreatedAt = createdAt;
        this.Type = type;
    }
}