import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {
  private baseUrl = 'http://localhost:8080/api/coordenador';

  constructor(private http: HttpClient) {}

  listarDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listaDisciplina`);
  }

  adicionarDisciplina(disciplina: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/adicionarDisciplina`, disciplina);
  }

  atualizarDisciplina(id: number, disciplina: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/atualizarDisciplina/${id}`, disciplina);
  }

  deletarDisciplina(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletarDisciplina/${id}`);
  }

  // Implemente métodos semelhantes para outras entidades (disciplinas, disciplinas, etc.)
}
