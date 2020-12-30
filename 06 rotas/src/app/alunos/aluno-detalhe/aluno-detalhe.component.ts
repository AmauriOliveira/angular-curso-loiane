import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AlunosService, Aluno } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: Aluno | undefined;
  inscricao: Subscription;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }

  ngOnInit(): void {
  }

  editarContato(): void {
    this.router.navigate(['/alunos', this.aluno?.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
