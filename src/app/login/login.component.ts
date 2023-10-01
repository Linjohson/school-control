import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const usernameControl = this.loginForm.get('username');
      const passwordControl = this.loginForm.get('password');
  
      if (usernameControl && passwordControl) {
        const username = usernameControl.value;
        const password = passwordControl.value;
  
        if (this.authService.login(username, password)) {
          if (username === 'admin') {
            this.router.navigate(['/admin']);
          } else if(username === 'coordenador'){
            this.router.navigate(['/coordenador']);
          } else if(username === 'professor'){
            this.router.navigate(['/professor']);
          }else if(username === 'aluno'){
            this.router.navigate(['/aluno']);
          }else {
            // Redirecione para outra página, se necessário
          }
        } else {
          // Exiba uma mensagem de erro para o usuário, informando que as credenciais estão incorretas
          // Você pode configurar isso na sua interface de usuário
          alert('Credenciais incorretas. Tente novamente.');
        }
      }
    }
  }
  
}
