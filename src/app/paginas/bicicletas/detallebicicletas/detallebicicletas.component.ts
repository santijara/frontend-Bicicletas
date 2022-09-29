import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BicicletasModel } from '../../../modelos/bicicletas';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-detallebicicletas',
  templateUrl: './detallebicicletas.component.html',
  styleUrls: ['./detallebicicletas.component.css']
})
export class DetallebicicletasComponent implements OnInit {

  bicicletas: BicicletasModel = new BicicletasModel;

  id: number;

  constructor(private aRoute: ActivatedRoute,
    private servicio: ApiService) { 

      this.aRoute.snapshot.paramMap.get('id');
      this.id = +this.aRoute.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {

    this.GetDetalle();

   
  }

  GetDetalle(){

    this.servicio.GetIdRegistroBici(this.id)
    .subscribe(data=>{
      this.bicicletas = data;
    })
  }

}
