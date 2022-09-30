import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisponibilidadModel } from '../../../modelos/disponibilidad.model';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-detalledisponibilidad',
  templateUrl: './detalledisponibilidad.component.html',
  styleUrls: ['./detalledisponibilidad.component.css']
})
export class DetalledisponibilidadComponent implements OnInit {

  disponibilidad: DisponibilidadModel;

  id: number;

  constructor(private aRoute: ActivatedRoute,
    private servicio: ApiService) { 

      this.aRoute.snapshot.paramMap.get('id');
    this.id = +this.aRoute.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {

    this.GetIdDisponible();

    this.disponibilidad = new DisponibilidadModel;
  }

  GetIdDisponible(){

   this.servicio.GetIdDisponibilidad(this.id).subscribe(data=>{
    this.disponibilidad = data;
    console.log(data);
   })
  
  }

}
