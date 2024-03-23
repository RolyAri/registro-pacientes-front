import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DepartamentoDTO } from 'src/app/models/DTO/DepartamentoDTO';
import { DistritoDTO } from 'src/app/models/DTO/DistritoDTO';
import { ProvinciaDTO } from 'src/app/models/DTO/ProvinciaDTO';
import { Paciente } from 'src/app/models/Paciente';
import { Sexo } from 'src/app/models/Sexo';
import { TipoDocumentoIdentidad } from 'src/app/models/TipoDocumentoIdentidad';
import { Ubigeo } from 'src/app/models/Ubigeo';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DistritoService } from 'src/app/services/distrito.service';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { SexoService } from 'src/app/services/sexo.service';
import { TipoDocumentoIdentidadService } from 'src/app/services/tipo-documento-identidad.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-datos-paciente',
  templateUrl: './datos-paciente.component.html',
  styleUrls: ['./datos-paciente.component.css']
})
export class DatosPacienteComponent implements OnInit {
  formPaciente: FormGroup;
  formAcompanante: FormGroup;
  constructor(
    private tipoDocumentoIdentidadService: TipoDocumentoIdentidadService, 
    private sexoService: SexoService, 
    private ubigeoService: UbigeoService,
    private departamentoService: DepartamentoService,
    private provinciaService: ProvinciaService,
    private distritoService: DistritoService,
    private formBuilder: FormBuilder
    ) {
      this.formPaciente = this.formBuilder.group({
        pacienteTipoDocumento: ['', Validators.required],
        pacienteNumDocumento: ['', Validators.required],
        pacienteApePaterno: ['', Validators.required],
        pacienteApeMaterno: ['', Validators.required],
        pacienteNombres: ['', Validators.required],
        pacienteSexo: ['', Validators.required],
        pacienteFechaNacimiento: ['', Validators.required],
        pacienteEdad: {value: '', disabled: true},
        pacienteDireccion: ['', Validators.required],
        pacienteLugarNacimiento: ['', Validators.required],
        pacienteIdDepartamento: ['', Validators.required],
        pacienteIdProvincia: ['', Validators.required],
        pacienteIdDistrito: ['', Validators.required]
      })
      this.formAcompanante = this.formBuilder.group({
        acompananteTipoDocumento: ['', Validators.required],
        acompananteNumDocumento: ['', Validators.required],
        acompananteApePaterno: ['', Validators.required],
        acompananteApeMaterno: ['', Validators.required],
        acompananteNombres: ['', Validators.required],
        acompananteSexo: ['', Validators.required],
        acompananteFechaNacimiento: ['', Validators.required],
        acompananteEdad: {value: '', disabled: true},
        acompananteDireccion: ['', Validators.required],
        acompananteLugarNacimiento: ['', Validators.required],
        acompananteIdDepartamento: ['', Validators.required],
        acompananteIdProvincia: ['', Validators.required],
        acompananteIdDistrito: ['', Validators.required]
      })
     }

  tiposDocumentos: TipoDocumentoIdentidad[] = [];
  sexos: Sexo[] = [];
  ubigeos: Ubigeo[] = [];
  departamentos: DepartamentoDTO[] = [];
  provincias: ProvinciaDTO[] = [];
  distritos: DistritoDTO[] = [];

  ubigeosEntidades: any = {
    departamentos: {
      paciente: this.departamentos,
      acompanante: this.departamentos
    },
    provincias: {
      paciente: this.provincias,
      acompanante: this.provincias
    },
    distritos: {
      paciente: this.distritos,
      acompanante: this.distritos
    }
  }

  departamentosPaciente: DepartamentoDTO[] = [];
  provinciasPaciente: ProvinciaDTO[] = [];
  distritosPaciente: DistritoDTO[] = [];
  
  departamentosAcompanante: DepartamentoDTO[] = [];
  provinciasAcompanante: ProvinciaDTO[] = [];
  distritosAcompanante: DistritoDTO[] = [];

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
        this.ubigeosEntidades.departamentos.paciente = data;
        this.ubigeosEntidades.departamentos.acompanante = data;
        //this.departamentos=data;
      }, error:(error) => {
        console.log("error al cargar los departamentos")
      }
    })
    /*this.provinciaService.getList().subscribe({
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
    })*/
  }

  addPacienteAcompanante(){
    console.log(this.formPaciente)
    const PacienteDTO: Paciente={
      id_tipo_docide : this.formPaciente.value.pacienteTipoDocumento,
      no_docide: this.formPaciente.value.pacienteNumDocumento,
      no_apepat: this.formPaciente.value.pacienteApePaterno,
      no_apemat: this.formPaciente.value.pacienteApeMaterno,
      no_nombres: this.formPaciente.value.pacienteNombres,
      id_sexo: this.formPaciente.value.pacienteSexo,
      fe_nacimiento: this.formPaciente.value.pacienteFechaNacimiento,
      no_lugar_nacimiento: this.formPaciente.value.pacienteLugarNacimiento,
      no_direccion: this.formPaciente.value.pacienteDireccion,
      co_ubigeo: this.formPaciente.value.pacienteIdDepartamento+this.formPaciente.value.pacienteIdProvincia+this.formPaciente.value.pacienteIdDistrito
    }

    
  }

  obtenerProvinciasPorDpto(codDpto: string, form: string){
    this.provinciaService.getList(codDpto).subscribe({
      next: (data) =>{
        if(form === 'paciente'){
           this.formPaciente.get('pacienteIdProvincia')?.setValue('00');
           this.ubigeosEntidades.provincias.paciente = data;
          }
        if(form === 'acompanante') {
          this.formAcompanante.get('acompananteIdProvincia')?.setValue('00');
           this.ubigeosEntidades.provincias.acompanante = data;
        }
        this.provincias = data;
        console.log(this.provincias);
      },
      error: (error)=>{
       console.log(error); 
      }
    });
  }

  obtenerDistritosPorProvinciaAndDpto(codPro:string, codDpto:string, form: string){
    this.distritoService.getList(codPro, codDpto).subscribe({
      next: (data) =>{
        if(form === 'paciente'){ 
          this.formPaciente.get('pacienteIdDistrito')?.setValue('00');
          this.ubigeosEntidades.distritos.paciente = data;
        }
        if(form === 'acompanante'){ 
          this.formAcompanante.get('acompananteIdDistrito')?.setValue('00'); 
          this.ubigeosEntidades.distritos.acompanante = data;
        }
        this.distritos = data;
        console.log(this.distritos)
      },
      error: (error)=>{
       console.log(error); 
      }
    })
  }

  calcularEdad(fechaNacimiento: Date, form: string){
    const fechaNacimientoF = new Date(fechaNacimiento);
    const edadMilisegundos = new Date().getTime() - fechaNacimientoF.getTime();
    const edad = new Date(edadMilisegundos);
    const edadPersona=  Math.abs(edad.getUTCFullYear() - 1970);
    if (form == 'paciente') this.formPaciente.get('pacienteEdad')?.setValue(edadPersona);
    if (form == 'acompanante') this.formAcompanante.get('acompananteEdad')?.setValue(edadPersona);
  }
}
