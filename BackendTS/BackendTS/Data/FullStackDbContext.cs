using BackendTS.models;
using Microsoft.EntityFrameworkCore;

namespace BackendTS.Data
{
    public class FullStackDbContext : DbContext
    {
        public FullStackDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Pessoa> Pessoas { get; set; } //property

        public DbSet<Automovel> Automovel { get; set; } //property
    }
}
