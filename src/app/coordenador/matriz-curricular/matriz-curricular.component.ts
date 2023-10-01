import { Component, OnInit } from '@angular/core';
import { MatrizService } from './matriz-curricular.service';
import { CursoService } from '../cursos/cursos.service';
import { SemestreService } from '../semestres/semestres.service';
import { DisciplinaService } from '../disciplinas/disciplinas.service';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz-curricular.component.html',
  styleUrls: ['./matriz-curricular.component.css']
})
export class MatrizCurricularComponent implements OnInit {
  matrizs: any[] = [];
  matriz: any = { nome: '' };
  cursos: any[] = [];
  semestres: any[] = [];
  disciplinas: any[] = [];
  modoEdicao: boolean = false;
  mostrarAviso: boolean = false;
  nomeExistente: boolean = false; // Variável para rastrear matriz existente
  nomeOriginal: string = ''; // Variável para armazenar o nome original

  selectedCurso: any[] = [];
  selectedSemestre: any[] = [];
  selectedDisciplinas: any[] = [];
  matricesCurriculares: any[] = [];

  constructor(
    private matrizService: MatrizService,
    private cursosService: CursoService,
    private semestreService: SemestreService,
    private disciplinasService: DisciplinaService
  ) { }


  ngOnInit(): void {
    this.listarCursos();
    this.listarSemestres();
    this.listarDisciplinas();
    const storedMatrices = localStorage.getItem('matricesCurriculares');
    if (storedMatrices) {
      this.matricesCurriculares = JSON.parse(storedMatrices);
    } else {
      this.exibirSelecoes();
    }
  }

  // matriz-curricular.component.ts
  exibirSelecoes() {
    if (
      this.selectedCurso.length === 0 ||
      this.selectedSemestre.length === 0 ||
      this.selectedDisciplinas.length === 0
    ) {
      alert('Por favor, selecione um curso, um semestre e pelo menos uma disciplina.');
      return;
    }

    const novaMatrizCurricular = {
      curso: this.selectedCurso,
      semestre: this.selectedSemestre,
      disciplinas: this.selectedDisciplinas
    };

    // Adicione a matriz criada ao array matricesCurriculares
    this.matricesCurriculares.push(novaMatrizCurricular);

    // Limpe as seleções após salvar
    this.selectedCurso = [];
    this.selectedSemestre = [];
    this.selectedDisciplinas = [];

    // Armazene no Local Storage
    localStorage.setItem('matricesCurriculares', JSON.stringify(this.matricesCurriculares));

    console.log('Matriz Curricular Salva:', novaMatrizCurricular);
  }


  excluirMatriz(index: number) {
    if (confirm('Tem certeza de que deseja excluir esta matriz curricular?')) {
      this.matricesCurriculares.splice(index, 1);

      localStorage.setItem('matricesCurriculares', JSON.stringify(this.matricesCurriculares));
    }
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

  limparFormulario() {
    this.matriz = { nome: '' };
    this.modoEdicao = false;
    this.mostrarAviso = false;
    this.nomeExistente = false;
    this.nomeOriginal = ''; // Limpar o nome original quando o formulário é limpo
    localStorage.setItem('matricesCurriculares', JSON.stringify(this.matricesCurriculares));
  }
}
