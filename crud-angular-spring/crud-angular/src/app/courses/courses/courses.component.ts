import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'front' },
    { _id: '2', name: 'NodeJs', category: 'back' },
    { _id: '3', name: 'React', category: 'front' },
    { _id: '4', name: 'Vue', category: 'front' },
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
