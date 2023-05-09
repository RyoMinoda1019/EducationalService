namespace EducationalService.API.Models.Bases
{
    public abstract class TransactionEntity<T>: SeederBase<T>
        where T : class
    {
        public Guid Id { get; set; } = Guid.NewGuid();

        public bool IsDeleted { get; set; } = false;

        public DateTime? UpdatedAt { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now.ToUniversalTime();
    }
}
