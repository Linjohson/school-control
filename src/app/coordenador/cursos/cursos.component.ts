import { Component, OnInit } from '@angular/core';
import { CursoService } from './cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];
  curso: any = { nome: '' };
  modoEdicao: boolean = false;
  mostrarAviso: boolean = false;
  nomeExistente: boolean = false; // Variável para rastrear curso existente
  nomeOriginal: string = ''; // Variável para armazenar o nome original

  constructor(private cursosService: CursoService) {}

  ngOnInit(): void {
    this.listarCursos();
  }

  listarCursos() {
    this.cursosService.listarCursos().subscribe(
      (data) => {
        this.cursos = data;
      },
      (error) => {
        console.error('Erro ao listar cursos:', error);
      }
    );
  }

  adicionarOuAtualizarCurso() {
    // Verificar se o campo está preenchido
    if (this.curso.nome.trim() === '') {
      this.mostrarAviso = true;
      return;
    }

    // Verificar se o nome já existe apenas se for uma adição ou o nome foi modificado
    if(
      !this.modoEdicao ||
      (this.modoEdicao && this.curso.nome !== this.nomeOriginal)
    ) {
      if (
        this.cursos.some((user) => user.nome === this.curso.nome)
      ) {
        this.nomeExistente = true;
        return;
      } else {
        this.nomeExistente = false;
      }
    }

    {
      // ... (código para adicionar ou atualizar o curso)
      if (this.modoEdicao) {
        // Atualizar curso existente
        this.cursosService.atualizarCurso(this.curso.id, this.curso).subscribe(
          (data) => {
            console.log('Resposta da atualização:', data);
            this.limparFormulario();
            this.listarCursos(); // Recarrega a lista após a atualização
          },
          (error) => {
            console.error('Erro ao atualizar curso:', error);
          }
        );
      } else {
        // Adicionar novo curso
        this.cursosService.adicionarCurso(this.curso).subscribe(
          (data) => {
            console.log('Resposta da adição:', data);
            this.limparFormulario();
            this.listarCursos(); // Recarrega a lista após a adição
          },
          (error) => {
            console.error('Erro ao adicionar curso:', error);
          }
        );
      }
    }
  }

  editarCurso(curso: any) {
    this.curso.id = curso.id;
    this.curso.nome = curso.nome;
    this.modoEdicao = true;
    this.nomeOriginal = curso.nome; // Armazena o nome original ao entrar no modo de edição
  }

  excluirCurso(cursoId: number) {
    this.cursosService.deletarCurso(cursoId).subscribe(
      () => {
        this.listarCursos();
      },
      (error) => {
        console.error('Erro ao excluir curso:', error);
      }
    );
  }

  limparFormulario() {
    this.curso = { nome: '' };
    this.modoEdicao = false;
    this.mostrarAviso = false;
    this.nomeExistente = false;
    this.nomeOriginal = ''; // Limpar o nome original quando o formulário é limpo
  }
}
