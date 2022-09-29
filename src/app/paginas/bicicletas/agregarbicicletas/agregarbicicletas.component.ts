import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {  BicicletasModel } from '../../../modelos/bicicletas';
import { ApiService } from '../../../servicios/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarbicicletas',
  templateUrl: './agregarbicicletas.component.html',
  styleUrls: ['./agregarbicicletas.component.css']
})
export class AgregarbicicletasComponent implements OnInit {

  agregarBici: FormGroup;
  accion = 'Agregar';
  id = 0;
  bicicletas: BicicletasModel = new BicicletasModel;

  constructor(private fb: FormBuilder,
              private servicio: ApiService,
              private router: Router,
              private aRoute: ActivatedRoute,
              ) { 

                this.agregarBici = this.fb.group({
                  color: ['', Validators.required],
                  modelo: ['', Validators.required],
                  latitud: ['', Validators.required],
                  longitud: ['', Validators.required],
                  userPropietario: ['', Validators.required],

                })


              }

  ngOnInit(): void {
  }

  enviar(formulario:NgForm){

    if (formulario.invalid){return;}

    console.log(formulario);

    this.servicio.PostRegistroBici(this.bicicletas)
    .subscribe(data =>{

     Swal.fire({
       position: 'center',
       icon: 'success',
       title: 'Bien hecho! :)',
       showConfirmButton: false,
       timer: 1500
     })
     this.router.navigateByUrl ("/bicicletas");
    });
   

  
  
  }


//   agregarEdtiarComentario() {

//     if(this.bicicletas == undefined) {

//       // Agregamos un nuevo comentario
//       const bicicletas: Bicicletas = {      
//         color: this.agregarBici.get('color')?.value,
//         modelo: this.agregarBici.get('modelo')?.value,
//         latitud: this.agregarBici.get('longitud')?.value,
//         longitud: this.agregarBici.get('longitud')?.value,
//         userPropietario: this.agregarBici.get('userPropietario')?.value
        
//       }
//       console.log()

//       this.servicio.PostRegistroBici(bicicletas).subscribe(data => {
//         Swal.fire({
//           position: 'center',
//           icon: 'success',
//           title: 'Bien hecho! :)',
//           showConfirmButton: false,
//           timer: 1500
//         });
//         this.router.navigate(['/']);
//       }, error => {
//         console.log(error)
//       })
//     } else {

//       // Editamos comentario
//       const bicicletas: Bicicletas = {
//         id: this.bicicletas.id,
//         color: this.agregarBici.get('color')?.value,
//         modelo: this.agregarBici.get('modelo')?.value,
//         latitud: this.agregarBici.get('latitud')?.value,
//         longitud: this.agregarBici.get('longitud')?.value,
//         userPropietario: this.agregarBici.get('userPropietario')?.value
        
//       }

//       this.servicio.UpdateRegistroBici(this.id, bicicletas).subscribe(data => {
//         console.log(data);
//         Swal.fire({
//           position: 'center',
//           icon: 'success',
//           title: 'Bien hecho! :)',
//           showConfirmButton: false,
//           timer: 1500
//         })
//         this.router.navigate(['/']);
//       }, error => {
//         console.log(error)
//       })
//     }


//   }

}
