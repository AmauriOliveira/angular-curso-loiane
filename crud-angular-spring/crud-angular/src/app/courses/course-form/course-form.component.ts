import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form = this.formBuilder.group({
    name: [''],
    category: [''],
  });
  categories = [null, 'front-end', 'back-end', 'full-stack'];

  constructor(
    private coursesService: CoursesService,
    private formBuilder: NonNullableFormBuilder,
    private location: Location,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log('load');
  }

  onSubmit(): void {
    this.coursesService
      .save(this.form.value)
      .pipe(
        tap(() => {
          this.snackBar.open('Curso salvo com sucesso.', 'Fechar', {
            duration: 5000,
          });

          this.location.back();
        }),
        catchError(() => {
          this.snackBar.open('Falha ao salvar o curso.', 'Fechar', {
            duration: 5000,
          });

          return of(null);
        })
      )
      .subscribe();
  }

  onCancel(): void {
    this.location.back();
  }
}
