import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario = this.formBuilder.group({
    nome: [''],
    email: [''],
  });

  constructor(private formBuilder: FormBuilder) {
    /*     this.formulario = new FormGroup({
          nome: new FormControl(null), //aqui vai a string que server de valor inicial
          email: new FormControl(null),
        }); */

    /*  this.formulario = this.formBuilder.group({
       nome: [null],
       email: [null],
     }); */
  }

  ngOnInit(): void { }
}
