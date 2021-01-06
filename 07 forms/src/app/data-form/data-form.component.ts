import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Estado } from '../shared/models/estado';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  formulario = this.formBuilder.group({
    nome: [
      '',
      [
        Validators.required /* Validators.minLength(3),Validators.maxLength(25),*/,
      ],
    ], //aqui vai a string que server de valor inicial
    email: ['', [Validators.required, Validators.email]],
    endereco: this.formBuilder.group({
      cep: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      complemento: [''],
      numero: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      localidade: ['', [Validators.required]],
      uf: ['', [Validators.required]],
    }),
  });

  estados: Estado[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
  ) {
    /*     this.formulario = new FormGroup({
          nome: new FormControl(null), //aqui vai a string que server de valor inicial
          email: new FormControl(null),
          endereco: new FormGroup({
            cep: new FormControl(null),
            ....
          })
        }); */
  }

  ngOnInit(): void {
    this.dropdownService.getEstadoBR()
      .subscribe((dados: any) => this.estados = dados);
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe(
          (data) => {
            console.log(data);

            //limpa o form
            this.formulario.reset();
          },
          (error: any) => alert('Deu erro')
        );
    } else {
      this.vereficaValidacao(this.formulario);
    }
  }

  vereficaValidacao(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((campo: string) => {
      const controle = formGroup.get(campo);

      controle?.markAsDirty();

      if (controle instanceof FormGroup) {
        this.vereficaValidacao(controle);
      }
    });
  }

  resetForm(): void {
    //limpa o form
    this.formulario.reset();
  }

  aplicaCssErro(nomeCampo: string) {
    let campoEmail = this.formulario.get(nomeCampo);
    return {
      'is-invalid': !campoEmail?.valid && (campoEmail?.touched || campoEmail?.dirty),
    };
  }

  vereficaEmailInvalido(): boolean {
    let campoEmail = this.formulario.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
    return true;
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep')?.value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados));
    }
    this.resetEnderecoForm();
  }

  populaDadosForm(data: any): void {

    this.formulario.patchValue({
      endereco: {
        logradouro: data.logradouro,
        cep: data.cep,
        bairro: data.bairro,
        localidade: data.localidade,
        complemento: data.complemento,
        uf: data.uf,
      },
    });
  }

  resetEnderecoForm(): void {

    this.formulario.patchValue({
      endereco: {
        logradouro: null,
        cep: null,
        bairro: null,
        localidade: null,
        complemento: null,
        uf: null,
      },
    });
  }

}
