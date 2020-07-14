import { Observable } from 'rxjs';
import { UploadComponent } from './../../dialogos/upload/upload.component';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {InteraccionesService} from '../../servicios/interacciones.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
menus = ['item active', 'item', 'item'];
t = true;
t1 = false;
t2 = false;
evaluaciones: Observable<any[]>;
user = {
  email: '',
  nombrecompleto: '',
  whatsapp: '',
  nomapod: '',
  mailapod: '',
  whatsapod: ''
};
fechacre: Date;
  constructor(
    public as: AuthService,
    private http: HttpClient,
    private ts: ToastrService,
    private dialog: MatDialog,
    private inter: InteraccionesService
  ) { }


  ngOnInit(): void {
  this.user = this.as.UsuarioActual.user;
  this.inter.obtnotas().subscribe(
    (da: any) => {
      console.log(da);
      this.evaluaciones = da;
      console.log(da.payload());
    }
  );
  }

  activate(v) {
   switch (v) {
     case 0:
       this.menus[0] = 'item active';
       this.menus[1] = 'item';
       this.menus[2] = 'item';
       this.t = true;
       this.t1 = false;
       this.t2 = false;

       break;
       case 1:
        this.menus[1] = 'item active';
        this.menus[0] = 'item';
        this.menus[2] = 'item';
        this.t = false;
        this.t1 = true;
        this.t2 = false;
        break;
        case 2:
       this.menus[2] = 'item active';
       this.menus[1] = 'item';
       this.menus[0] = 'item';
       this.t = false;
       this.t1 = false;
       this.t2 = true;
       break;
     default:
       break;
   }
  }

  upload() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.as.UsuarioActual.user.id;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'myapp-no-padding-dialog';

    this.dialog.open(UploadComponent, dialogConfig);
  }
  actualizar() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + this.as.UsuarioActual.jwt
      })
    };
    this.http.put('https://api.mat9.cl/users/' + this.as.UsuarioActual.user.id, this.user, httpOptions).subscribe(
      data => { this.ts.success('Porfavor reingresa a la plataforma', 'El cambio se ha realizado con Éxito!'); },
      error => {this.ts.error('intente de otra forma', 'El cambio salió mal');}
    );
  }
}
