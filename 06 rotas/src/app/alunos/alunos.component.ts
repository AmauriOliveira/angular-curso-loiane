import { Component, OnInit } from '@angular/core';
import { AlunosService, Aluno } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  // private
  alunos: Aluno[] = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

}
