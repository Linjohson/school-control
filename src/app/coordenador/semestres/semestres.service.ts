import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SemestreService {
  private baseUrl = 'http://localhost:8080/api/coordenador';

  constructor(private http: HttpClient) {}

  listarSemestres(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listaSemestre`);
  }

  adicionarSemestre(semestre: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/adicionarSemestre`, semestre);
  }

  atualizarSemestre(id: number, semestre: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/atualizarSemestre/${id}`, semestre);
  }

  deletarSemestre(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletarSemestre/${id}`);
  }

  // Implemente métodos semelhantes para outras entidades (disciplinas, cursos, etc.)
}
