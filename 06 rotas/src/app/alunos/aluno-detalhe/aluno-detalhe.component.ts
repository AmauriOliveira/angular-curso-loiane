import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: Aluno = new Aluno(0, '', '');
  inscricao: Subscription = new Subscription();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    /*    this.inscricao = this.route.params.subscribe(
         (params: any) => {
           let id = params['id'];
           this.aluno = this.alunosService.getAluno(id);
         }
       ); */
    this.inscricao = this.route.data.subscribe(
      info => { this.aluno = info.aluno }
      // mesmo nome dado na resolver da rota
    );
  }

  editarContato(): void {
    this.router.navigate(['/alunos', this.aluno?.id, 'editar']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
