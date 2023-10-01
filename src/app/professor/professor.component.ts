import { Component, OnInit } from '@angular/core';
import { MatrizService } from '../coordenador/matriz-curricular/matriz-curricular.service';

@Component({
  selector: 'app-coordenador',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  matrizesCurriculares: any[] = [];
  matricesCurriculares: any;

  constructor(private matrizService: MatrizService) {}

  // coordenador.component.ts
ngOnInit(): void {
  // Use o método listarMatriz() do serviço para obter as matrizes curriculares
  const storedMatrices = localStorage.getItem('matricesCurriculares');
  if (storedMatrices) {
    this.matricesCurriculares = JSON.parse(storedMatrices);
    console.log('Matrizes Curriculares:', this.matricesCurriculares); // Adicione esta linha
  }
}

}
