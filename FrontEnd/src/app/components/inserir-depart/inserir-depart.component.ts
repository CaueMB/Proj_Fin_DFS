import { Component, Input } from '@angular/core';
//Importação/referência do service no componente
import { DepartamentoAPIService } from 'src/app/serviceAPI/departamento.api.service';
//Importação da classe Router para redirecionamento entre componentes
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-depart',
  templateUrl: './inserir-depart.component.html',
  styleUrls: ['./inserir-depart.component.css']
})
export class InserirDepartComponent {
  //Definir um titulo para o componente
  titleComp: string = 'Inserir um registro'

  //Criar uma prop - objeto literal - para receber os valores que virão da view
  @Input() inserirRegistro = {
    nome_Departamento: '',
  }

  //Definir a DI com os objetos referenciais no construtor
  constructor(
    private departApi: DepartamentoAPIService,
    private routing: Router
  ){}

  //Criar um método/função para acessar o service e enviar os dados para a tarefa assincrona de inserção
  inserirUmDepartamento(){
    //chamar DI que acessa a API com o método de inserção de dados
    this.departApi.InserirRegistroDepartamento(this.inserirRegistro).subscribe(() => {
      this.routing.navigate(['/pegar-todos-depart'])
    })
  }
}
