import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ProvinciaDTO } from '../models/DTO/ProvinciaDTO';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private endpoint: string = `${environment.apiUrl}/ubigeo/provincia`;

  constructor(private http: HttpClient) { 
    
  }
  getList(codDpto: string): Observable<ProvinciaDTO[]> {
    return this.http.get<ProvinciaDTO[]>(`${this.endpoint}/${codDpto}`);
  }
}
