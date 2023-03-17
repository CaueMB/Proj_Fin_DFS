import { Component, OnInit } from '@angular/core';
//Importar a referência do service para uso no componente
import { DepartamentoAPIService } from 'src/app/serviceAPI/departamento.api.service';

@Component({
  selector: 'app-pegar-todos-depart',
  templateUrl: './pegar-todos-depart.component.html',
  styleUrls: ['./pegar-todos-depart.component.css']
})
export class PegarTodosDepartComponent {

  titleComp: string = "Lista de Departamentos"

  //Criar um propriedade para ser a coleção iterável de dados que será manipulada pelo componente
  listaDepartamento: any = []

  //Praticar a referência de instância do service para implementar a injeção de dependência
  constructor(private departApi: DepartamentoAPIService){}

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

  //Criar um método/função para acessar o service que possui a tarefa assincrona que exclui um dado - desde que esteja devidamente identificado
  delRegistroDepartamento(id:any){
    //Verificar se o usuário, realmente, quer excluir o registro
    if(confirm("Deseja, realmente, excluir este registro?")){
      //chamar a injeção de dependência para acessar o service que usará a requisição de exclusão de registro da base
      this.departApi.DeletarDepartamento(id).subscribe(() => {
        this.mostrarRegistros()
      })
    }
  }
}
