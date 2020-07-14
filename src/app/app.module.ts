import { PerfilModule } from './layout/perfil/perfil.module';
import { RecursosModule } from './recursos/recursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './layout/inicio/inicio.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule} from 'ng-sidebar';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './dialogos/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CursodialogComponent } from './dialogos/cursodialog/cursodialog.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegistroComponent } from './dialogos/registro/registro.component';
import {MatRadioModule} from '@angular/material/radio';
import { GlobalService } from './global.service';
import {MatCardModule} from '@angular/material/card';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { UploadComponent } from './dialogos/upload/upload.component';



const firebaseConfig = {
  apiKey: 'AIzaSyB2qC9RbvVvOW134jsGKa7n-TTm7MT5pMQ',
  authDomain: 'mat9-d534f.firebaseapp.com',
  databaseURL: 'https://mat9-d534f.firebaseio.com',
  projectId: 'mat9-d534f',
  storageBucket: 'mat9-d534f.appspot.com',
  messagingSenderId: '78691434804',
  appId: '1:78691434804:web:65960f394ec8e3bd3c6561',
  measurementId: 'G-91DYGCQNS6'
};


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    CursodialogComponent,

    RegistroComponent,

    UploadComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    MatRadioModule,
    BrowserModule,
    NgbModule,
    MatCardModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => JSON.parse(localStorage.getItem('actualusr')).jwt,
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['http://example.com/examplebadroute/'],
      },
    }),    RecursosModule,
    MatStepperModule,
    PerfilModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    MatDialogModule, MatInputModule, MatButtonModule,  MatFormFieldModule, MatListModule
  ],
  entryComponents: [CursodialogComponent],
  providers: [SidebarModule,
    SidebarComponent,
    GlobalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
