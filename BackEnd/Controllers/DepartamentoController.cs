using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd.Data;

namespace BackEnd.Controllers
{
    
    //Fazer uso do atributo que identifica este Controller como uma Api
    [ApiController]
    //definir a rota da Api
    [Route("api/Department")]
    //Praticar o mecanismo de herança com a superclasse ControllerBase
    public class DepartamentoController : ControllerBase
    {
        //Praticar a referência de instância da classe MyDbContext que auxiliará na manipulação de dados
        private readonly MyDBContext _dbContext;

        //definir o construtor da classe/controller/api para referênciar a injeção de dependência
        public DepartamentoController(MyDBContext dbContext)
        {
            //Acessar a prop private e atribui-la com qualquer valor que em algum momento, será dado ao parâmetro do construtor
            _dbContext = dbContext;
        }

        //Tarefa assincrona que recupera todos os dados da base

        //Definir a tarefa assincrona com o atributo - de forma explicita - [HttpGet]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            //Definir uma propriedade para receber - de forma assincrona - todos os registros da base a partir do acesso a entity
            var listaDepartamentos = await _dbContext.Departamento.ToListAsync();
            //Retornar a lista atribuída como valor da variável listaDepartamentos
            return Ok(listaDepartamentos);
        }
    }
}
