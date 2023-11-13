import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { MiListaPageComponent } from './pages/mi-lista-page/mi-lista-page.component';
import { FormularioPageComponent } from './pages/formulario-page/formulario-page.component';


@NgModule({
  declarations: [
    MiListaPageComponent,
    FormularioPageComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
