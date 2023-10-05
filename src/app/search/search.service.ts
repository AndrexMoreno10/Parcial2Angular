import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  urlBase = environment.API_URL_BUSCAR;

  constructor(private http: HttpClient) {

  }

  getSeachMovie(keyword:string) {

    return this.http.get<any>(this.urlBase + "?language=es&query=" + keyword)
  }
}
