import { Component, Input } from '@angular/core';
//Importação/referência do service no componente
import { FuncionarioAPIService } from 'src/app/serviceAPI/funcionario.api.service.sepc';
//Importação da classe Router para redirecionamento entre componentes
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-func',
  templateUrl: './inserir-func.component.html',
  styleUrls: ['./inserir-func.component.css']
})
export class InserirFuncComponent {
  //Definir um titulo para o componente
  titleComp: string = 'Inserir funcionário'

  //Criar uma prop - objeto literal - para receber os valores que virão da view
  @Input() inserirRegistro = {
    nome_Funcionario: '',
    nome_Depart: '',
    dia_Contratacao: ''
  }

  //Definir a DI com os objetos referenciais no construtor
  constructor(
    private funcApi: FuncionarioAPIService,
    private routing: Router
  ){}

  //Criar um método/função para acessar o service e enviar os dados para a tarefa assincrona de inserção
  inserirUmFuncionario(){
    //chamar DI que acessa a API com o método de inserção de dados
    this.funcApi.InserirRegistroFuncionario(this.inserirRegistro).subscribe(() => {
      this.routing.navigate(['/pegar-todos-func'])
    })
  }
}
