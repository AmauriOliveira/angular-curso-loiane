import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  // cursos: Curso[] = [];

  cursos$!: Observable<Curso[]>;

  constructor(private service: CursosService) { }

  ngOnInit() {
    // this.service.listAll().subscribe(dataCursos => this.cursos = dataCursos);
    this.cursos$ = this.service.listAll();
  }

}
