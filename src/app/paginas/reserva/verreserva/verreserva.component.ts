import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ReservaModel } from '../../../modelos/reserva.model';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-verreserva',
  templateUrl: './verreserva.component.html',
  styleUrls: ['./verreserva.component.css']
})
export class VerreservaComponent implements OnInit {

  reserva: ReservaModel[] = [];

  constructor(private servicio: ApiService) { }

  ngOnInit(): void {

    this.VerReserva();
  }

  VerReserva(){

    this.servicio.GetReserva().subscribe(data=>{
      console.log(data);
      this.reserva = data;
    },Error =>{
      console.log(Error);
    });

  }

  eliminarregistro(id){

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
        this.servicio.DeleteReserva(id).subscribe(data =>{
          this.VerReserva();
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
  

}
