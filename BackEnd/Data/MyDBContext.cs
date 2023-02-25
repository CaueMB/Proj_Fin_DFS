using Microsoft.EntityFrameworkCore;

namespace BackEnd.Data
{
    //Pratica da herança da superclasse DbContext
    public class MyDBContext : DbContext
    {
        //definir o construtor para fazer referência direta a superclasse DbContexte suas propriedades
        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options) { }
        //Referência ao elemento lógico para manipulação da tabela Departamento e Funcionario
        public DbSet<BackEnd.Data.Entities.Departamento> Departamento { get; set;}
        public DbSet<BackEnd.Data.Entities.Funcionario> Funcionario { get; set;}
    }
}
