import { Component, EventEmitter, Output } from '@angular/core';
import { Estacionamiento } from 'src/app/core/Models';

@Component({
  selector: 'app-create-parking',
  templateUrl: './create-parking.component.html',
  styleUrls: ['./create-parking.component.css']
})
export class CreateParkingComponent {
  public newParking: Estacionamiento = new Estacionamiento();

  @Output() public parkingToCreate: EventEmitter<Estacionamiento> = new EventEmitter();

  constructor(){}

  public createParking(){
    this.newParking.dateIn = Date.now();
    this.parkingToCreate.emit(this.newParking);
  }
}
