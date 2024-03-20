import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements AfterViewInit, OnInit{
  dataSource = new MatTableDataSource<Paciente>();
  displayedColumns: string[] = ['Nombre', 'Tipo de Doc', 'Numero de Doc','Fecha Nacimiento', 'Codigo de Asegurado', 'Acciones'];  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private pacienteService: PacienteService){}
  ngOnInit(): void {
    this.mostrarPacientes();
  }

  mostrarPacientes(){
    this.pacienteService.getList().subscribe({
      next:(data)=>{
        console.log(data);
        this.dataSource.data=data;
      },error:(error)=>{
        console.log(error);
      }
    });
  }
} 