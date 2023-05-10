using EducationalService.API.Models.Bases;

namespace EducationalService.API.Models
{
    public class UserAccount : TransactionEntity<UserAccount>
    {
        public String UserId { get; set; } = "";

        public String UserPassword { get; set; } = "";

        public String Nickname { get; set; } = "";

        public Guid GroupAccountId { get; set; } = Guid.NewGuid();

        public GroupAccount? GroupAccount { get; set; }

        public static List<UserAccount> SampleUserAccounts => new List<UserAccount>()
        {
            new UserAccount() { Id = Guid.Parse("a61a6b8f-6ca8-467e-a10a-30d4724122de"), Nickname="Sam Ple", UserId = "SampleId", UserPassword = "Password", GroupAccountId = GroupAccount.SampleGroupAccounts.First().Id },
        };

        public override List<UserAccount> Seeds() => SampleUserAccounts;
    }
}
