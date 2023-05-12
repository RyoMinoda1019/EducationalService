namespace EducationalService.API.Models.Responses
{
    public class GetGroup 
    {
        public Guid GroupId { get; set; }
        public String Name { get; set; } = "";

        public List<GetGroupResponseUserAccount> UserAccounts { get; set; } = new List<GetGroupResponseUserAccount>();

    
        public GetGroup(GroupAccount groupAccount)
        {
            GroupId = groupAccount.Id;
            Name = groupAccount.Name;
            UserAccounts = groupAccount.UserAccounts.Select(x => new GetGroupResponseUserAccount(x)).ToList();
        }

        public class GetGroupResponseUserAccount
        {
            public Guid UserAccountId { get; set; }

            public string Name { get; set; }

            public GetGroupResponseUserAccount(UserAccount account)
            {
                UserAccountId = account.Id;
                Name = account.Nickname;
            }
        }
    }
}
