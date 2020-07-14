import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(public auth: AuthService, public router: Router, public ts: ToastrService) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['']);
      this.ts.warning('Accede a tu cuenta o crea una si no la tienes!', 'Necesitas una cuenta!');
      return false;
    }
    return true;
  }
}
