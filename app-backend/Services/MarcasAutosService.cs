using app_backend.Dto;
using app_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace app_backend.Services
{
    public interface IMarcasAutosService
    {
        Task<List<MarcasAutosGetDto>> GetAllAsync();
    }

    public class MarcasAutosService : IMarcasAutosService
    {
        private readonly AssaDbContext _dbContext;

        public MarcasAutosService(AssaDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<MarcasAutosGetDto>> GetAllAsync()
        {
            return await _dbContext.MarcasAutos
                .Select(marca => new MarcasAutosGetDto
                {
                    Name = marca.Name,
                    Description = marca.Description,
                })
                .ToListAsync();
        }
    }

}
