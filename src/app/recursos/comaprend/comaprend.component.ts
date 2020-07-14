import { AuthService } from './../../servicios/auth.service';
import { RecursosService } from './../recursos.service';
import { Component, OnInit, Inject, ViewChild, OnChanges } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import { InteraccionesService } from 'src/app/servicios/interacciones.service';
import { MathjaxComponent } from 'src/app/mathjax/mathjax.component';

import * as moment from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comaprend',
  templateUrl: './comaprend.component.html',
  styleUrls: ['./comaprend.component.css']
})
export class ComaprendComponent implements OnInit {
  @ViewChild(MathjaxComponent) childView: MathjaxComponent;
  data;
datosl: any[];
Alternats: any[];
Preguntas: any[];
infoact: any;
terminada = false;
pruebaact: string;
puntfinal: number;
tiempomaximo: any;
started = false;
isreload = false;
coments: Observable<any[]>;
comentario = {
  iddoc: '',
  nomusu: '',
  comentario: ''
};
myStyles = {
  display: 'none'
  };
  constructor(public rs: RecursosService,
              private inter: InteraccionesService,
              private as: AuthService
  ) {
    const now = moment();
   }

  ngOnInit(): void {
    this.data = this.rs.obtcont;
    this.datosl = this.data;
    this.actdata(0);
    this.comentario.iddoc = this.infoact.id;
    this.inter.obtcom(this.infoact.id).subscribe(
      (da: any) => {
        this.coments = da;
        console.log(da[0].payload.doc.data().comentario);
      }
    );
  }

  acabar() {
    this.terminada = true;
  }
  test(i: number) {
    return i;

    }
comentar() {
  this.comentario.nomusu = this.as.UsuarioActual.user.nombrecompleto;
  this.inter.comentar(this.infoact.id, this.comentario);
}

 cargadat(datak: number) {
   this.isreload = false;
   this.infoact = this.data[datak];
   setTimeout(() => { this.isreload = true; }, 1000);
 }
  actdata(datak: number) {
        this.infoact = this.data[datak];
        this.isreload = true;
        this.rs.stposi(datak);

  }

  isvideo() {
   if (this.infoact.video) {
     return this.myStyles;
   }
  }
  isprueba() {
  if (this.infoact.preguntas) {
    return this.myStyles;
  } else {
    return '';
  }
  }

  verevento(e) {
    console.log(e);
    if (e.action === 'done') {
      this.terminada = true;
      for (let index = 0; index < this.Preguntas.length; index++) {
      const element = this.Preguntas[index];
      const element2 = this.rs.elemactual.preguntas[index];
      if (element === element2) {
        console.log(true);
      } else {
        console.log('son distintas');
      }
    }
    }


  }
  cosita() {
    this.Preguntas = this.infoact.preguntas;
    console.log(this.infoact);
    const now = moment();
    console.log(moment('01-01-1970 ' + this.infoact.duracion, 'MM-DD-YYYY HH:mm').toDate().getTime() / 1000 - 10800);
    this.tiempomaximo = moment('01-01-1970 ' + this.infoact.duracion, 'MM-DD-YYYY HH:mm').toDate().getTime() / 1000 - 10799;
    console.log(this.Preguntas);
    console.log(this.Preguntas.length);
    for (let index = 0; index < this.Preguntas.length; index++) {
               this.Preguntas[index] = this.infoact.preguntas[index];
               this.Preguntas.forEach(element => {
                element.A = false;
                element.B = false;
                element.C = false;
                element.E = false;
                element.D = false;
              });
    }
    this.started = true;
  }
  checkboxes(i, letra) {
    switch (letra) {
      case 'a':
        this.infoact.preguntas[i].C = false;
        this.infoact.preguntas[i].B = false;
        this.infoact.preguntas[i].D = false;
        this.infoact.preguntas[i].E = false;

        break;
        case 'b':
          this.infoact.preguntas[i].C = false;
          this.infoact.preguntas[i].A = false;
          this.infoact.preguntas[i].D = false;
          this.infoact.preguntas[i].E = false;
          break;
        case 'c':
          this.infoact.preguntas[i].A = false;
          this.infoact.preguntas[i].B = false;
          this.infoact.preguntas[i].D = false;
          this.infoact.preguntas[i].E = false;
          break;
        case 'd':
          this.infoact.preguntas[i].C = false;
          this.infoact.preguntas[i].B = false;
          this.infoact.preguntas[i].A = false;
          this.infoact.preguntas[i].E = false;
          break;
        case 'e':
          this.infoact.preguntas[i].C = false;
          this.infoact.preguntas[i].B = false;
          this.infoact.preguntas[i].D = false;
          this.infoact.preguntas[i].A = false;
          break;

      default:
        break;
    }

  }


finalizar() {
  this.rs.comparar(this.Preguntas, this.infoact.id);
  const s = {action: 'done'};
  this.started = true;
  // console.log(this.infoact.preguntas);
  // console.log(this.Preguntas);
  this.verevento(s);
}

}
