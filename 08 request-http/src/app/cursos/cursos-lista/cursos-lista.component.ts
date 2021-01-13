import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
})
export class CursosListaComponent implements OnInit {
  // cursos: Curso[] = [];
  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: CursosService,
    private alertModalService: AlertModalService
  ) {}

  ngOnInit() {
    // this.service.listAll().subscribe(dataCursos => this.cursos = dataCursos);
    this.onRefresh();
  }

  onRefresh(): void {
    this.cursos$ = this.service.listAll().pipe(
      // pode colocar outros operadores da rxjs... porem deixei o catchError para o fim
      catchError((error: any) => {
        console.error(error);
        // this.error$.next(true);
        this.alertModalService.showAlertDanger(
          'Erro ao carregar cursos. Tente novamente mais tarde.'
        );
        return empty();
      })
    );
    // this.service.list()
    // .pipe(
    //   catchError(error => empty())
    // )
    // .subscribe(
    //   dados => {
    //     console.log(dados);
    //   }
    //   // ,error => console.error(error),
    //   // () => console.log('Obserservable completo!')
    // );
  }
}
