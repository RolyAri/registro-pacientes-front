import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { BuscarPacientesComponent } from './components/buscar-pacientes/buscar-pacientes.component';

//peticiones http
import { HttpClientModule } from '@angular/common/http';
//angular material components
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DatosPacienteComponent } from './components/datos-paciente/datos-paciente.component';
import { CrearPacienteComponent } from './pages/crear-paciente/crear-paciente.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ListaPacientesComponent,
    BuscarPacientesComponent,
    InicioComponent,
    DatosPacienteComponent,
    CrearPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
