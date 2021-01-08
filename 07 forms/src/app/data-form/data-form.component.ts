import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Estado } from '../shared/models/estado';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { FormValidations } from '../shared/form-validations';
import { VereficaEmailService } from './services/verefica-email.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});

  estados: Observable<Estado[]> = new Observable();

  cargos: any[] = [];

  tecnologias: any[] = [];

  newsletterOptions: any[] = [];

  frameworks: string[] = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private vereficaEmailService: VereficaEmailService,
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

    // this.vereficaEmailService.vereficarEmail('amauri@amauri.com').subscribe();

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email], this.validarEmail.bind(this)],
      confirmarEmail: [null, FormValidations.equalsToOther('email')],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        logradouro: [null, Validators.required],
        complemento: [null],
        numero: [null, Validators.required],
        bairro: [null, Validators.required],
        localidade: [null, Validators.required],
        uf: [null, Validators.required],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: [null, Validators.required],
      termos: [false, Validators.pattern('true')],
      frameworks: this.buildFrameworks(),
    });
    /*     this.dropdownService.getEstadoBR()
          .subscribe((dados: any) => this.estados = dados); */
    this.estados = this.dropdownService.getEstadoBR();

    //exemplo
    this.cargos = this.dropdownService.getCargos();

    this.tecnologias = this.dropdownService.getTecnologias();

    this.newsletterOptions = this.dropdownService.getNewsLetter();
  }

  buildFrameworks() {

    const values = this.frameworks.map(v => new FormControl(false));

    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(2));
  }


  onSubmit(): void {
    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: any, i: number) => v ? this.frameworks[i] : null)
        .filter((v: any) => v !== null)
    });

    if (this.formulario.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify(valueSubmit))
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

  setCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: ' Dev Pl' }
    this.formulario.get('cargo')?.setValue(cargo);
  }

  compararCargo(obj1: any, obj2: any): boolean {
    return obj1 && obj2 ?
      (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel)
      : (obj1 === obj2);
  }

  setTecnologias() {
    this.formulario.get('tecnologias')?.setValue(['java', 'php']);
  }

  getFrameworksControls() {
    return this.formulario.get('frameworks') ? (<FormArray>this.formulario.get('frameworks')).controls : null;
  }

  validarEmail(formControl: FormControl) {
    return this.vereficaEmailService.vereficarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalid: true } : null));
  }

}
