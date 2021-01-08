import { Estado } from './../models/estado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  public getEstadoBR() {
    return this.http.get<Estado[]>('assets/dados/uf.json');
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: ' Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: ' Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: ' Dev Sr' },
    ]
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'Javascript' },
      { nome: 'typescript', desc: 'Typescript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' },

    ]
  }

  getNewsLetter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' },
      { valor: 't', desc: 'Talves' },
    ]
  }

}
