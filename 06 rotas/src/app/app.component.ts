import { Component } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rotas';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar: boolean) => this.mostrarMenu = mostrar);
  }

  ngOnDestroy() {
    this.authService.mostrarMenuEmitter.unsubscribe();
  }
}
