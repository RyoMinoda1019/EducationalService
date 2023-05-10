using EducationalService.API.Models;
using EducationalService.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EducationalService.API.Repositories
{
    public class GroupAccountRepository : IGroupAccountRepository
    {
        private readonly ApplicationContext _context;
        public GroupAccountRepository(ApplicationContext context)
        {
            _context = context;
        }

        public async Task<GroupAccount> GetGroupAccountAsync(Guid groupId)
        {
            var result = await _context.GroupAccounts
                .Where(x => x.Id == groupId)
                .Where(x => x.IsDeleted == false)
                .Include(x => x.UserAccounts)
                .ToListAsync();
            if (!result.Any())
            {
                throw new ArgumentNullException("Invalid GroupId");
            }
            return result.First();
        }
    }
}
