import { Component, OnInit } from '@angular/core';
import { MatrizService } from './matriz-curricular/matriz-curricular.service';

@Component({
  selector: 'app-coordenador',
  templateUrl: './coordenador.component.html',
  styleUrls: ['./coordenador.component.css']
})
export class CoordenadorComponent implements OnInit {
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
