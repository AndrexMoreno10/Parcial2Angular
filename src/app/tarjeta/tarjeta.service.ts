import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjeta } from './tarjeta';
import { environment } from '../environments/environment.development';
import { Tarjetas } from './tarjetas';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {


 


  constructor(private http: HttpClient) { }

  agregarTarjeta(tarjeta: Tarjeta): Observable<any>{
    return this.http.post<any>(environment.API_URL_AGREGAR,tarjeta);
  }

  getListarTarjetas():Observable<Tarjetas> {
    return this.http.get<Tarjetas>(environment.API_URL_LISTAR)
  }

  editarTarjeta(tarjeta: Tarjeta):Observable<any>{
    return this.http.put<any>(environment.API_URL_EDITAR,tarjeta)
  }

  getTarjetaById(titular:string):Observable<Tarjetas>{
  return this.http.get<Tarjetas>(environment.API_URL_BUSCAR + titular)
  }
  
}


