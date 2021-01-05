import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario = this.formBuilder.group({
    nome: ['', [Validators.required, /* Validators.minLength(3),Validators.maxLength(25),*/],],//aqui vai a string que server de valor inicial
    email: ['', [Validators.required, Validators.email],],
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
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

  onSubmit(): void {
    this.http.post('https://httpbiny.org/post', JSON.stringify(this.formulario.value))
      .subscribe(data => {
        console.log(data);

        //limpa o form
        this.formulario.reset();
      }, (error: any) => alert('Deu erro'));
  }

  reset() {
    //limpa o form
    this.formulario.reset();
  }
}
