import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';

import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
})
export class CursosListaComponent implements OnInit {
  deleteModalRef!: BsModalRef;

  @ViewChild('deleteModal') deleteModal: any;

  cursos$!: Observable<Curso[]>;

  error$ = new Subject<boolean>();

  cursoSelecinado!: Curso;

  constructor(
    private cursosService: CursosService,
    // private modalService: BsModalService,
    private alertModalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.service.listAll().subscribe(dataCursos => this.cursos = dataCursos);
    this.onRefresh();
  }

  onRefresh(): void {
    this.cursos$ = this.cursosService.listAllCurso().pipe(
      // pode colocar outros operadores da rxjs... porem deixei o catchError para o fim
      catchError((error: any) => {
        console.error(error);
        // this.error$.next(true);
        this.alertModalService.showAlertDanger(
          'Erro ao carregar cursos. Tente novamente mais tarde.'
        );
        return EMPTY;
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

  onEdit(id: number): void {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(curso: Curso): any {
    this.cursoSelecinado = curso;

    /*   this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: 'modal-sm',
    }); */
    const result$ = this.alertModalService.showConfirm(
      'Confirmção',
      'Tem certeza que deseja remover esse curso?',
      'Sim',
      'Não'
    );

    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap((result) =>
          result ? this.cursosService.removeCurso(curso.id) : EMPTY
        )
      )
      .subscribe(
        (success: any) => {
          this.onRefresh();
        },
        (error: any) => {
          this.alertModalService.showAlertDanger(
            'Erro ao remover curso. Tente novamente mais tarde.'
          );
        }
      );
  }
  onConfirmDelete(): void {
    this.cursosService.removeCurso(this.cursoSelecinado.id).subscribe();
  }

  onDeclineDelete(): void {
    this.deleteModalRef.hide();
  }
}
