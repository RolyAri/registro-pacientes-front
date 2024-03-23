import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { DistritoDTO } from '../models/DTO/DistritoDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  private endpoint: string = `${environment.apiUrl}/ubigeo/distrito`;

  constructor(private http: HttpClient) { 
    
  }
  getList(codPro: string, codDpto: string): Observable<DistritoDTO[]> {
    return this.http.get<DistritoDTO[]>(`${this.endpoint}/${codPro}/${codDpto}`);
  }
}
