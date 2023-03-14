using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd.Data;
using BackEnd.Data.Entities;

namespace BackEnd.Controllers
{
    //Fazer uso do atributo que identifica este Controller como uma Api
    [ApiController]
    //definir a rota da Api
    [Route("api/[controller]")]
    //Praticar o mecanismo de herança com a superclasse ControllerBase
    public class FuncionarioController : ControllerBase
    {
        //Praticar a referência de instância da classe MyDbContext que auxiliará na manipulação de dados
        private readonly MyDBContext _dbContext;

        //definir o construtor da classe/controller/api para referênciar a injeção de dependência
        public FuncionarioController(MyDBContext dbContext)
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
            var listaFuncionarios = await _dbContext.Funcionario.ToListAsync();
            //Retornar a lista atribuída como valor da variável listaFuncionarios
            return Ok(listaFuncionarios);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            //Definir uma propriedade para receber - de maneira assincrona - um registro da base, acessando a entity, devidamente indentificado com o valor do parametro id
            var funcionarioUnico = await _dbContext.Funcionario.FindAsync(id);

            //Verificar se o valor dado ao parâmetro existe
            if (funcionarioUnico == null)
            {
                return NotFound();
            }
            //Se o valor do parâmetro id existir, o registro será retornado e disponobilizado para o front
            return Ok(funcionarioUnico);
        }

        //Inserir dados na base

        //Definir a tarefa assincrona para adicionar um registro na base de dados
        [HttpPost]
        public async Task<IActionResult> Post(Funcionario registro)
        {
            //Fazer acesso a entity Funcionario para que os dados recebidos pelo parâmetro registro possam ser enviados para base
            _dbContext.Funcionario.Add(registro);

            //Indicar que a alteração, de forma assincrona, precisa ser salva e, assim, definitivamente, armazenado na base
            await _dbContext.SaveChangesAsync();

            //Retornar o conjunto de valores
            return Ok(registro);
        }

        //Atualização de registros da base

        //Definir a tarefa assincrona para que o registro seja atualizado
        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Put([FromRoute]int id, Funcionario novoRegistro)
        {
            //Definir uma prop para receber - de maneira assincrona - um registro da base, acessando a entity, devidamente identificado com o valor dado ao parâmetro id
            var encontrarFuncionario = await _dbContext.Funcionario.FindAsync(id);

            //Verificar a existência do valor id
            if(encontrarFuncionario == null)
            {
                return NotFound();
            }

            //Definir, acessando e entity, a operação necessaria para a atualização do registro e seu devido rearmazenamento
            encontrarFuncionario.Nome_Funcionario = novoRegistro.Nome_Funcionario;
            encontrarFuncionario.Nome_Depart = novoRegistro.Nome_Depart;
            encontrarFuncionario.Dia_Contratacao = novoRegistro.Dia_Contratacao;

            //de forma sincrona fazer uso da operação de "salvamento" da alteração realizada
            await _dbContext.SaveChangesAsync();

            //Retornar o registro devidamente atualizado
            return Ok(encontrarFuncionario);
        }

        //Excluir registros da base

        //Definir a tarefa assincrona com o atributo necessário para a exclusão de um registro
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            //Definir uma propriedade para receber como valor uma busca para um determinado registro
            var deleteRegistro = await _dbContext.Funcionario.FindAsync(id);

            //Verificar se o registro existe
            if (deleteRegistro == null)
            {
                return NotFound();
            }

            //Se o registro existir será excluido
            _dbContext.Funcionario.Remove(deleteRegistro);

            //"Salvar" alterações
            await _dbContext.SaveChangesAsync();

            //Retornar o método ok(), pois o registro foi excluido
            return Ok();
        }
    }
}
