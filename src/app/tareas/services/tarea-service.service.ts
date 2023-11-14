import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareasKey = "tareas";
  private tareas: Tarea[] = [];
  
  constructor() {
    const lSTareas = localStorage.getItem(this.tareasKey);
    if ( lSTareas ) {
      this.tareas = JSON.parse(lSTareas);
    }
  }

  getTareas(): Tarea[] {
    return this.tareas;
  }
}
