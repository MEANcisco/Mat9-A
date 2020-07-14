import { Component, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 dat = {
   identifier: '',
   password: ''
 }
  ngOnInit(): void {
  }
 ngOnDestroy(): void {
   //Called once, before the instance is destroyed.
   //Add 'implements OnDestroy' to the class.
 }

 cerr(){
  this.dialog.closeAll();

 }
  constructor(private  dialog:  MatDialog, private  router:  Router, private lg: AuthService, private ts: ToastrService) { }
  login(){
  this.lg.login(this.dat).subscribe((data: any) => {
    // console.log(data);
    if (data) {
      this.ts.success('Has accedido con éxito!', 'Bienvenido ' + data.user.username);
      this.dialog.closeAll();
    } else {
      this.ts.warning('Hubo un problema', 'Revisa tu usuario o contraseña')
    }
    this.lg.guardrusr(JSON.stringify(data));
  })
  }



}
