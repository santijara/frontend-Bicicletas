import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { BicicletasComponent } from './paginas/bicicletas/bicicletas.component';
import { LoginComponent } from './paginas/login/login.component';
import { CallbackComponent } from './paginas/callback/callback.component';
import { ProtegerGuard } from './guard/proteger.guard';
import { AgregarbicicletasComponent } from './paginas/bicicletas/agregarbicicletas/agregarbicicletas.component';
import { ReservaComponent } from './paginas/reserva/reserva.component';

const routes: Routes = [

  { path: 'home' , component: HomeComponent },

  { path: 'bicicletas' , component: BicicletasComponent,
  canActivate: [ ProtegerGuard ] },

  { path: 'agregarbicicletas' , component: AgregarbicicletasComponent },

  { path: 'reserva/:id' , component: ReservaComponent },

  { path: 'login' , component: LoginComponent },

  { path: 'callback' , component: CallbackComponent },

  { path: '**',  pathMatch: 'full', redirectTo: 'home' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
