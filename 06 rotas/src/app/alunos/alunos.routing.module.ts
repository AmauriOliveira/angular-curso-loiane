import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlunosGuard } from "../guards/aluno.guard";
import { AlunosDesativarGuard } from "../guards/alunos-desativar.guard";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosComponent } from "./alunos.component";

// hard code na frente para evitar colisão com :id
const alunosRoutes: Routes = [
  {
    path: '', component: AlunosComponent, canActivateChild: [AlunosGuard], children: [
      { path: 'novo', component: AlunoFormComponent, canDeactivate: [AlunosDesativarGuard], },
      { path: ':id', component: AlunoDetalheComponent, },
      { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDesativarGuard], },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule { }
