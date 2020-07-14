import { WardService } from './ward.service';
import { GuardService } from './servicios/guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './layout/inicio/inicio.component';

const routes: Routes = [
{path: '', component: InicioComponent, pathMatch: 'full'},
{ path: `aprendizaje`, loadChildren: () =>
      import('./recursos/recursos.module').then(m => m.RecursosModule),
     canActivate: [WardService]},


      {path: 'perfil', loadChildren: () =>
     import('./layout/perfil/perfil.module').then(m => m.PerfilModule),
    canActivate: [GuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
