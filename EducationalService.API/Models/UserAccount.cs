using EducationalService.API.Models.Bases;

namespace EducationalService.API.Models
{
    public class UserAccount : TransactionEntity
    {
        public String UserId { get; set; } = "";

        public String UserPassword { get; set; } = "";

        public Guid GroupId { get; set; } = Guid.NewGuid();
    }
}
