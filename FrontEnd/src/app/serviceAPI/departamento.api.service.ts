import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DepartamentoInterface } from '../model/departamentoInterface';
import { Observable } from "rxjs";

@Injectable()

export class DepartamentoAPIService{

    //Estabelecer uma propriedade para receber como valor o "endereço" pelo qual os dados serão acessados
    apiUrlBase: string = 'http://localhost:5172/api/Departamento';

    //estabelecer no construtor a injeção de dependencia para gerar o objeto referencial http - que lida com as requisições à API
    constructor(private http: HttpClient) { }

    //estebelecer as credenciais de acesso para o cross-domain entre as aplicações
    crossAuth = {
        headers: new HttpHeaders({
            'Content-Type' : 'application/json'
        })
    }

    //Estabelecer o fluxo de dados a partir da chamada da API no BackEnd

    //Trabalhar com os métodos Get(), Post(), Put() e Delete()

    //Estabelecer o método/requisição http para chamar a API e acessar o método que recupera todos os registros
    PegarTodosDepartamentos(): Observable<DepartamentoInterface>{
        return this.http.get<DepartamentoInterface>(this.apiUrlBase)
    }

    //Estabelecer o método/requisição para recuperar um único registro da base - fazendo chamada a API
    PegarUmDepartamento(id: number): Observable<DepartamentoInterface>{
        return this.http.get<DepartamentoInterface>(this.apiUrlBase+'/'+id)
    }

    //Estabelecer o método/requisição/função para inserir dados na base - fazendo a chamada da API
    InserirRegistroDepartamento(receberDados: any): Observable<DepartamentoInterface>{
        return this.http.post<DepartamentoInterface>(this.apiUrlBase, JSON.stringify(receberDados), this.crossAuth)
    }

    //Estabelecer o método/requisição/função para atualizar/alterar os dados na base fazendo a chamada da API
    AtualizarDepartamento(id: number, outroRegistro:any): Observable<DepartamentoInterface>{
        return this.http.put<DepartamentoInterface>(this.apiUrlBase+'/'+id, JSON.stringify(outroRegistro), this.crossAuth)
    }

    //Estabelecer o método/requisição/função para excluir um registro da base - fazendo a chamada da API
    DeletarDepartamento(id: any): Observable<DepartamentoInterface>{
        return this.http.delete<DepartamentoInterface>(this.apiUrlBase+'/'+id, this.crossAuth)
    }
}