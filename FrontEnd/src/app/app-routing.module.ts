import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Criar as rotas
import { PegarTodosDepartComponent } from './components/pegar-todos-depart/pegar-todos-depart.component';
import { PegarTodosFuncComponent } from './components/pegar-todos-func/pegar-todos-func.component';
import { PegarUmDepartComponent } from './components/pegar-um-depart/pegar-um-depart.component';
import { PegarUmFuncComponent } from './components/pegar-um-func/pegar-um-func.component';
import { InserirDepartComponent } from './components/inserir-depart/inserir-depart.component';
import { InserirFuncComponent } from './components/inserir-func/inserir-func.component';
import { AtualizarDepartComponent } from './components/atualizar-depart/atualizar-depart.component';
import { AtualizarFuncComponent } from './components/atualizar-func/atualizar-func.component';
import { PegarUmDepartNomeComponent } from './components/pegar-um-depart-nome/pegar-um-depart-nome.component';
import { PegarUmFuncNomeComponent } from './components/pegar-um-func-nome/pegar-um-func-nome.component';

//Compor as rotas
const routes: Routes = [
  {path:'pegar-todos-depart', component:PegarTodosDepartComponent},
  {path:'pegar-todos-func', component:PegarTodosFuncComponent},
  {path:'pegar-um-depart/:id', component:PegarUmDepartComponent},
  {path:'pegar-um-func/:id', component:PegarUmFuncComponent},
  {path:'inserir-depart', component:InserirDepartComponent},
  {path:'inserir-func', component:InserirFuncComponent},
  {path:'atualizar-depart/:id', component:AtualizarDepartComponent},
  {path:'atualizar-func/:id', component:AtualizarFuncComponent},
  {path:'pegar-um-depart-nome/:nome_Departamento', component:PegarUmDepartNomeComponent},
  {path:'pegar-um-func-nome/:nome_Funcionario', component:PegarUmFuncNomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
