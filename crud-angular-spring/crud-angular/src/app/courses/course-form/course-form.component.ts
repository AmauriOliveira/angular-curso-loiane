import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CoursesService } from '../services/courses.service';

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
    private formBuilder: FormBuilder
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
    this.coursesService.save(this.form.value).subscribe();
  }

  onCancel(): void {
    console.log('cancel');
  }
}
