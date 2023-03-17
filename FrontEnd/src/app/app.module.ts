import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importados para uso no projeto
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtualizarDepartComponent } from './components/atualizar-depart/atualizar-depart.component';
import { AtualizarFuncComponent } from './components/atualizar-func/atualizar-func.component';
import { InserirDepartComponent } from './components/inserir-depart/inserir-depart.component';
import { InserirFuncComponent } from './components/inserir-func/inserir-func.component';
import { PegarTodosDepartComponent } from './components/pegar-todos-depart/pegar-todos-depart.component';
import { PegarTodosFuncComponent } from './components/pegar-todos-func/pegar-todos-func.component';
import { PegarUmDepartComponent } from './components/pegar-um-depart/pegar-um-depart.component';
import { PegarUmFuncComponent } from './components/pegar-um-func/pegar-um-func.component';
import { DepartamentoAPIService } from './serviceAPI/departamento.api.service';
import { FuncionarioAPIService } from './serviceAPI/funcionario.api.service.sepc';

@NgModule({
  declarations: [
    AppComponent,
    AtualizarDepartComponent,
    AtualizarFuncComponent,
    InserirDepartComponent,
    InserirFuncComponent,
    PegarTodosDepartComponent,
    PegarTodosFuncComponent,
    PegarUmDepartComponent,
    PegarUmFuncComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [
    DepartamentoAPIService,
    FuncionarioAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
