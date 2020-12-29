import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CursosComponent } from './cursos.component';
import { CursoNotFoundComponent } from './curso-not-found/curso-not-found.component'
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNotFoundComponent,]
  ,
  providers: [CursosService],
})

export class CursosModule { }
