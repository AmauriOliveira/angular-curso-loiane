import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
// import { AlunosGuard } from "./guards/aluno.guard";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/curso.guard";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard], canActivateChild: [CursosGuard], canLoad: [AuthGuard],
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard], canLoad: [AuthGuard], /*canActivateChild: [AlunosGuard],*/
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
