using EducationalService.API.Models.Bases;

namespace EducationalService.API.Models
{
    public class Class : TransactionEntity<Class>
    {
        public string Name { get; set; } = "";
        public Guid GroupAccountId { get; set; } = Guid.NewGuid();
        public GroupAccount? GroupAccount { get; set; }
        public List<Schedule> Schedules { get; set; } = new List<Schedule>();
    }
}
