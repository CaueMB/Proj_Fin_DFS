﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd.Data;
using BackEnd.Data.Entities;

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

        //Resgatar um único registro da base

        //Definir a tarefa assincrona para recuperar o registro
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            //Definir uma propriedade para receber - de maneira assincrona - um registro da base, acessando a entity, devidamente indentificado com o valor do parametro id
            var departamentoUnico = await _dbContext.Departamento.FindAsync(id);

            //Verificar se o valor dado ao parâmetro existe
            if(departamentoUnico == null)
            {
                return NotFound();
            }
            //Se o valor do parâmetro id existir, o registro será retornado e disponobilizado para o front
            return Ok(departamentoUnico);
        }

        //Inserir dados na base

        //Definir a tarefa assincrona para adicionar um registro na base de dados
        [HttpPost]
        public async Task<IActionResult> Post(Departamento registro)
        {
            //Fazer acesso a entity Departamento para que os dados recebidos pelo parâmetro registro possam ser enviados para base
            _dbContext.Departamento.Add(registro);

            //Indicar que a alteração, de forma assincrona, precisa ser salva e, assim, definitivamente, armazenado na base
            await _dbContext.SaveChangesAsync();

            //Retornar o conjunto de valores
            return Ok(registro);
        }

        //Atualizar dados da base

        //Definir a tarefa assincrona para que o registro seja atualizado
        [HttpPut]
        public async Task<IActionResult> Put(Departamento novoRegistro)
        {
            //Definir, acessando a entity, a operação necessária para a atualização do registro e seu devido rearmazenamento
            _dbContext.Departamento.Update(novoRegistro);
            //de forma sincrona fazer uso da operação de "salvamento" da alteração realizada
            await _dbContext.SaveChangesAsync();

            //Retornar o registro devidamente atualizado
            return Ok(novoRegistro);
        }

        //Excluir registros da base

        //Definir a tarefa assincrona com o atributo necessário para a exclusão de um registro
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            //Definir uma propriedade para receber como valor uma busca para um determinado registro
            var deleteRegistro = await _dbContext.Departamento.FindAsync(id);

            //Verificar se o registro existe
            if (deleteRegistro == null)
            {
                return NotFound();
            }

            //Se o registro existir será excluido
            _dbContext.Departamento.Remove(deleteRegistro);

            //"Salvar" alterações
            await _dbContext.SaveChangesAsync();

            //Retornar o método ok(), pois o registro foi excluido
            return Ok();
        }
    }
}
