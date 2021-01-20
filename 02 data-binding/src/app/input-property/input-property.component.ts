import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ['nomeCurso:nome'] // não é a convensão
})
export class InputPropertyComponent implements OnInit {
  @Input('nome') // é a convensão
  nomeCurso: string = ''; // o 'nome' é externo e o 'nomeCurso' é interno
  constructor() {}

  ngOnInit(): void {}
}
