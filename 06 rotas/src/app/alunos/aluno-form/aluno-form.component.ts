import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormDesativar } from 'src/app/guards/Iform-desativar.guard';
import { AlunosService, Aluno } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, IFormDesativar {

  aluno: any;
  inscricao: Subscription = new Subscription();
  private formEdit: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === undefined) {
          this.aluno === {}
        }
      }
    );
  }

  onInputEdit() {
    this.formEdit = true;
  }

  getCanChangeRoute(): boolean {
    if (this.formEdit) {
      confirm('Tem certeza  que deseja sair sem salvar');
    }
    return true;
  }


  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
