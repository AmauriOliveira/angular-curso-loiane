import { Injectable, EventEmitter } from "@angular/core";
@Injectable()
export class CursosService {

   emitirCursoCriado: EventEmitter<string> = new EventEmitter();

  static novoCursoCriado: EventEmitter<string> = new EventEmitter();

  private cursos: string[] = ['Angular', 'NodeJs', 'React'];

  constructor() {
    console.log('====================================');
    console.log('CursosService');
    console.log('====================================');
  }

  getCursos(): string[] {
    return this.cursos;
  }

  setCurso(curso: string): void {
    this.cursos.push(curso);

    this.emitirCursoCriado.emit(curso);

    CursosService.novoCursoCriado.emit(curso);
  }
}
