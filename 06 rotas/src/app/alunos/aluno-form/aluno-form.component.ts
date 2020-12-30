import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService, Aluno } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {
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

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
