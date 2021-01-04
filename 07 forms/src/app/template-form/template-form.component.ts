import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

interface User {
  nome: string | null;
  email: string | null;
  endereco: {
    cep: string | null;
    numero: number | null;
    complemento?: string | null;
    rua: string | null;
    bairro: string | null;
    cidade: string | null;
    estado: string | null;
  }
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: User = {
    nome: null,
    email: null,
    endereco: {
      cep: null,
      numero: 0,
      complemento: null,
      rua: null,
      bairro: null,
      cidade: null,
      estado: null,
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('Form================================');
    console.log(form.value);
    console.log('User================================');
    console.log(this.usuario);
    console.log('====================================');

  }

  aplicaCssErro(campo: NgModel) {
    return {
      'is-invalid': !campo.valid && campo.touched,
    }
  }
}
