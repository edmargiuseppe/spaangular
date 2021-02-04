import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CursoComponent } from './curso/curso.component';

const routes: Routes = [
 {
    path: '',
    component: HomeComponent
  } /*, 
 
  {
    path: '',
    component: AlunoComponent
  }, 

  {
    path: '',
    component: CursoComponent
  }   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
