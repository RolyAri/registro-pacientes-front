import { Component, OnInit } from '@angular/core';
import { TipoDocumentoIdentidad } from 'src/app/models/TipoDocumentoIdentidad';
import { TipoDocumentoIdentidadService } from 'src/app/services/tipo-documento-identidad.service';

@Component({
  selector: 'app-buscar-pacientes',
  templateUrl: './buscar-pacientes.component.html',
  styleUrls: ['./buscar-pacientes.component.css']
})
export class BuscarPacientesComponent implements OnInit {
  constructor(private tipoDocumentoIdentidadService:TipoDocumentoIdentidadService){}
  tiposDocumentos: TipoDocumentoIdentidad[]=[];
  ngOnInit(): void {
    this.tipoDocumentoIdentidadService.getList().subscribe({
      next:(data)=>{
        this.tiposDocumentos=data;
      },error:(error)=>{
        console.log("error la cargar los tipos de documentos")
      }
    });
  }

}
