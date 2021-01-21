import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AlertModalComponent,
    AlertModalComponent,
    ConfirmModalComponent,
  ],
  imports: [CommonModule],
  exports: [AlertModalComponent],
  // entryComponents: [AlertModalComponent, ConfirmModalComponent], //não precisa aprtir da versão 9
})
export class SharedModule {}
