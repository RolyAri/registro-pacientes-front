import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Sexo } from '../models/Sexo';

@Injectable({
  providedIn: 'root'
})
export class SexoService {

  private endpoint: string = `${environment.apiUrl}/sexo`;

  constructor(private http: HttpClient) { 
    
  }
  getList(): Observable<Sexo[]> {
    return this.http.get<Sexo[]>(`${this.endpoint}/listar`);
  }
}
