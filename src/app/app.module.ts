import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './paginas/navbar/navbar.component';
import { HomeComponent } from './paginas/home/home.component';
import { BicicletasComponent } from './paginas/bicicletas/bicicletas.component';
import { LoginComponent } from './paginas/login/login.component';
import { CallbackComponent } from './paginas/callback/callback.component';
import { HttpClientModule } from '@angular/common/http';
import { AgregarbicicletasComponent } from './paginas/bicicletas/agregarbicicletas/agregarbicicletas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservaComponent } from './paginas/reserva/reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BicicletasComponent,
    LoginComponent,
    CallbackComponent,
    AgregarbicicletasComponent,
    ReservaComponent
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }