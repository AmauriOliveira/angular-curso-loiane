
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNotFoundComponent } from "./curso-not-found/curso-not-found.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: '', component: HomeComponent },
  { path: 'not_found', component: CursoNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
