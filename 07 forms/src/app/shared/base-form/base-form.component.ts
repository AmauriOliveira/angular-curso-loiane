import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<br>',
})
export abstract class BaseFormComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit() { }

  abstract submit(): void;

  onSubmit() {
    if (this.formulario.valid) {
      this.submit();
    } else {
      this.vereficaValidacao(this.formulario);
    }
  }

  vereficaValidacao(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach((campo: string) => {
      const controle = formGroup.get(campo);

      controle?.markAsDirty();
      controle?.markAsTouched();

      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.vereficaValidacao(controle);
      }
    });
  }

  resetForm(): void {
    //limpa o form
    this.formulario.reset();
  }


  aplicaCssErro(nomeCampo: string) {
    let campo = this.formulario.get(nomeCampo);
    return {
      'is-invalid': !campo?.valid && (campo?.touched || campo?.dirty),
    };
  }

  vereficaEmailInvalido(): boolean {
    let campoEmail = this.formulario.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
    return true;
  }

}
