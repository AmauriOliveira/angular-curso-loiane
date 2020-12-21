import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor: number = 5;

  title: 'Não bugue o teste';

  deletarCiclo: boolean = false;

  mudarValor(): void {
    this.valor++;
  }

  destruirCiclo(): void {
    this.deletarCiclo = true;
  }
}
