import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private baseUrl = 'http://localhost:8080/api/coordenador';

  constructor(private http: HttpClient) {}

  listarCursos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listaCurso`);
  }

  adicionarCurso(curso: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/adicionarCurso`, curso);
  }

  atualizarCurso(id: number, curso: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/atualizarCurso/${id}`, curso);
  }

  deletarCurso(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletarCurso/${id}`);
  }

  // Implemente métodos semelhantes para outras entidades (disciplinas, cursos, etc.)
}