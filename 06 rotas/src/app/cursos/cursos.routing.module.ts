
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNotFoundComponent } from "./curso-not-found/curso-not-found.component";
import { CursosComponent } from "./cursos.component";

const cursosRoutes: Routes = [
  { path: '', component: CursosComponent },
  { path: ':id', component: CursoDetalheComponent },
  { path: 'not_found', component: CursoNotFoundComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
