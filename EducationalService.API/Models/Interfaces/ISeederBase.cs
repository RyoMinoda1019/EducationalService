using Microsoft.EntityFrameworkCore;

namespace EducationalService.API.Models.Interfaces
{
    public interface ISeederBase
    {
        public void Execute(ModelBuilder modelBuilder);
    }
}
