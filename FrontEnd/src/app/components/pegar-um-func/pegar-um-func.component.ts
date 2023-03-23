import { Component, OnInit } from '@angular/core';
//Importação/Referência do service no componente
import { FuncionarioAPIService } from 'src/app/serviceAPI/funcionario.api.service.sepc';
//Importação da classe ActivatedRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pegar-um-func',
  templateUrl: './pegar-um-func.component.html',
  styleUrls: ['./pegar-um-func.component.css']
})
export class PegarUmFuncComponent implements OnInit{
  //Definir um titulo para o componente
  titleComp: string = 'Detalhes do funcionário'

  //Criar uma prop para ser o elemento iteravel de dados com o qual o componente lidará
  UmRegistroFuncionario: any = {}

  //Praticar a referência de instância para gerar as DIs do service e da classe ActivatedRoute
  constructor(
    private funcApi: FuncionarioAPIService,
    private copiarRota: ActivatedRoute
  ){}

  //Criar uma nova propriedade para ser uma "cópia" da rota pela qual os dados do registro irão circular
  copiandoRota: any = this.copiarRota.snapshot.params['id']

  //Definir o hook ngOnInit para "priorizar" o carregamento de um determinado conteúdo
  ngOnInit(): void {
    this.funcionarioUmRegistro()
  }

  //Criar um método/função para acessar o service que possui a tarefa assincrona que recupera um único registro devidamente identificado
  funcionarioUmRegistro(){
    //chamar a DI para trazer o registro que foi selecionado na view
    this.funcApi.PegarUmFuncionario(this.copiandoRota).subscribe((dado:{}) => {
      this.UmRegistroFuncionario = dado
    })
  }
}
