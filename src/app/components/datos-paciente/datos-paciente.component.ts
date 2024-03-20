import { Component, OnInit } from '@angular/core';
import { DepartamentoDTO } from 'src/app/models/DTO/DepartamentoDTO';
import { DistritoDTO } from 'src/app/models/DTO/DistritoDTO';
import { ProvinciaDTO } from 'src/app/models/DTO/ProvinciaDTO';
import { Sexo } from 'src/app/models/Sexo';
import { TipoDocumentoIdentidad } from 'src/app/models/TipoDocumentoIdentidad';
import { Ubigeo } from 'src/app/models/Ubigeo';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DistritoService } from 'src/app/services/distrito.service';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { SexoService } from 'src/app/services/sexo.service';
import { TipoDocumentoIdentidadService } from 'src/app/services/tipo-documento-identidad.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';

@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.css']
})
export class DatosPacienteComponent implements OnInit {
  constructor(private tipoDocumentoIdentidadService: TipoDocumentoIdentidadService, 
    private sexoService: SexoService, 
    private ubigeoService: UbigeoService,
    private departamentoService: DepartamentoService,
    private provinciaService: ProvinciaService,
    private distritoService: DistritoService ) { }
  tiposDocumentos: TipoDocumentoIdentidad[] = [];
  sexos: Sexo[] = [];
  ubigeos: Ubigeo[] = [];
  departamentos: DepartamentoDTO[] = [];
  provincias: ProvinciaDTO[] = [];
  distritos: DistritoDTO[] = [];
  ngOnInit(): void {
    this.tipoDocumentoIdentidadService.getList().subscribe({
      next: (data) => {
        this.tiposDocumentos = data;
      }, error: (error) => {
        console.log("error al cargar los tipos de documentos")
      }
    });
    this.sexoService.getList().subscribe({
      next: (data) =>{
        this.sexos = data;
      }, error: (error) =>{
        console.log("error al cargar los sexos")
      }
    });
    this.ubigeoService.getList().subscribe({
      next: (data) => {
        this.ubigeos = data;
      }, error: (error) => {
        console.log("error al cargar ubigeos")
      }
    })
    this.departamentoService.getList().subscribe({
      next: (data) => {
        this.departamentos = data;
      }, error:(error) => {
        console.log("error al cargar los departamentos")
      }
    })
    this.provinciaService.getList().subscribe({
      next: (data) => {
        this.provincias = data;
      }, error:(error) => {
        console.log("error al cargar las provincias") 
      }
    })
    this.distritoService.getList().subscribe({
      next: (data) => {
        this.distritos = data;
      }, error:(error) => {
        console.log("error al cargar los distritos") 
      }
    })
  }
}
