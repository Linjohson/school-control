import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CoordenadorComponent } from './coordenador/coordenador.component';
import { CursosComponent } from './coordenador/cursos/cursos.component';
import { DisciplinasComponent } from './coordenador/disciplinas/disciplinas.component';
import { MatrizCurricularComponent } from './coordenador/matriz-curricular/matriz-curricular.component';
import { SemestresComponent } from './coordenador/semestres/semestres.component';
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { AlunoComponent } from './aluno/aluno.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'coordenador',
    component: CoordenadorComponent
  },
  {
    path:'cursos',
    component: CursosComponent
  },
  {
    path:'disciplinas',
    component: DisciplinasComponent
  },
  {
    path:'matriz',
    component: MatrizCurricularComponent
  },
  {
    path:'semestres',
    component: SemestresComponent
  },
  {
    path:'professor',
    component: ProfessorComponent
  },
  {
    path:'aluno',
    component: AlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
