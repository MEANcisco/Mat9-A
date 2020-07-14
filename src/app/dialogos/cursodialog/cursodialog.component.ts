import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/servicios/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-cursodialog',
  templateUrl: './cursodialog.component.html',
  styleUrls: ['./cursodialog.component.css']
})
export class CursodialogComponent implements OnInit {
curso: any;
videoportada = this.data.contenidos[1].video;
cursos: any[] = [];
user = {
  cursos: this.cursos
};
  constructor(
    private dialogRef: MatDialogRef<CursodialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private as: AuthService,
    private ts: ToastrService,
    private http: HttpClient) {
}

ngOnInit() {
this.curso = this.data;
this.videoportada = this.curso.contenidos[0].video;
}

abrircurso() {
  this.cursos[0] = this.data.id;
  if (this.as.isAuthenticated) { const dialogConfig = new MatDialogConfig();
                                 dialogConfig.data = this.curso.contenidos;
                                 dialogConfig.disableClose = true;
                                 dialogConfig.autoFocus = true;
                                 dialogConfig.panelClass = 'myapp-no-padding-dialog';
                                 dialogConfig.height = '100%';
                                 dialogConfig.width = '100%';
  }

  if (!this.as.isAuthenticated) {
    this.ts.warning('Para acceder al curso, puedes comenzar con una cuenta gratuita!', 'Atención!');

  }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer ' + this.as.UsuarioActual.jwt
    })
  };
  this.http.put('https://api.mat9.cl/users/' + this.as.UsuarioActual.user.id , this.user, httpOptions).subscribe(
    data => { this.ts.success('Porfavor reingresa a la plataforma', 'El cambio se ha realizado con Éxito!');
              console.log(data);},
    error => {this.ts.error('intente de otra forma', 'El cambio salió mal'); }
  ); }

Cerrar() {
  this.dialogRef.close();
}
}
