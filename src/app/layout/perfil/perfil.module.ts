import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil.component';

@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    FormsModule,
    MatCardModule
  ]
})
export class PerfilModule { }
