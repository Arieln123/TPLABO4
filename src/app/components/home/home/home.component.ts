import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Estacionamiento, Vehiculo } from 'src/app/core/Models';
import { lastValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  public vehiculos: Array<Vehiculo> = [];
  
  ngOnInit(): void {
    this.getVehiculos();
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


  public createParking(parking: Estacionamiento) {

    this.apiService.addParking(parking).subscribe({
      next: () => {
        
        this.router.navigate(['/home']);
        alert("Parking creado con exito");
        
        
      },
      error: () => alert("No se ha podido crear el usuario")
    })
  }

  
}
