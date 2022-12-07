import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;
  categories = [null, 'Front-End', 'Back-End', 'Full-Stack'];

  constructor(
    private coursesService: CoursesService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  ngOnInit(): void {
    console.log('load');
  }

  onSubmit(): void {
    this.coursesService
      .save(this.form.value)
      .pipe(
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
    console.log('cancel');
  }
}
