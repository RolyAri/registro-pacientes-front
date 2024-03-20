import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CrearPacienteComponent } from './pages/crear-paciente/crear-paciente.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent,
    pathMatch: 'full',
  },
  {
    path:'crear-paciente',
    component: CrearPacienteComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
