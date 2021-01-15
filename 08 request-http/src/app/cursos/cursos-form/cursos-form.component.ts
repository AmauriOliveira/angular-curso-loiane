import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
})
export class CursosFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private cursosService: CursosService,
    private alertModalService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const curso = this.route.snapshot.data['curso'];

    this.form = this.formBuilder.group({
      id: [curso.id], // pode ter campos que so existre no componente e não est]ao no template HTML
      nome: [
        curso.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
    });
    ///////// olds
    //old

    /*     this.route.params.subscribe((params: any) => {
      const { id } = params;

      const curso$ = this.cursosService.loadCursoById(id);

      curso$.subscribe((curso: Curso) => {
        this.updateForm(curso);
      });
    }); */

    //refactored old
    // this.route.params
    //   .pipe(
    //     map((params: any) => params.id),
    //     switchMap((id) => this.cursosService.loadCursoById(id))
    //   )
    //   .subscribe((curso: any) => this.updateForm(curso));

    // concatMap -> ordem da request importa
    // mergeMap -> caso a ordem da respostas não importar
    // exhaustMap -> faz uma request e espera a response para depois fazer outra request
  }

  // updateForm(curso: Curso) {
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome,
  //   });
  // }

  /*  hasError(nomeCampo: string) {
    return this.form.get(nomeCampo)?.errors;
  } */

  onSubmit(): void {
    this.submitted = true;

    let msgSuccess = 'Curso criado com sucesso!';
    let msgError = 'Erro ao criar curso, tente novamente!';
    if (this.form.value.id) {
      msgSuccess = 'Curso atualizado com sucesso!';
      msgError = 'Erro ao atualizar curso, tente novamente!';
    }

    if (this.form.valid) {
      this.cursosService.saveCurso(this.form.value).subscribe(
        (success: any) => {
          this.alertModalService.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        (error: any) => this.alertModalService.showAlertDanger(msgError)
      );

      /*       if (this.form.value.id > 0) {
        this.cursosService.updateCurso(this.form.value).subscribe(
          (success: any) => {
            this.alertModalService.showAlertSuccess(
              'Curso atualizado com sucesso.'
            );
            this.location.back();
          },
          (error: any) =>
            this.alertModalService.showAlertDanger('Erro ao atualizar.')
        );
      } else {
        this.cursosService.createCurso(this.form.value).subscribe(
          (success: any) => {
            this.alertModalService.showAlertSuccess('Curso salvo com sucesso.');
            this.location.back();
          },
          (error: any) =>
            this.alertModalService.showAlertDanger('Erro ao criar Curso.')
        );
      } */
    }
  }

  onCancel(): void {
    this.submitted = false;
    this.form.reset();
  }
}
