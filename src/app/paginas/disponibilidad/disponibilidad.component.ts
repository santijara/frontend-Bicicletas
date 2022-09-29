import { Component, OnInit } from '@angular/core';
import { DisponibilidadModel } from '../../modelos/disponibilidad.model';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.component.html',
  styleUrls: ['./disponibilidad.component.css']
})
export class DisponibilidadComponent implements OnInit {

  disponibilidad: DisponibilidadModel[] = [];

  constructor(private servicio: ApiService) { }

  ngOnInit(): void {

    this.GetDisponibilidad();

  }

  GetDisponibilidad(){

    this.servicio.GetDisponibilidad().subscribe(data=>{
      console.log(data);
      this.disponibilidad = data;
      
    },err=>{
      console.log(err)
    })

  }

  eliminarregistro(id){
    
  }

  

}
