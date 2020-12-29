import { Injectable } from '@angular/core';

export interface Curso {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(): Curso[] {
    return [
      { id: 1, nome: 'Angular 2' },
      { id: 2, nome: 'Java' },
      { id: 3, nome: 'React' },
    ];
  }

  getCurso(id: number): Curso {
    let cursos = this.getCursos();
    let curso = cursos.filter(curso => curso.id == id)
    return curso[0];
  }

  constructor() { }
}
