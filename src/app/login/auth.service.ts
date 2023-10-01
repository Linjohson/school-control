import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Simule uma lógica de autenticação, por exemplo, comparando credenciais
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      return true;
    }else if (username === 'coordenador' && password === 'coordenador') {
      this.isAuthenticated = true;
      return true;

    }else if (username === 'professor' && password === 'professor') {
      this.isAuthenticated = true;
      return true;

    }else if (username === 'aluno' && password === 'aluno') {
      this.isAuthenticated = true;
      return true;

    }else {
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}

