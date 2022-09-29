import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservaModel } from 'src/app/modelos/reserva.model';
import Swal from 'sweetalert2';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reserva: ReservaModel = new ReservaModel;


  
  
  //
  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;
  //
  
  
  
    constructor( private servicio: ApiService,
                 private router: Router,
                 private formBuilder: FormBuilder
                 ) { 
  
      
                 }
  
    ngOnInit(): void {
  
 
  
  
  
      this.personalDetails = this.formBuilder.group({
        fechaReserva: ['', Validators.required]
       
    });
  
    this.addressDetails = this.formBuilder.group({
      userReserva: ['', Validators.required]
      
        
    });
  
    this.educationalDetails = this.formBuilder.group({
      fechaDevolucion: ['', Validators.required]
       
    });
  
 
  
  
      //
  
  
    //  this.usuario = new UsuarioModel();
    this.getRegistroCli();
  
  
    
    }
  
  getRegistroCli(){
  
    this.servicio.GetReserva().subscribe(data =>{
      console.log(data);
    }, error =>{
     
    }) ;
    
    
  }
  
  
  //
  

  
  
  
  
  get personal() { return this.personalDetails.controls; }
      
      get address() { return this.addressDetails.controls; }
    
      get education() { return this.educationalDetails.controls; }
      next(){
   
        if(this.step==1){
              this.personal_step = true;
              if (this.personalDetails.invalid) { return  }
              this.step++
        }
    
        else if(this.step==2){
            this.address_step = true;
            if (this.addressDetails.invalid) { return }
                this.step++;
        }
        
    
      }
    
      previous(){
        this.step--
       
        if(this.step==1){
          this.address_step = false;
        }
        if(this.step==2){
          this.education_step = false;
        }
       
      }
    
      submit(){
        
        if(this.step==3){
          this.education_step = true;
          if (this.educationalDetails.invalid) { return }
  
          const reserva: ReservaModel ={
        
            fechaReserva: this.educationalDetails.get('fechaReserva')?.value,
            userReserva: this.educationalDetails.get('userReserva')?.value,
            idBicicleta: this.educationalDetails.get('idBicicleta')?.value,
            estadoReserva: this.educationalDetails.get('estadoReserva')?.value,
            fechaDevolucion: this.educationalDetails.get('fechaDevolucion')?.value,
            
        
          }
  
          this.servicio.PostReserva(reserva)
   .subscribe(data=>{
    console.log(data);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bien hecho! :)',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigateByUrl ("/agregarbicicletas");
    
   });
          
          
  
        }
      }
    
}
