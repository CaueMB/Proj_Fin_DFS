--Usando o banco de dados Projeto_final_FS_DB
USE Projeto_final_FS_DB;

GO

--Criando as tabelas de funcionario e departamento
CREATE TABLE Departamento(
	Id INT,
	Nome_Departamento VARCHAR(30)
);

CREATE TABLE Funcionario(
	Id INT,
	Nome_Funcionario VARCHAR(45),
	Nome_Depart VARCHAR(30),
	Dia_Contratacao DATE
);

GO