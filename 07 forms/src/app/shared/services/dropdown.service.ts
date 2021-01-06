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
}
