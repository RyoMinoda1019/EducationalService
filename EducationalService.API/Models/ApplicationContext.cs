using EducationalService.API.Models.Bases;
using EducationalService.API.Models.Interfaces;
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

        public DbSet<UserRole> UserRoles => Set<UserRole>();

        public List<ISeederBase> Seeders => new List<ISeederBase>()
        {
            new GroupAccount(),
            new UserAccount(),
        };

    
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Seeders.ForEach(x =>
            {
                x.Execute(modelBuilder);
            });
        }
    }
}
