import { Component, OnInit } from '@angular/core';
import { BicicletasModel } from '../../../modelos/bicicletas';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ApiService } from '../../../servicios/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarbicicletas',
  templateUrl: './editarbicicletas.component.html',
  styleUrls: ['./editarbicicletas.component.css']
})
export class EditarbicicletasComponent implements OnInit {

 bicicletas: BicicletasModel = new BicicletasModel;

 idregistro = "";

  editarform = new FormGroup({
    id: new FormControl(''),
    color: new FormControl(''),
    modelo: new FormControl(''),
    latitud: new FormControl(''),
    longitud: new FormControl(''),
    userPropietario: new FormControl(''),

   });  

  constructor(private servicio: ApiService,
              private router: Router,
              private aRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.idregistro  = this.aRoute.snapshot.paramMap.get('id');
    this.servicio.GetIdRegistroBici(this.idregistro).subscribe(data=>{
      this.bicicletas = data;
       this.editarform.setValue({
         'color':   this.bicicletas.color,
         'modelo': this.bicicletas.modelo,
         'latitud':     this.bicicletas.latitud,
         'longitud':   this.bicicletas.latitud,
         'userPropietario':   this.bicicletas.userPropietario,
         'id': this.idregistro
      
       });
      //  console.log(this.editarform.value);
      })
  }


  editarregistro(){

    const bicicletas: BicicletasModel ={

      id: this.bicicletas.id,
      color: this.editarform.get('color')?.value,
      modelo: this.editarform.get('modelo')?.value,
      latitud: this.editarform.get('latitud')?.value,
      longitud: this.editarform.get('longitud')?.value,
      userPropietario: this.editarform.get('userPropietario')?.value,
    }
    console.log(bicicletas);
   this.servicio.UpdateRegistroBici(this.idregistro , bicicletas)
  .subscribe(data => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Actualizacion realizada',
      showConfirmButton: false,
      timer: 1500
    })
   console.log("actuliacion realizada")
    this.router.navigate(['/gestionadmin']);
  }, error => {
    console.log(error);
  })
}

  }




