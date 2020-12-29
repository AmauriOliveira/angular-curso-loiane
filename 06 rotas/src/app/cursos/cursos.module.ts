import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CursosComponent } from './cursos.component';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component'
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from "./cursos.routing.module";

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNotFoundComponent,
  ]
  ,
  providers: [CursosService],
})

export class CursosModule { }
