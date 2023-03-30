import { Component, Input, OnInit } from '@angular/core';
//Importação/referência do service no componente
import { FuncionarioAPIService } from 'src/app/serviceAPI/funcionario.api.service.sepc';
//Importação da classe Router para redirecionamento entre componentes
import { Router } from '@angular/router';
//Importar a referência do service para uso no componente
import { DepartamentoAPIService } from 'src/app/serviceAPI/departamento.api.service';

@Component({
  selector: 'app-inserir-func',
  templateUrl: './inserir-func.component.html',
  styleUrls: ['./inserir-func.component.css']
})
export class InserirFuncComponent implements OnInit{
  //Definir um titulo para o componente
  titleComp: string = 'Adicionar Dados do Funcionário'

  //Criar uma prop - objeto literal - para receber os valores que virão da view
  @Input() inserirRegistro = {
    nome_Funcionario: '',
    nome_Depart: '',
    dia_Contratacao: ''
  }

  //Definir a DI com os objetos referenciais no construtor
  constructor(
    private funcApi: FuncionarioAPIService,
    private routing: Router,
    private departApi: DepartamentoAPIService
  ){}

  //Criar um método/função para acessar o service e enviar os dados para a tarefa assincrona de inserção
  inserirUmFuncionario(){
    //chamar DI que acessa a API com o método de inserção de dados
    this.funcApi.InserirRegistroFuncionario(this.inserirRegistro).subscribe(() => {
      this.routing.navigate(['/pegar-todos-func'])
    })
  }

  //Criar um propriedade para ser a coleção iterável de dados que será manipulada pelo componente
  listaDepartamento: any = []

  //"Priorizar" o carrgamento de algum conteúdo - na view - que possa existir - com origem na chamada da API pelo método mostrarRegistros()
  //Fazer uso do hook OnInit()
  ngOnInit(): void{
    this.mostrarRegistros()
  }

  //Criar o método/função para acessar o service que possui a tarefa assincrona que recupera todos os registros da base
  mostrarRegistros(): any{
    //chamar a injeção de dependencia para acessar o service que chamará a API para trazer os dados da base para o front
    this.departApi.PegarTodosDepartamentos().subscribe((dados:{}) => {
      this.listaDepartamento = dados
    })
  }
}
