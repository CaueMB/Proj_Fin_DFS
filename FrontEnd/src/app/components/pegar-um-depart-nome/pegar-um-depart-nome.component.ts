import { Component, OnInit } from '@angular/core';
//Importação/Referência do service no componente
import { DepartamentoAPIService } from 'src/app/serviceAPI/departamento.api.service';
//Importação da classe ActivatedRoute
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pegar-um-depart-nome',
  templateUrl: './pegar-um-depart-nome.component.html',
  styleUrls: ['./pegar-um-depart-nome.component.css']
})
export class PegarUmDepartNomeComponent implements OnInit{
  //Definir um titulo para o componente
  titleComp: string = 'Detalhes do departamento'

  //Criar uma prop para ser o elemento iteravel de dados com o qual o componente lidará
  UmRegistroDepartamentoNome: any = []

  //Praticar a referência de instância para gerar as DIs do service e da classe ActivatedRoute
  constructor(
    private departApi: DepartamentoAPIService,
    private copiarRota: ActivatedRoute
  ){}

  //Criar uma nova propriedade para ser uma "cópia" da rota pela qual os dados do registro irão circular
  copiandoRota: any = this.copiarRota.snapshot.params['nome_Departamento']

  //Definir o hook ngOnInit para "priorizar" o carregamento de um determinado conteúdo
  ngOnInit(): void {
    this.departamentoUmRegistro()
  }

  //Criar um método/função para acessar o service que possui a tarefa assincrona que recupera um único registro devidamente identificado
  departamentoUmRegistro(){
    //chamar a DI para trazer o registro que foi selecionado na view
    this.departApi.PegarUmDosDepartamentosNome(this.copiandoRota).subscribe((dado:{}) => {
      this.UmRegistroDepartamentoNome = dado
    })
  }
}
