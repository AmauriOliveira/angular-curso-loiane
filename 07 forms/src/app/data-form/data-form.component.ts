import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    /*     this.formulario = new FormGroup({
          nome: new FormControl(null), //aqui vai a string que server de valor inicial
          email: new FormControl(null),
          endereco: new FormGroup({
            cep: new FormControl(null),
            ....
          })
        }); */
  }

  ngOnInit(): void { }

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
    let campoEmail = this.formulario.get('email');
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

  consultaCEP(): void {
    let cep = this.formulario.get('endereco.cep')?.value;
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep !== "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        this.resetEnderecoForm();

        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe((data: any) => this.populaDadosForm(data));
      }
    }
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
