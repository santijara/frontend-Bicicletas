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
import { GooglemapComponent } from './paginas/googlemap/googlemap.component';
import { DetalledisponibilidadComponent } from './paginas/disponibilidad/detalledisponibilidad/detalledisponibilidad.component';

const routes: Routes = [

  { path: 'home' , component: HomeComponent },

  // bicicletas

  { path: 'bicicletas' , component: BicicletasComponent,
  canActivate: [ ProtegerGuard ] },

  { path: 'agregarbicicletas' , component: AgregarbicicletasComponent,
  canActivate: [ ProtegerGuard ] },

  { path: 'detallebicicleta/:id' , component: DetallebicicletasComponent,
  canActivate: [ ProtegerGuard ] },


  { path: 'editarbicicletas/:id' , component: EditarbicicletasComponent,
  canActivate: [ ProtegerGuard ] },

// Reservas
  { path: 'reserva/:id' , component: ReservaComponent,
  canActivate: [ ProtegerGuard ] },

  { path: 'verreserva' , component: VerreservaComponent,
  canActivate: [ ProtegerGuard ] },


// Disponibilidad
{ path: 'disponibilidad' , component: DisponibilidadComponent,
canActivate: [ ProtegerGuard ] },

{ path: 'detalledisponibilidad/:id' , component: DetalledisponibilidadComponent
 },

{ path: 'googlemaps/:latitud/:id' , component: GooglemapComponent,
canActivate: [ ProtegerGuard ] },


  { path: 'login' , component: LoginComponent },

  { path: 'callback' , component: CallbackComponent },

  { path: '**',  pathMatch: 'full', redirectTo: 'home' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
