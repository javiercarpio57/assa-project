using app_backend.Dto;
using app_backend.Models;
using app_backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace app_backend.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class MarcasAutosController : ControllerBase
    {
        private readonly IMarcasAutosService _marcasAutosService;

        public MarcasAutosController(IMarcasAutosService marcasAutosService)
        {
            _marcasAutosService = marcasAutosService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var marcasAutos = await _marcasAutosService.GetAllAsync();
            return Ok(marcasAutos);
        }
    }
}
