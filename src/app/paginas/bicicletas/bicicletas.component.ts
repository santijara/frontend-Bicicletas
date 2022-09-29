import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { ApiService } from '../../servicios/api.service';
import { Bicicletas } from 'src/app/modelos/bicicletas';

@Component({
  selector: 'app-bicicletas',
  templateUrl: './bicicletas.component.html',
  styleUrls: ['./bicicletas.component.css']
})
export class BicicletasComponent implements OnInit {

  listregistro: Bicicletas [] = [];

  constructor(public auth: AutenticacionService,
              public servicio: ApiService) { }

  ngOnInit(): void {
    
    // console.log('ngOnInit protegida');
    // this.auth.userProfile$.subscribe( perfil => {
    //   console.log(perfil);
    // });
 this. ListaRegistroBicicletas();
   
  }

  ListaRegistroBicicletas(){

    this.servicio.GetRegistroBici().subscribe(data =>{
      console.log(data);
      this.listregistro = data;
    }, error =>{
     console.log(error);
    }) ;

  }

  eliminarregistro(id) {

  }
  }


