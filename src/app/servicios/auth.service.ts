import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 apiurl = 'https://api.mat9.cl/auth/local/register';
 ava: Observable<any>;
  constructor(private http: HttpClient,
              public jwtHelper: JwtHelperService,
              public firestore: AngularFirestore ) { }


  public get UsuarioActual(): any {
    return JSON.parse(localStorage.getItem('actualusr'));
  }


   login(dat: any) {
     return this.http.post('https://api.mat9.cl/auth/local', {identifier: dat.identifier,
     password: dat.password});
    }

  //  isAuthenticated(): boolean {
   //   return (this.UsuarioActual != null) ? true : false;
    // };

    public isAuthenticated(): boolean {
     const valor = JSON.parse(localStorage.getItem('actualusr'));
     const token = valor.jwt;
      // Check whether the token is expired and return
      // true or false
     return !this.jwtHelper.isTokenExpired(token);
    }

guardrusr(usr: any ) {
  localStorage.setItem('actualusr', usr);
}

public avatar() {
  return this.firestore.collection('user').doc(this.UsuarioActual.user.username).collection('avatar').snapshotChanges().subscribe(
    (da: any) => {
      console.log();
      this.ava = da[0].payload.doc.data().avatar;
    }
   );
}


public get avtr(): any {
  return this.ava;
}

  register(regdata: any) {
return this.http.post('https://api.mat9.cl/auth/local/register', regdata);
  }


}
