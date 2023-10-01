import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CoordenadorComponent } from './coordenador/coordenador.component';
import { SemestresComponent } from './coordenador/semestres/semestres.component';
import { CursosComponent } from './coordenador/cursos/cursos.component';
import { DisciplinasComponent } from './coordenador/disciplinas/disciplinas.component';
import { MatrizCurricularComponent } from './coordenador/matriz-curricular/matriz-curricular.component';
import { LoginComponent } from './login/login.component';
import { ProfessorComponent } from './professor/professor.component';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CoordenadorComponent,
    SemestresComponent,
    CursosComponent,
    DisciplinasComponent,
    MatrizCurricularComponent,
    LoginComponent,
    ProfessorComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
