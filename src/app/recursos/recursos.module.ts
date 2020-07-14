
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VjsPlayerComponent } from './vjs-player/vjs-player.component';
import { RecursosRoutingModule } from './recursos-routing.module';
import { ComaprendComponent } from './comaprend/comaprend.component';
import { FormsModule } from '@angular/forms';
import { MathjaxComponent } from '../mathjax/mathjax.component';
import { CountdownModule } from 'ngx-countdown';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SuiModule} from 'ng2-semantic-ui';
import { VidPregPipe } from '../pipe/vid-preg.pipe';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [ ComaprendComponent,    VidPregPipe,
    VjsPlayerComponent, MathjaxComponent],
  imports: [
    MatStepperModule,
    FormsModule,
    CountdownModule,
    MatFormFieldModule,
    CommonModule,
    SuiModule,
    MatCardModule,
    RecursosRoutingModule
  ]
})
export class RecursosModule { }
