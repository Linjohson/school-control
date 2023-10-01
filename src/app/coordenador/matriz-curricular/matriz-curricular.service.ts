import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatrizService {
  private baseUrl = 'http://localhost:8080/api/coordenador';

  constructor(private http: HttpClient) {}

  listarMatriz(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listarMatriz`);
  }

  adicionarMatriz(matriz: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/adicionarMatriz`, matriz);
  }

  atualizarMatriz(id: number, matriz: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/atualizarMatriz/${id}`, matriz);
  }

  deletarMatriz(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletarMatriz/${id}`);
  }

  // Implemente métodos semelhantes para outras entidades (disciplinas, matriz, etc.)
}
