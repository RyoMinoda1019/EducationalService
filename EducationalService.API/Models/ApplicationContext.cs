using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace EducationalService.API.Models
{
    public class ApplicationContext: DbContext
    {

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {

        }

        public DbSet<UserAccount> UserAccounts => Set<UserAccount>();
    
        public DbSet<GroupAccount> GroupAccounts => Set<GroupAccount>();
    }
}
