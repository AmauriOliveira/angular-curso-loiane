import { Component, Input, OnInit } from '@angular/core';

interface Book {
  title: string;
  rating: number;
  page: number;
  price: number;
  date: Date;
  url: string;
};


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  book: Book = {
    title: 'O livro ilustrado dos maus argumentos',
    rating: 4.54321,
    page: 64,
    price: 44.99,
    date: new Date(2017, 2, 16),
    url: 'https://www.amazon.com.br/dp/8543104785/ref=cm_sw_em_r_mt_dp_7XD6FbPH9GPYG'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(nomeCurso: string) {
    this.livros.push(nomeCurso);
  }

}
