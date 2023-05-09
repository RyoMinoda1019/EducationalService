using EducationalService.API.Models.Bases;
using Microsoft.EntityFrameworkCore;

namespace EducationalService.API.Models
{
    public class GroupAccount: TransactionEntity<GroupAccount>
    {
        public String Name { get; set; } = "";

        public List<UserAccount> UserAccounts { get; set; } = new List<UserAccount>();

        public GroupAccount()
        {

        }


        public static List<GroupAccount> SampleGroupAccounts =>
            new List<GroupAccount>()
            {
                new GroupAccount() { Id = Guid.Parse("a62a6b8f-6ca8-467e-a10a-30d4724122de"), Name = "Group1" },
                new GroupAccount() { Id = Guid.Parse("a62a6b8f-6ca8-467e-a11a-30d4724122df"), Name = "Group2" },
            };

        public override List<GroupAccount> Seeds() => SampleGroupAccounts;
    }
}
