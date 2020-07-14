import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'protractor';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  informacion = {
    username: '',
    email: '',
    password: '',
    pais: '',

    nombrecompleto: '',
    rut: '',
    whatsapp: '',
  cursoactual: '',

nomapod: '',
mailapod: '',
whatsapod: ''  };
  constructor(private AS: AuthService,
              private ts: ToastrService,
              private dialogRef: MatDialogRef<RegistroComponent>) { }

  ngOnInit(): void {
  }
  cerr(

  ){
    this.dialogRef.close();
  }
registrar(){
  this.AS.register(this.informacion).subscribe(
    (data: any) => this.ts.success((data.user.nombrecompleto), 'Perfecto!'),
    error => this.ts.error((error.error.message[0].messages[0].message), 'Error!')
  );
}

  enviar(){
    console.log(this.informacion);
  }
}
