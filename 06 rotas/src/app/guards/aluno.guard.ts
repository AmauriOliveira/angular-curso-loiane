import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    // desativado porem é util e funcinal
  /*   if (state.url.includes('editar')) {
      alert('Usuário sem acesso');
      return false;
    } */

    return true;
  }

}
