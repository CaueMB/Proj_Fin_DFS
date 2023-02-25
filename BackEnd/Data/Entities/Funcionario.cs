namespace BackEnd.Data.Entities
{
    public class Funcionario
    {
        //Definir as propriedades
        public int Id { get; set; }
        public string? Nome_Funcionario { get; set; }
        public string? Nome_Depart { get; set; }
        public DateOnly Dia_Contratacao { get; set; }
    }
}
