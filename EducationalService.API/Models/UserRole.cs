using EducationalService.API.Models.Bases;

namespace EducationalService.API.Models
{
    public class UserRole : TransactionEntity<UserRole>
    {
        public string RoleName { get; set; } = string.Empty;

        public Guid GroupAccountId { get; set; } = Guid.Empty;

    }
}
