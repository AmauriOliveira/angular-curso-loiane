import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) {}

  fazerLogin({ nome, senha }: Usuario): void {
    if (nome === 'amauri' && senha === 'oliveira') {
      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAuntenticado(): boolean {
    return this.usuarioAutenticado;
  }
}
