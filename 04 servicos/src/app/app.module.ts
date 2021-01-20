import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { LogService } from './shared/log.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CursosModule, CriarCursoModule],
  providers: [
    // CursosService,
    LogService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
