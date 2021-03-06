import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs/operators';

import { Curso } from './curso';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) {}

  listAllCurso(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API).pipe(
      delay(2000) //fins de exemplo
      //tap(console.log)
    );
  }

  loadCursoById(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  private createCurso(curso: Curso): any {
    return this.http.post(this.API, curso).pipe(take(1));
  }

  private updateCurso(curso: Curso): any {
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  saveCurso(curso: Curso): any {
    if (curso.id > 0) {
      return this.updateCurso(curso);
    } else {
      return this.createCurso(curso);
    }
  }

  removeCurso(id: number): any {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
