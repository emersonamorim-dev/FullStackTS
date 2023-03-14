using BackendTS.Data;
using BackendTS.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackendTS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AutomovelController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;

        public AutomovelController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAutomovel()
        {
            var automovel = await _fullStackDbContext.Automovel.ToListAsync();
            return Ok(automovel);
        }
        [HttpPost]
        public async Task<IActionResult> AddAutomovel([FromBody] Automovel automovelRequest)
        {
            automovelRequest.id = Guid.NewGuid();
            await _fullStackDbContext.Automovel.AddAsync(automovelRequest);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(automovelRequest);
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetPessoa([FromRoute] Guid id)
        {
            var automovel = await _fullStackDbContext.Automovel.FirstOrDefaultAsync(x => x.id == id);
            if (automovel == null)
            {
                return NotFound();
            }
            return Ok(automovel);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateAutomovel([FromRoute] Guid id, Automovel updateAutomovelRequest)
        {
            var automovel = await _fullStackDbContext.Automovel.FindAsync(id);
            if (automovel == null)
            {
                return NotFound();
            }
            automovel.placa = updateAutomovelRequest.placa;
            automovel.veiculo = updateAutomovelRequest.veiculo;

            await _fullStackDbContext.SaveChangesAsync();
            return Ok(automovel);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteAutomovel(Guid id)
        {
            var automovel = await _fullStackDbContext.Automovel.FindAsync(id);
            if (automovel == null)
            {
                return NotFound();
            }

            _fullStackDbContext.Automovel.Remove(automovel);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(automovel);
        }
    }
}
