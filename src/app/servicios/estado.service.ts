import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
estadousuario = {
}


  constructor(private fs: AngularFirestore, private aut: AuthService) { }


  CargarEstado(cacherepro){
  return this.fs.collection('datadinamica').doc(JSON.parse(this.aut.UsuarioActual).user.id).collection('cache');
  }
}
