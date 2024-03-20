import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../models/Paciente';
import { Observable } from 'rxjs';
import baseUrl from '../models/BaseUrl';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private endpoint: string = `${environment.apiUrl}/pacientes`;

  constructor(private http: HttpClient) { 
    
  }
  getList(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.endpoint}/listar`);
  }
}
