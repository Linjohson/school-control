import { Component, OnInit } from '@angular/core';
import { SemestreService } from './semestres.service';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestres.component.html',
  styleUrls: ['./semestres.component.css']
})
export class SemestresComponent implements OnInit {
  semestres: any[] = [];
  semestre: any = { nome: '' };
  modoEdicao: boolean = false;
  mostrarAviso: boolean = false;
  nomeExistente: boolean = false; // Variável para rastrear semestre existente
  nomeOriginal: string = ''; // Variável para armazenar o nome original

  constructor(private semestreService: SemestreService) {}

  ngOnInit(): void {
    this.listarSemestres();
  }

  listarSemestres() {
    this.semestreService.listarSemestres().subscribe(
      (data) => {
        this.semestres = data;
      },
      (error) => {
        console.error('Erro ao listar semestres:', error);
      }
    );
  }

  adicionarOuAtualizarSemestre() {
    // Verificar se o campo está preenchido
    if (this.semestre.nome.trim() === '') {
      this.mostrarAviso = true;
      return;
    }

    // Verificar se o nome já existe apenas se for uma adição ou o nome foi modificado
    if(
      !this.modoEdicao ||
      (this.modoEdicao && this.semestre.nome !== this.nomeOriginal)
    ) {
      if (
        this.semestres.some((user) => user.nome === this.semestre.nome)
      ) {
        this.nomeExistente = true;
        return;
      } else {
        this.nomeExistente = false;
      }
    }

    {
      // ... (código para adicionar ou atualizar o semestre)
  
      if (this.modoEdicao) {
        // Atualizar semestre existente
        this.semestreService.atualizarSemestre(this.semestre.id, this.semestre).subscribe(
          (data) => {
            console.log('Resposta da atualização:', data);
            this.limparFormulario();
            this.listarSemestres(); // Recarrega a lista após a atualização
          },
          (error) => {
            console.error('Erro ao atualizar semestre:', error);
          }
        );
      } else {
        // Adicionar novo semestre
        this.semestreService.adicionarSemestre(this.semestre).subscribe(
          (data) => {
            console.log('Resposta da adição:', data);
            this.limparFormulario();
            this.listarSemestres(); // Recarrega a lista após a adição
          },
          (error) => {
            console.error('Erro ao adicionar semestre:', error);
          }
        );
      }
    }
  }

  editarSemestre(semestre: any) {
    this.semestre.id = semestre.id;
    this.semestre.nome = semestre.nome;
    this.modoEdicao = true;
    this.nomeOriginal = semestre.nome; // Armazena o nome original ao entrar no modo de edição
  }

  excluirSemestre(semestreId: number) {
    this.semestreService.deletarSemestre(semestreId).subscribe(
      () => {
        this.listarSemestres();
      },
      (error) => {
        console.error('Erro ao excluir semestre:', error);
      }
    );
  }

  limparFormulario() {
    this.semestre = { nome: '' };
    this.modoEdicao = false;
    this.mostrarAviso = false;
    this.nomeExistente = false;
    this.nomeOriginal = ''; // Limpar o nome original quando o formulário é limpo
  }
}
