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
  idBicicletaa: '';
  id:any;
  latitud ='';
  longitud: '';

position: any


  constructor(private servicio: ApiService,
              private aRoute: ActivatedRoute,
             ) {

    

    

   }

  ngOnInit(): void {

    

    this.Datosmapa();

   
  }


  Datosmapa(){

 
    this.aRoute.params.subscribe(params =>{
      console.log(params['latitud'])
      this.latitud = (params['latitud'])
      
      this.aRoute.params.subscribe(params =>{
        console.log(params['id'])
        this.longitud=(params['id'])

      

      this.position={

  
        lat: +this.latitud,
      
        lng: +this.longitud,
      }
    })
  })



  }





  label = {
    color: 'red',
    text: 'marcador'
  }






}
