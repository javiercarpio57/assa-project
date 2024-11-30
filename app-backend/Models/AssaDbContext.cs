using Microsoft.EntityFrameworkCore;

namespace app_backend.Models;

public partial class AssaDbContext : DbContext
{
    public DbSet<MarcasAutos> MarcasAutos { get; set; }

    public AssaDbContext()
    {
    }

    public AssaDbContext(DbContextOptions<AssaDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MarcasAutos>().HasData(
            new MarcasAutos { Id = 1, Name = "Ford", Description = "Marca estadounidense" },
            new MarcasAutos { Id = 2, Name = "BMW", Description = "Marca alemana" },
            new MarcasAutos { Id = 3, Name = "Audi", Description = "Marca alemana" },
            new MarcasAutos { Id = 4, Name = "Mercedes", Description = "Marca alemana" }

        );
    }
}
