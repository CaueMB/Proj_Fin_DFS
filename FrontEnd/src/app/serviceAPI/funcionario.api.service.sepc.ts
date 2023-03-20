import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FuncionarioInterface } from '../model/funcionarioInterface';
import { Observable } from "rxjs";

@Injectable()

export class FuncionarioAPIService{

    //Estabelecer uma propriedade para receber como valor o "endereço" pelo qual os dados serão acessados
    apiUrlBase: string = 'http://localhost:5172/api/Funcionario';

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
    PegarTodosFuncionario(): Observable<FuncionarioInterface>{
        return this.http.get<FuncionarioInterface>(this.apiUrlBase+'/PegarTodosFuncionarios')
    }

    //Estabelecer o método/requisição para recuperar um único registro da base - fazendo chamada a API
    PegarUmFuncionario(id: number): Observable<FuncionarioInterface>{
        return this.http.get<FuncionarioInterface>(this.apiUrlBase+'/PegarUmFuncionario/'+id)
    }

    //Estabelecer o método/requisição/função para inserir dados na base - fazendo a chamada da API
    InserirRegistroFuncionario(receberDados: any): Observable<FuncionarioInterface>{
        return this.http.post<FuncionarioInterface>(this.apiUrlBase+'/AdFuncionario/', JSON.stringify(receberDados), this.crossAuth)
    }

    //Estabelecer o método/requisição/função para atualizar/alterar os dados na base fazendo a chamada da API
    AtualizarFuncionario(id: number, outroRegistro:any): Observable<FuncionarioInterface>{
        return this.http.put<FuncionarioInterface>(this.apiUrlBase+'/AtFuncionario/'+id, JSON.stringify(outroRegistro), this.crossAuth)
    }

    //Estabelecer o método/requisição/função para excluir um registro da base - fazendo a chamada da API
    DeletarFuncionario(id: any): Observable<FuncionarioInterface>{
        return this.http.delete<FuncionarioInterface>(this.apiUrlBase+'/DelFuncionario/'+id, this.crossAuth)
    }
}