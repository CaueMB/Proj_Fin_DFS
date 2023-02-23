--Usando o banco de dados Projeto_final_FS_DB
USE Projeto_final_FS_DB;

GO

--Criando as tabelas de funcionario e departamento
CREATE TABLE [dbo].[Departamento](
	[Id_Dep][INT] IDENTITY(1, 1) NOT NULL,
	[Nome_Departamento][VARCHAR](50) NOT NULL
	CONSTRAINT [PK_Departamento] PRIMARY KEY CLUSTERED
	(
		[Id_Dep] ASC
	)WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)ON [PRIMARY]
)ON [PRIMARY];

CREATE TABLE [dbo].[Funcionario](
	[Id_Fun][INT] IDENTITY(1, 1) NOT NULL,
	[Nome_Funcionario][VARCHAR](50) NOT NULL,
	[Nome_Depart][VARCHAR](50) NOT NULL,
	[Dia_Contratacao][DATE] NULL
	CONSTRAINT [PK_Funcionario] PRIMARY KEY CLUSTERED
	(
		[Id_Fun] ASC
	)WITH(PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)ON [PRIMARY]
)ON [PRIMARY];

GO