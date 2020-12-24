import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from '../shared/log.service';
@Injectable()
export class CursosService {

  emitirCursoCriado: EventEmitter<string> = new EventEmitter();

  static novoCursoCriado: EventEmitter<string> = new EventEmitter();

  private cursos: string[] = ['Angular', 'NodeJs', 'React'];

  constructor(private logService: LogService) {
    console.log('====================================');
    console.log('CursosService');
    console.log('====================================');
  }

  getCursos(): string[] {
    this.logService.consoleLog('Carregando lista de cursos')
    return this.cursos;
  }

  setCurso(curso: string): void {
    this.logService.consoleLog(`Criando um novo curso de ${curso}.`)
    this.cursos.push(curso);

    this.emitirCursoCriado.emit(curso);

    CursosService.novoCursoCriado.emit(curso);
  }
}
