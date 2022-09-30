import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { ApiService } from '../../servicios/api.service';
import { BicicletasModel } from 'src/app/modelos/bicicletas';
import Swal from 'sweetalert2';

declare var window: any;

@Component({
  selector: 'app-bicicletas',
  templateUrl: './bicicletas.component.html',
  styleUrls: ['./bicicletas.component.css']
})
export class BicicletasComponent implements OnInit {

  formModal: any;
  public previsualizacion: string;

  listregistro: BicicletasModel [] = [];

  constructor(public auth: AutenticacionService,
              public servicio: ApiService) { }

  ngOnInit(): void {
    
    // console.log('ngOnInit protegida');
    // this.auth.userProfile$.subscribe( perfil => {
    //   console.log(perfil);
    // });
 this. ListaRegistroBicicletas();

 this.formModal = new window.bootstrap.Modal(

  document.getElementById("exampleModal")
);
   
  }

  openModal(){
    this.formModal.show();
  }

  doSomething(){
    this.formModal.hide();
  }

  info(latitud:any, longitud:any){

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

    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Esta seguro de eliminar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, estoy seguro!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.DeleteRegistroBici(id).subscribe(data =>{
          this.ListaRegistroBicicletas();
          }, error =>{
           console.log(error);
          });
        
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'El registro seleccionado ha sido eliminado.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'el proceso solicitado ha sido cancelado :)',
          'error'
        )
      }
    })


  }


  Verinfo(latitud:string, longitud:string){

  }
  }


