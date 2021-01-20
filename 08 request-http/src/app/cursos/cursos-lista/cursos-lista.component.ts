import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';

import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Curso } from '../curso';
//import { CursosService } from '../cursos.service';
import { Cursos2Service } from '../cursos2.service';

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
    private cursosService: Cursos2Service,
    private alertModalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.service.listAll().subscribe(dataCursos => this.cursos = dataCursos);
    this.onRefresh();
  }

  onRefresh(): void {
    this.cursos$ = this.cursosService.listAll().pipe(
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
    //   catchError(error => EMPTY)
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
          result ? this.cursosService.remove(curso.id) : EMPTY
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
    this.cursosService.remove(this.cursoSelecinado.id).subscribe(
      (success: any) => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      (error: any) => {
        this.alertModalService.showAlertDanger(
          'Erro ao remover curso. Tente novamente mais tarde.'
        );
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete(): void {
    this.deleteModalRef.hide();
  }
}
