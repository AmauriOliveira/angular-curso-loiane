import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Curso } from '../cursos/curso';
import { CursosService } from '../cursos/cursos.service';

@Injectable({
  providedIn: 'root',
})
export class CursoResolverGuard implements Resolve<Curso> {
  constructor(private cursoService: CursosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Curso> {
    if (route.params?.id) {
      return this.cursoService.loadCursoById(route.params['id']);
    }

    return of({
      id: 0,
      nome: '',
    });
  }
}
