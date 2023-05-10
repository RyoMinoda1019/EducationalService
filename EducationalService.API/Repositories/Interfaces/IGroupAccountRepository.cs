using EducationalService.API.Models;

namespace EducationalService.API.Repositories.Interfaces
{
    public interface IGroupAccountRepository
    {
        Task<GroupAccount> GetGroupAccountAsync(Guid groupId);
    }
}
