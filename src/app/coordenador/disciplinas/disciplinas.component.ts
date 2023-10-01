import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from './disciplinas.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  disciplinas: any[] = [];
  disciplina: any = { nome: '' };
  modoEdicao: boolean = false;
  mostrarAviso: boolean = false;
  nomeExistente: boolean = false; // Variável para rastrear disciplina existente
  nomeOriginal: string = ''; // Variável para armazenar o nome original

  constructor(private disciplinasService: DisciplinaService) {}

  ngOnInit(): void {
    this.listarDisciplinas();
  }

  listarDisciplinas() {
    this.disciplinasService.listarDisciplinas().subscribe(
      (data) => {
        this.disciplinas = data;
      },
      (error) => {
        console.error('Erro ao listar disciplinas:', error);
      }
    );
  }

  adicionarOuAtualizarDisciplina() {
    // Verificar se o campo está preenchido
    if (this.disciplina.nome.trim() === '') {
      this.mostrarAviso = true;
      return;
    }

    // Verificar se o nome já existe apenas se for uma adição ou o nome foi modificado
    if(
      !this.modoEdicao ||
      (this.modoEdicao && this.disciplina.nome !== this.nomeOriginal)
    ) {
      if (
        this.disciplinas.some((user) => user.nome === this.disciplina.nome)
      ) {
        this.nomeExistente = true;
        return;
      } else {
        this.nomeExistente = false;
      }
    }

    {
      // ... (código para adicionar ou atualizar o disciplina)
  
      if (this.modoEdicao) {
        // Atualizar disciplina existente
        this.disciplinasService.atualizarDisciplina(this.disciplina.id, this.disciplina).subscribe(
          (data) => {
            console.log('Resposta da atualização:', data);
            this.limparFormulario();
            this.listarDisciplinas(); // Recarrega a lista após a atualização
          },
          (error) => {
            console.error('Erro ao atualizar disciplina:', error);
          }
        );
      } else {
        // Adicionar novo disciplina
        this.disciplinasService.adicionarDisciplina(this.disciplina).subscribe(
          (data) => {
            console.log('Resposta da adição:', data);
            this.limparFormulario();
            this.listarDisciplinas(); // Recarrega a lista após a adição
          },
          (error) => {
            console.error('Erro ao adicionar disciplina:', error);
          }
        );
      }
    }
  }

  editarDisciplina(disciplina: any) {
    this.disciplina.id = disciplina.id;
    this.disciplina.nome = disciplina.nome;
    this.modoEdicao = true;
    this.nomeOriginal = disciplina.nome; // Armazena o nome original ao entrar no modo de edição
  }

  excluirDisciplina(disciplinaId: number) {
    this.disciplinasService.deletarDisciplina(disciplinaId).subscribe(
      () => {
        this.listarDisciplinas();
      },
      (error) => {
        console.error('Erro ao excluir disciplina:', error);
      }
    );
  }

  limparFormulario() {
    this.disciplina = { nome: '' };
    this.modoEdicao = false;
    this.mostrarAviso = false;
    this.nomeExistente = false;
    this.nomeOriginal = ''; // Limpar o nome original quando o formulário é limpo
  }
}
