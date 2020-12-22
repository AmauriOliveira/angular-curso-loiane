import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: number = 16;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.ativo = !this.ativo;
  }

}
