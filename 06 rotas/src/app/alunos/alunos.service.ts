import { Injectable } from '@angular/core';

export interface Aluno {
  id: number;
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, nome: 'José', email: 'jose@hotmail.com' },
    { id: 2, nome: 'Maria', email: 'maria@hotmail.com' },
    { id: 3, nome: 'Fernando', email: 'fernando@hotmail.com' },
    { id: 4, nome: 'Hugo', email: 'hugo@hotmail.com' },
    { id: 5, nome: 'Júlia', email: 'julia@hotmail.com' },
  ];

  constructor() { }

  getAlunos(): Aluno[] {
    return this.alunos;
  }

  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return undefined;
  }
}
