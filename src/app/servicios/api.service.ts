import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Bicicletas } from '../modelos/bicicletas';
import { ReservaModel } from '../modelos/reserva.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  bicicletas: Bicicletas;

  reserva:ReservaModel;
  

  private myAppUrl = 'http://20.81.84.72:8084/';
 private apiUrl = 'api/Bicicletas/';

 private apireserva = 'http://20.241.130.194:8085/api/Reservas/';



  constructor(private http: HttpClient) {

    this.GetRegistroBici().subscribe(data=>{
      console.log(data)
    });

    this.GetReserva().subscribe(data=>{
      console.log(data)
    });

 
   }


 GetRegistroBici(): Observable<any>{

    // return this.http.get( this.myAppUrl + this.apiUrl);
    return this.http.get( 'http://52.152.240.185:8084/api/Bicicletas');
   }

  
   PostRegistroBici(bicicletas: Bicicletas):Observable<any> {
    return this.http.post('http://52.152.240.185:8084/api/Bicicletas', bicicletas)

   }

   UpdateRegistroBici(id: number, bicicletas: Bicicletas): Observable<any> {
    return this.http.put(this.myAppUrl + this.apiUrl + id, bicicletas);
  }


  // ApiReserva

  GetReserva():  Observable<any>{

    return this.http.get(this.apireserva);
  }

  PostReserva(reserva: ReservaModel): Observable<any>{

    return this.http.post(this.apireserva, reserva)
  }

}
