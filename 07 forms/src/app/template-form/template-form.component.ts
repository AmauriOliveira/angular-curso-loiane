import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  nome: string;
  email: string;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: User = {
    nome: 'Amauri',
    email: 'amauri@hotmail.com',
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log('Form================================');
    console.log(form.value);
    console.log('User================================');
    console.log(this.usuario);
    console.log('====================================');

  }
}
