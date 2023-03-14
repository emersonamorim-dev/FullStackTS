using BackendTS.Data;
using BackendTS.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackendTS.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PessoaController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;

        public PessoaController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAllPessoas()
        {
          var pessoas = await  _fullStackDbContext.Pessoas.ToListAsync();
            return Ok(pessoas);
        }
        [HttpPost]  
        public async Task<IActionResult> AddPessoa([FromBody] Pessoa pessoaRequest)
        {
            pessoaRequest.id = Guid.NewGuid();
            await _fullStackDbContext.Pessoas.AddAsync(pessoaRequest);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(pessoaRequest);
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetPessoa([FromRoute]Guid id)
        {
          var pessoa =  await _fullStackDbContext.Pessoas.FirstOrDefaultAsync(x => x.id == id); 
            if(pessoa == null)
            {
                return NotFound();
            }
            return Ok(pessoa);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult>UpdateEmployee([FromRoute]Guid id, Pessoa updatePessoaRequest)
        {
            var pessoa = await _fullStackDbContext.Pessoas.FindAsync(id);
            if(pessoa == null)
            {
                return NotFound();
            }
            pessoa.nome = updatePessoaRequest.nome;
            pessoa.cpf = updatePessoaRequest.cpf;
            pessoa.estado = updatePessoaRequest.estado;

           await _fullStackDbContext.SaveChangesAsync();
            return Ok(pessoa);

        }


        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeletePessoa(Guid id)
        {
            var pessoa = await _fullStackDbContext.Pessoas.FindAsync(id);
            if (pessoa == null)
            {
                return NotFound();
            }

            _fullStackDbContext.Pessoas.Remove(pessoa);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(pessoa);
        }
    }
}
