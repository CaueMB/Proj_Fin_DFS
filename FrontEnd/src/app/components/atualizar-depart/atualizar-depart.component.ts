import { Component, OnInit } from '@angular/core';
//Importação/referência do service
import { DepartamentoAPIService } from 'src/app/serviceAPI/departamento.api.service';
//Importação/referência das classes Router - para redirecionamento entre comps e ActivatedRoute - para "cópia" das rotas
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-depart',
  templateUrl: './atualizar-depart.component.html',
  styleUrls: ['./atualizar-depart.component.css']
})
export class AtualizarDepartComponent implements OnInit{

  //Definir o titulo comp
  titleComp: string = 'Atualizar/Alterar dados'

  //Definir uma prop para receber dados
  DepartamentoAtualizarDado: any = {}

  //Definir os objetos referênciais para as DIs
  constructor(
    private departApi: DepartamentoAPIService,
    private routing: Router,
    private copiarRota: ActivatedRoute
  ){}

  //Criar uma propriedade para atuar como a "cópia" da rota usada pelo registro
  copiandoRota: any = this.copiarRota.snapshot.params['id']

  //Fazer uso do Angular hook para "priorizar" o carregamento de algum conteúdo no componente
  ngOnInit(): void {
    //Aqui, é necessário resgatar o registro identificado
    this.departApi.PegarUmDosDepartamentos(this.copiandoRota).subscribe((DepartDadoAtual: any) => {
      this.DepartamentoAtualizarDado = DepartDadoAtual
    })
  }

  //Criar o método/função que vai acessar o service que chama a API para atualizar/alterar os dados
  AtualizarDepartamentoRegistro(){
    //Chamar a DI para acessar o service
    this.departApi.AtualizarDepartamento(this.DepartamentoAtualizarDado.id, this.DepartamentoAtualizarDado).subscribe(() => {
      this.routing.navigate(['/pegar-todos-depart'])
    })
  }
}
