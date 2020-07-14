import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class InteraccionesService {

  constructor(private fs: AngularFirestore,
              private as: AuthService) { }
 getRandomId() {
    return Math.floor((Math.random() * 6) + 1).toString;
}
  comentar(nomdoc: string, comentarios: any) {
    this.fs.collection('videos').doc(nomdoc).collection('comentarios').add(comentarios);
  }

  obtcom(acact: any) {
    return this.fs.collection('videos').doc(acact).collection('comentarios').snapshotChanges();
  }
  obtnotas() {
    return this.fs.collection('user').doc(this.as.UsuarioActual.user.username).collection('evaluaciones').snapshotChanges();
  }
}
