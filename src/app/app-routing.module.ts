import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { BicicletasComponent } from './paginas/bicicletas/bicicletas.component';
import { LoginComponent } from './paginas/login/login.component';
import { CallbackComponent } from './paginas/callback/callback.component';
import { ProtegerGuard } from './guard/proteger.guard';
import { AgregarbicicletasComponent } from './paginas/bicicletas/agregarbicicletas/agregarbicicletas.component';
import { ReservaComponent } from './paginas/reserva/reserva.component';
import { EditarbicicletasComponent } from './paginas/bicicletas/editarbicicletas/editarbicicletas.component';
import { DetallebicicletasComponent } from './paginas/bicicletas/detallebicicletas/detallebicicletas.component';
import { VerreservaComponent } from './paginas/reserva/verreserva/verreserva.component';
import { DisponibilidadComponent } from './paginas/disponibilidad/disponibilidad.component';

const routes: Routes = [

  { path: 'home' , component: HomeComponent },

  // bicicletas

  { path: 'bicicletas' , component: BicicletasComponent,
  canActivate: [ ProtegerGuard ] },

  { path: 'agregarbicicletas' , component: AgregarbicicletasComponent },

  { path: 'detallebicicleta/:id' , component: DetallebicicletasComponent },


  { path: 'editarbicicletas/:id' , component: EditarbicicletasComponent },

// Reservas
  { path: 'reserva/:id' , component: ReservaComponent },

  { path: 'verreserva' , component: VerreservaComponent },


// Disponibilidad
{ path: 'disponibilidad' , component: DisponibilidadComponent },


  { path: 'login' , component: LoginComponent },

  { path: 'callback' , component: CallbackComponent },

  { path: '**',  pathMatch: 'full', redirectTo: 'home' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
