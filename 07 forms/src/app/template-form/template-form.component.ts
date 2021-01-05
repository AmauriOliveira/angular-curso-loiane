import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

interface User {
  nome: string | null;
  email: string | null;
  endereco: Endereco;
}
interface Endereco {
  cep: string | null;
  logradouro: string | null;
  complemento?: string | null;
  numero?: number | null;
  bairro: string | null;
  localidade: string | null;
  uf: string | null;
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
      logradouro: null,
      bairro: null,
      localidade: null,
      uf: null,
    }
  }
  constructor(private http: HttpClient) { }

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

  consultaCEP(cep: string) {
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep !== "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe((data: any) => this.usuario.endereco = {
            logradouro: data.logradouro,
            cep: data.cep,
            bairro: data.bairro,
            localidade: data.localidade,
            complemento: data.complemento,
            uf: data.uf,
          });
      }
    }
  }

}
