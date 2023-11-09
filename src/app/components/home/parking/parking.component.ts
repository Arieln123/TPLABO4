import { Component, OnInit } from '@angular/core';
import { Estacionamiento, User, Vehiculo } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  public estacionamientos: Array<Estacionamiento> = [];
  public users: Array<User> = [];
  public vehiculos: Array<Vehiculo> = [];


  constructor(private apiService: ApiService) {}


  
  ngOnInit(): void {
    this.getEstacionamientos();
    this.getVehiculos();
    this.getUsers();
  }

  public async getEstacionamientos() {
    try {
      let responseApi = this.apiService.getEstacionamientos();

      const data = await lastValueFrom(responseApi);

      this.estacionamientos = data.map(
        (estacionamientosData: any) => new Estacionamiento(estacionamientosData)
      );
    } catch (error) {
      console.error(error);
    }
  }

  public async getVehiculos() {
    try {
      let responseApi = this.apiService.getVehiculos();

      const data = await lastValueFrom(responseApi);

      this.vehiculos = data.map(
        (vehiculoData: any) => new Vehiculo(vehiculoData)
      );
    } catch (error) {
      console.error(error);
    }
  }

  public async getUsers() {
    try {
      let responseApi = this.apiService.getUsers();

      const data = await lastValueFrom(responseApi);

      this.users = data.map(
        (usersData: any) => new User(usersData)
      );
    } catch (error) {
      console.error(error);
    }
  }

  public setDateOut(parking:Estacionamiento){
    parking.dateOut=Date.now();
    this.apiService.editParking(parking.id!, parking).subscribe({
      next: () => alert("Auto retirado con Exito"),
      error: (error) => alert(error)
    })
  }


}
