import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { RecursosService } from './../../recursos/recursos.service';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/servicios/sidebar.service';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CursodialogComponent } from 'src/app/dialogos/cursodialog/cursodialog.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  faAlignLeft = faSlidersH;
  videos: any[];
  cursoshaber: any[];
  cursosobt;
  constructor(private sb: SidebarService, private http: HttpClient,
              private dialog: MatDialog, public rs: RecursosService,
              public as: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.obtCursos();
    this.as.avatar();

  }

  abrircurso(curAct) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = curAct;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'myapp-no-padding-dialog';

    this.dialog.open(CursodialogComponent, dialogConfig);
  }
  vercurso(curAct) {
    this.rs.agregarcont(curAct);
    this.router.navigate(['/aprendizaje']);
  }
  obtCursos() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + this.as.UsuarioActual.jwt
      })
    };
    this.http.get('https://api.mat9.cl/users/me', httpOptions).subscribe(
      (data: any) => {
        console.log(data);
        this.cursosobt = data.cursos;

      }
    );
    this.http.get('https://api.mat9.cl/cursos').subscribe(
      (data: any[]) => {
        console.log(data);
        this.videos = data;
      }
    );
  }

  f(x) {
    return (x + 2) * 7;
  }
  sideBact() {
    this.sb.open('sidebar-1');
  }


}
