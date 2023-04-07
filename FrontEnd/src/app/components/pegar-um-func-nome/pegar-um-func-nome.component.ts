import { Component, OnInit } from '@angular/core';
//Importação/Referência do service no componente
import { FuncionarioAPIService } from 'src/app/serviceAPI/funcionario.api.service.sepc';
//Importação da classe ActivatedRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pegar-um-func-nome',
  templateUrl: './pegar-um-func-nome.component.html',
  styleUrls: ['./pegar-um-func-nome.component.css']
})
export class PegarUmFuncNomeComponent implements OnInit{
  //Definir um titulo para o componente
  titleComp: string = 'Detalhes do Funcionário'

  //Criar uma prop para ser o elemento iteravel de dados com o qual o componente lidará
  UmRegistroFuncionarioNome: any = {}

  //Praticar a referência de instância para gerar as DIs do service e da classe ActivatedRoute
  constructor(
    private funcApi: FuncionarioAPIService,
    private copiarRota: ActivatedRoute
  ){}

  //Criar uma nova propriedade para ser uma "cópia" da rota pela qual os dados do registro irão circular
  copiandoRota: any = this.copiarRota.snapshot.params['nome_Funcionario']

  //Definir o hook ngOnInit para "priorizar" o carregamento de um determinado conteúdo
  ngOnInit(): void {
    this.funcionarioUmRegistro()
  }

  //Criar um método/função para acessar o service que possui a tarefa assincrona que recupera um único registro devidamente identificado
  funcionarioUmRegistro(){
    //chamar a DI para trazer o registro que foi selecionado na view
    this.funcApi.PegarUmFuncionarioNome(this.copiandoRota).subscribe((dado:{}) => {
      this.UmRegistroFuncionarioNome = dado
    })
  }
}
