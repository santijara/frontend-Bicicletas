import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ReservaModel } from '../modelos/reserva.model';
import { BicicletasModel } from 'src/app/modelos/bicicletas';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  bicicletas: BicicletasModel;

  idregistro = "";

  reserva:ReservaModel;
  



  constructor(private http: HttpClient) {

    this.GetRegistroBici().subscribe(data=>{
      console.log(data)
    });

    this.GetReserva().subscribe(data=>{
      console.log(data)
    });

    this.GetIdRegistroBici(this.idregistro).subscribe(data=>{
      console.log(data)
      

    });

 
   }

  //  ApiBicicletas

 GetRegistroBici(): Observable<any>{


    return this.http.get( 'http://20.62.224.174:8084/api/Bicicletas/');
   }


   GetIdRegistroBici(id:any): Observable<BicicletasModel>{

    
    return this.http.get<BicicletasModel>( 'http://20.62.224.174:8084/api/Bicicletas/'+ id);
   }
  
   PostRegistroBici(bicicletas: BicicletasModel):Observable<any> {

    const bici ={
      id: bicicletas.id,
      color: bicicletas.color,
      modelo: bicicletas.modelo,
      latitud: bicicletas.latitud,
      longitud: bicicletas.longitud,
      userPropietario: bicicletas.userPropietario,
    

      }

      
    return this.http.post('http://20.62.224.174:8084/api/Bicicletas/', bici).pipe(map((data:any)=>{

    console.log(data);

    }))

    console.log()
   }

   UpdateRegistroBici(id: any, bicicletas: BicicletasModel): Observable<any> {
    return this.http.put('http://20.62.224.174:8084/api/Bicicletas/', bicicletas);
  }

  DeleteRegistroBici(id:number):Observable<any>{

    return this.http.delete('http://20.62.224.174:8084/api/Bicicletas/'+ id)
  }


  // ApiReserva

  GetReserva():  Observable<any>{

    return this.http.get('http://20.237.77.245:8085/api/Reservas');
  }

  PostReserva(reserva: ReservaModel): Observable<any>{

    return this.http.post('http://20.237.77.245:8085/api/Reservas', reserva)
  }

  DeleteReserva(id:number): Observable<any>{

    return this.http.delete('http://20.237.77.245:8085/api/Reservas/'+ id)
  }

  
  // ApiDisponibilidad

  GetDisponibilidad():Observable<any>{

    return this.http.get('http://20.237.77.245:8085/api/Disponibilidad')

  }

  

}
