import { Component, OnInit } from '@angular/core';

interface IPessoa {
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'Amauri';

  pessoa: IPessoa = {
    nome: 'Amauri Oliveira',
    idade: 34
  }


  constructor() { }

  ngOnInit(): void {
  }

}
