import { Component, OnInit, Input } from '@angular/core';
//Importar a referência do service para uso no componente
import { FuncionarioAPIService } from 'src/app/serviceAPI/funcionario.api.service.sepc';

@Component({
  selector: 'app-pegar-todos-func',
  templateUrl: './pegar-todos-func.component.html',
  styleUrls: ['./pegar-todos-func.component.css']
})
export class PegarTodosFuncComponent implements OnInit{

  titleComp: string = "Lista de Funcionários"

  //Criar uma prop - objeto literal - para receber o valor do id que virá da view
  @Input() idFun: any =''

  //Criar uma prop - objeto literal - para receber o valor do nome que virá da view
  @Input() nomeFun: any =''

  //Criar um propriedade para ser a coleção iterável de dados que será manipulada pelo componente
  listaFuncionarios: any = []

  //Praticar a referência de instância do service para implementar a injeção de dependência
  constructor(private funcApi: FuncionarioAPIService){}

  //"Priorizar" o carrgamento de algum conteúdo - na view - que possa existir - com origem na chamada da API pelo método mostrarRegistros()
  //Fazer uso do hook OnInit()
  ngOnInit(): void{
    this.mostrarRegistros()
  }

  //Criar o método/função para acessar o service que possui a tarefa assincrona que recupera todos os registros da base
  mostrarRegistros(): any{
    //chamar a injeção de dependencia para acessar o service que chamará a API para trazer os dados da base para o front
    this.funcApi.PegarTodosFuncionario().subscribe((dados:{}) => {
      this.listaFuncionarios = dados
    })
  }

  //Criar um método/função para acessar o service que possui a tarefa assincrona que exclui um dado - desde que esteja devidamente identificado
  delRegistroFuncionario(id:any){
    //Verificar se o usuário, realmente, quer excluir o registro
    if(confirm("Deseja, realmente, excluir este registro?")){
      //chamar a injeção de dependência para acessar o service que usará a requisição de exclusão de registro da base
      this.funcApi.DeletarFuncionario(id).subscribe(() => {
        this.mostrarRegistros()
      })
    }
  }
}
