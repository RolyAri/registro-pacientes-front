import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Ubigeo } from '../models/Ubigeo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  private endpoint: string = `${environment.apiUrl}/ubigeo`;

  constructor(private http: HttpClient) { 
    
  }
  getList(): Observable<Ubigeo[]> {
    return this.http.get<Ubigeo[]>(`${this.endpoint}/listar`);
  }
}
