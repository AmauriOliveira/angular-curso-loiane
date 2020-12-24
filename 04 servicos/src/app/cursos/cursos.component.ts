import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService],
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  //cursoService: CursosService;

  constructor(private cursoService: CursosService) {
    // this.cursoService = new CursosService();
    //this.cursoService = _cursoService;
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();

    CursosService.novoCursoCriado.subscribe(
      (curso: string) => this.cursos.push(curso)
    );
  }

}
