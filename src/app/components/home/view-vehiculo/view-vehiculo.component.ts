import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vehiculo } from 'src/app/core/Models';

@Component({
  selector: 'app-view-vehiculo',
  templateUrl: './view-vehiculo.component.html',
  styleUrls: ['./view-vehiculo.component.css']
})
export class ViewVehiculoComponent {

  @Input() inputVehiculos: Array<Vehiculo> = []
 


}

