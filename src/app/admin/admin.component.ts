import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usuarios: any[] = [];
  usuario: any = { nome: '', matricula: '' };
  modoEdicao: boolean = false;
  mostrarAviso: boolean = false; // Variável para controlar a exibição do aviso
  matriculaExistente: boolean = false; // Variável para rastrear matrícula existente
  matriculaOriginal: string = ''; // Variável para armazenar a matrícula original

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.backendService.listarUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Erro ao listar usuários:', error);
      }
    );
  }

  adicionarOuAtualizarUsuario() {
    console.log('Dados do usuário:', this.usuario);

    // Verificar se os campos estão preenchidos
    if (this.usuario.nome.trim() === '' || this.usuario.matricula.trim() === '') {
      this.mostrarAviso = true;
      return;
    }

    // Verificar se a matrícula já existe apenas se for uma adição ou a matrícula foi modificada
    if (
      !this.modoEdicao ||
      (this.modoEdicao && this.usuario.matricula !== this.matriculaOriginal)
    ) {
      if (
        this.usuarios.some((user) => user.matricula === this.usuario.matricula)
      ) {
        this.matriculaExistente = true;
        return;
      } else {
        this.matriculaExistente = false;
      }
    }

    if (this.modoEdicao) {
      // Se estiver em modo de edição, atualize o usuário existente
      this.backendService.atualizarUsuario(this.usuario.id, this.usuario).subscribe(
        (data) => {
          console.log('Resposta da atualização:', data);
          this.limparFormulario();
        },
        (error) => {
          console.error('Erro ao atualizar usuário:', error);
        }
      );
    } else {
      // Caso contrário, adicione um novo usuário
      this.backendService.adicionarUsuario(this.usuario).subscribe(
        (data) => {
          console.log('Resposta da adição:', data);
          this.limparFormulario();
        },
        (error) => {
          console.error('Erro ao adicionar usuário:', error);
        }
      );
    }
  }

  editarUsuario(usuario: any) {
    this.usuario.id = usuario.id;
    this.usuario.nome = usuario.nome;
    this.usuario.matricula = usuario.matricula;
    this.modoEdicao = true;
    this.matriculaOriginal = usuario.matricula; // Armazena a matrícula original ao entrar no modo de edição
  }

  excluirUsuario(userId: number) {
    this.backendService.excluirUsuario(userId).subscribe(
      (data) => {
        this.listarUsuarios();
      },
      (error) => {
        console.error('Erro ao excluir usuário:', error);
      }
    );
  }

  limparFormulario() {
    this.usuario = { nome: '', matrícula: '' };
    this.modoEdicao = false;
    this.mostrarAviso = false;
    this.matriculaExistente = false;
    this.matriculaOriginal = ''; // Limpar a matrícula original quando o formulário é limpo
  }
}
