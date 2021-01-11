import { Estado } from './../models/estado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from '../models/cidade';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadoBR() {
    return this.http.get<Estado[]>('assets/dados/uf.json');
  }

  getCidadeBR(idUf: number) {
    return this.http.get<Cidade[]>('assets/dados/cidades.json')
      .pipe(
        map((cidades: Cidade[]) => cidades.filter(cidade => cidade.estado == idUf))
      )
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
