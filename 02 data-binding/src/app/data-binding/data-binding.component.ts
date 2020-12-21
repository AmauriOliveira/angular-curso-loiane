import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  /* // pela boa pratica nunca deve ter mais de um estilo
     styles: [`
   .highlight {
    background-color: yellow ;
    font-weight: bold;
  }

   `] */
})

export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';

  urlImg: string = 'http://lorempixel.com.br/400/200';

  cursoAngular: boolean = true;

  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = ' Curso de Angular'

  valorInicial: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  getValor(): number {
    return 1;
  }

  botaoClicado(text: string): void {
    alert(text)
  }

  getCurtirCurso(): boolean {
    return true;
  }

  salvarValor(valor: string): void {
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent): void {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOver(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  onChangeValue(event) {
    console.log(event.newValue)
  }
}
