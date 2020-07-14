import { AuthService } from './../servicios/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
contenidos;
acomparar;
notafinal1 = 0;
evaluacion = 0;
  constructor(private http: HttpClient,
              private ts: ToastrService,
              private fs: AngularFirestore,
              private as: AuthService) { }
  posix = 0;
 public agregarcont(v: any) {
   this.contenidos = v;
 }

public get obtcont(): any {
  return this.contenidos;
}
public get elemactual(): any {
  return this.contenidos[this.posix];
}
public get puntajefinal(): number {
  return this.evaluacion;
}
public stposi(a: number) {
  this.posix = a;
  console.log(this.elemactual);
}
public avanzar() {
this.posix++;
}
public volver() {
  this.posix--;
}

public comparar(a: any[], b: string) {
this.http.get('https://api.mat9.cl/pruebas/' + b).subscribe(
  (data: any) => {
    for (let i = 0; i < a.length; i++) {
      const contnt1 = a[i];
      const contnt2 =  data.preguntas[i];

      // tslint:disable-next-line: max-line-length
      if (contnt1.A === contnt2.A && contnt1.B === contnt2.B && contnt1.C === contnt2.C && contnt1.D === contnt2.D && contnt1.E === contnt2.E) {
       console.log(true);
       this.notafinal1++;

      } else {
        console.log(false);
      }
    }
    this.evaluacion = ((((this.notafinal1) / (a.length)) * 700) + 150);
    const datos = {
        titulo: this.elemactual.titulo,
        puntaje: this.evaluacion,
        buenas: this.notafinal1 + '/' + a.length,
        fecha: Date.now().toString(),
        identificador: this.elemactual.id
       };
    console.log(this.evaluacion);
    if ( 450 > this.evaluacion ) {
    // tslint:disable-next-line: max-line-length
    this.ts.error('Has tenido una evaluación de: ' + this.evaluacion + '.   Te recomendamos seguir estudiando y repasar contenidos.', 'Resultado!');
   } else {
           if ( 600 > this.evaluacion ) {
             // tslint:disable-next-line: max-line-length
             this.ts.warning('Has tenido una evaluación de: ' + this.evaluacion + '.  Puedes seguir mejorando en nuestra plataforma!', 'Resultado!');
           } else {
             if (this.evaluacion >= 850) {
               this.ts.success('Has tenido una evaluación de: ' + this.evaluacion + '. Puedes revisar tus resultados en la sección de historial en tu perfil!', 'Felicitaciones!');
             }
           }
   }
    this.fs.collection('user').doc(this.as.UsuarioActual.user.id).collection('evaluaciones').add(datos);
  }
);
}
}
