import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

enum Type {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor(private bsModalService: BsModalService) {}

  private showAlert(message: string, type: Type, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.bsModalService.show(
      AlertModalComponent
    );
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string): any {
    this.showAlert(message, Type.DANGER);
  }

  showAlertSuccess(message: string): any {
    this.showAlert(message, Type.SUCCESS, 3000);
  }
}
