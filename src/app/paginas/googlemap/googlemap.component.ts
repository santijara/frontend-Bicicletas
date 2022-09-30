import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { BicicletasModel } from '../../modelos/bicicletas';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {

  mapa: BicicletasModel[] = [];

  position: any;


  constructor(private servicio: ApiService,
              private aRoute: ActivatedRoute) {

    

   }

  ngOnInit(): void {

    this.DatosMapa();

   
  }


  label = {
    color: 'red',
    text: 'marcador'
  }

  DatosMapa(){

    this.servicio.GetRegistroBici().subscribe(data=>{

      console.log(data[3].latitud);
      console.log(data[3].longitud);
      

      this.position={
        lat: data[3].latitud,
  
        lng: data[3].longitud
      }

    })


  
  
  }


}
