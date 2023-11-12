import { Component, OnInit, Inject } from '@angular/core';
import { Estacionamiento, User, Vehiculo } from 'src/app/core/Models';
import { ApiService } from 'src/app/core/services/api.service';
import { lastValueFrom } from 'rxjs';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
})
export class ParkingComponent implements OnInit {
  public estacionamientos: Array<Estacionamiento> = [];
  public users: Array<User> = [];
  public vehiculos: Array<Vehiculo> = [];

  constructor(private apiService: ApiService, public dialog: MatDialog) {}

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

      this.users = data.map((usersData: any) => new User(usersData));
    } catch (error) {
      console.error(error);
    }
  }

  public setDateOut(parking: Estacionamiento) {
    parking.dateOut = Date.now();
    this.apiService.editParking(parking.id!, parking).subscribe({
      next: () => alert('Auto retirado con Exito'),
      error: (error) => alert(error),
    });
  }

  openDialog(id: any) {
    console.log(id);
    const user = this.users.find((u) => u.id == id);
    console.log(user);
    if (user) {
      const dialogRef = this.dialog.open(DialogDataExampleDialog, {
        data: user,
        width: '400px', // Ajusta el valor según tus necesidades
        position: {
          left: '5%', // Centra horizontalmente
        },
      });

      // Almacena la referencia del diálogo para cerrarlo más tarde si es necesario
      dialogRef.afterClosed().subscribe((result) => {
        console.log('El diálogo se cerró', result);
        // Puedes realizar acciones adicionales después de cerrar el diálogo si es necesario
      });
    }
  }

  openVehicleDialog(id: any) {
    console.log(id);
    const vehicle = this.vehiculos.find((v) => v.id == id);
    console.log(vehicle);
    if (vehicle) {
      const dialogRef = this.dialog.open(VehicleDetailsDialogComponent, {
        data: vehicle,
        width: '400px', // Ajusta el valor según tus necesidades
        position: {
          left: '70%', // Centra horizontalmente
        },
      });

      // Almacena la referencia del diálogo para cerrarlo más tarde si es necesario
      dialogRef.afterClosed().subscribe((result) => {
        console.log('El diálogo se cerró', result);
        // Puedes realizar acciones adicionales después de cerrar el diálogo si es necesario
      });
    }
  }
}

@Component({
  selector: 'app-dialog-data-example-dialog',
  template: `
    <h2 mat-dialog-title>Datos del Usuario</h2>
    <div mat-dialog-content>
      <p>Email: {{ data.email }}</p>
      <p>Nombre: {{ data.nombre }}</p>
      <p>Apellido: {{ data.apellido }}</p>
      <p>DNI: {{ data.dni }}</p>
      <button mat-button (click)="closeDialog()">Cerrar</button>
    </div>
  `,
})
export class DialogDataExampleDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<DialogDataExampleDialog>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  email?: string;
  nombre?: string;
  apellido?: string;
  dni?: string;
  // Agrega más propiedades según sea necesario
}

@Component({
  selector: 'app-vehicle-details-dialog',
  template: `
    <h2 mat-dialog-title>Datos del Vehículo</h2>
    <div mat-dialog-content>
      <p>Marca: {{ data.marca }}</p>
      <p>Modelo: {{ data.modelo }}</p>
      <p>Patente: {{ data.patente }}</p>
      <p>Color: {{ data.color }}</p>
      <!-- Agrega más propiedades según tus necesidades -->
      <button mat-button (click)="closeDialog()">Cerrar</button>
    </div>
  `,
})
export class VehicleDetailsDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<VehicleDetailsDialogComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
