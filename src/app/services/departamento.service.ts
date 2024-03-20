import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { DepartamentoDTO } from '../models/DTO/DepartamentoDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private endpoint: string = `${environment.apiUrl}/ubigeo/departamento`;

  constructor(private http: HttpClient) { 
    
  }
  getList(): Observable<DepartamentoDTO[]> {
    return this.http.get<DepartamentoDTO[]>(`${this.endpoint}/listar`);
  }
}
