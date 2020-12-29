import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id: number = 0;

  inscricao: Subscription;

  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService,
  ) {
    // this.id = this.route.snapshot.params['id'];
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      // escreve no curso o que retornar da get curso que retorna ou um curso ou undefined
      this.curso = this.cursosService.getCurso(this.id)
      // caso o curso for vazio ele redireciona
      if (!this.curso) {
        this.router.navigate(['/not_found']);
      }
    });
  }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //   this.id = params['id'];
    // });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
