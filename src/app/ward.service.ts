import { ToastrService } from 'ngx-toastr';
import { RecursosService } from './recursos/recursos.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class WardService {

  constructor(private rs: RecursosService, public router: Router, public ts: ToastrService) { }
  canActivate(): boolean {
    if (!this.rs.contenidos) {
      this.router.navigate(['']);
      this.ts.warning('Selecciona un curso antes de acceder a esta direcciòn!', 'Lo sentimos!');
      return false;
    }
    return true;
  }
}
