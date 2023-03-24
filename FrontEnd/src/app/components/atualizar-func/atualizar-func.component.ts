import { Component, OnInit } from '@angular/core';
//Importação/referência do service
import { FuncionarioAPIService } from 'src/app/serviceAPI/funcionario.api.service.sepc';
//Importação/referência das classes Router - para redirecionamento entre comps e ActivatedRoute - para "cópia" das rotas
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-func',
  templateUrl: './atualizar-func.component.html',
  styleUrls: ['./atualizar-func.component.css']
})
export class AtualizarFuncComponent implements OnInit{
  //Definir o titulo comp
  titleComp: string = 'Atualizar/Alterar dados'

  //Definir uma prop para receber dados
  FuncionarioAtualizarDado: any = {}

  //Definir os objetos referênciais para as DIs
  constructor(
    private funcApi: FuncionarioAPIService,
    private routing: Router,
    private copiarRota: ActivatedRoute
  ){}

  //Criar uma propriedade para atuar como a "cópia" da rota usada pelo registro
  copiandoRota: any = this.copiarRota.snapshot.params['id']

  //Fazer uso do Angular hook para "priorizar" o carregamento de algum conteúdo no componente
  ngOnInit(): void {
    //Aqui, é necessário resgatar o registro identificado
    this.funcApi.PegarUmFuncionario(this.copiandoRota).subscribe((FuncDadoAtual: any) => {
      this.FuncionarioAtualizarDado = FuncDadoAtual
    })
  }

  //Criar o método/função que vai acessar o service que chama a API para atualizar/alterar os dados
  AtualizarFuncionarioRegistro(){
    //Chamar a DI para acessar o service
    this.funcApi.AtualizarFuncionario(this.FuncionarioAtualizarDado.id, this.FuncionarioAtualizarDado).subscribe(() => {
      this.routing.navigate(['/pegar-todos-func'])
    })
  }
}
