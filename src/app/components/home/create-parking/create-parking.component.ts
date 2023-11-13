import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Estacionamiento, User, Vehiculo } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { ParkingComponent } from 'src/app/components/home/parking/parking.component';

@Component({
  selector: 'app-create-parking',
  templateUrl: './create-parking.component.html',
  styleUrls: ['./create-parking.component.css'],
})
export class CreateParkingComponent implements OnInit {
  public newParking: Estacionamiento = new Estacionamiento();
  public users: Array<User> = [];
  public vehiculos: Array<Vehiculo> = [];

  @Output() public parkingToCreate: EventEmitter<Estacionamiento> =
    new EventEmitter();
  ChangeUser(e: any) {
    this.newParking.idUser = e.target.value;
  }
  ChangeVehiculo(e: any) {
    this.newParking.idVehiculo = e.target.value;
  }

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
    this.apiService.getVehiculos().subscribe((data: any) => {
      this.vehiculos = data;
    });
  }

  public createParking() {
    this.newParking.dateIn = Date.now();
    this.parkingToCreate.emit(this.newParking);
  }
}
