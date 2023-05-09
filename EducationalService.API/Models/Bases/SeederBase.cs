using EducationalService.API.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace EducationalService.API.Models.Bases
{
    public abstract class SeederBase<T> : ISeederBase
        where T : class
    {
        public virtual List<T> Seeds()
        {
            return new List<T>();
        }

        public void Execute(ModelBuilder modelBuilder)
        {
            foreach (var item in Seeds())
            {
                modelBuilder.Entity<T>().HasData(item);
            }
        }
    }
}
