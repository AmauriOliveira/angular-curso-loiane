import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    let values = value.split(' ');
    let result: string = '';

    for (let v of values) {
      result += this.capitalize(v) + ' ';
    }

    return result;
  }

  capitalize(word: string) {
    return (
      word.substring(0, 1).toLocaleUpperCase() +
      word.substring(1).toLocaleLowerCase()
    );
  }
}
