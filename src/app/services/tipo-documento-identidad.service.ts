import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../models/BaseUrl';
import { Observable } from 'rxjs';
import { TipoDocumentoIdentidad } from '../models/TipoDocumentoIdentidad';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoIdentidadService {

  private endpoint: string = `${environment.apiUrl}/tipo-documento-identidad`;

  constructor(private http: HttpClient) { }

  getList(): Observable<TipoDocumentoIdentidad[]>{
    return this.http.get<TipoDocumentoIdentidad[]>(`${this.endpoint}/listar`);
  }

}
