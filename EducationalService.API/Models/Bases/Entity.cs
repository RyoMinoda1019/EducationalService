namespace EducationalService.API.Models.Bases
{
    public abstract class TransactionEntity
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public bool IsDeleted { get; set; } = false;

        public DateTime? UpdatedAt { get; set; }
    }
}
