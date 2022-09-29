import { Component } from '@angular/core';
import { ApiService } from './servicios/api.service';
import { AutenticacionService } from './servicios/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {

  constructor( private auth: AutenticacionService,
               private servicio: ApiService ) {}

  ngOnInit() {
    this.auth.localAuthSetup();




  }

}
