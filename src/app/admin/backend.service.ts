import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseUrl = 'http://localhost:8080/api/administrador';
  private usuariosSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    this.listarUsuariosFromApi();
  }

  listarUsuarios(): Observable<any[]> {
    return this.usuariosSubject.asObservable();
  }

  private listarUsuariosFromApi() {
    this.http.get<any[]>(`${this.baseUrl}/listaUsuarios`).subscribe((data) => {
      this.usuariosSubject.next(data);
    });
  }

  adicionarUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/adicionarUsuario`, usuario).pipe(
      tap((data) => {
        this.usuariosSubject.next([...this.usuariosSubject.value, data]);
      })
    );
  }

  atualizarUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/atualizarUsuario/${id}`, usuario).pipe(
      tap(() => {
        const usuarios = this.usuariosSubject.value;
        const index = usuarios.findIndex((u) => u.id === id);
        if (index !== -1) {
          usuarios[index] = usuario;
          this.usuariosSubject.next([...usuarios]);
        }
      })
    );
  }

  excluirUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletarUsuario/${id}`).pipe(
      tap(() => {
        const usuarios = this.usuariosSubject.value;
        const updatedUsuarios = usuarios.filter((u) => u.id !== id);
        this.usuariosSubject.next([...updatedUsuarios]);
      })
    );
  }
}
