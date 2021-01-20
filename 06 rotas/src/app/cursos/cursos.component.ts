import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService, Curso } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  pagina: number = 1;
  inscricao: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  proximaPagina(): void {
    //this.pagina++;
    this.router.navigate(['/cursos'], {
      queryParams: { pagina: ++this.pagina },
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
