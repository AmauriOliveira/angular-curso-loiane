import { FormArray, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class FormValidations {

  static requiredMinCheckbox(min = 1) {
    const validator: ValidationErrors = (formArray: FormArray) => {
      const totalChecked = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : { required: true };
    };
    return validator;
  }

  static cepValidator(control: FormControl) {
    const cep = control.value;

    if (cep && cep !== '') {
      const validacep = /^\d{5}-\d{3}$/;

      return validacep.test(cep) ? null : { cepInvalido: true };
    }

    return null;
  }

  static equalsToOther(otherField: string) {
    const validator: ValidationErrors = (formControl: FormControl) => {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (field.value !== formControl.value) {
        return { notEqualToOther: true };
      }

      return null;
    };
    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any): any {
    const config: any = {
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'cepInvalido': 'CEP inválido.',
      'emailInvalid': 'Email já cadastrado!',
      'otEqualToOther': 'Campos não são iguais',
      'pattern': 'Campo inválido'
    };

    return config[validatorName];
  }
}
