import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Vehiculo } from 'src/app/core/Models';
import { lastValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  public vehiculos: Array<Vehiculo> = [];

  ngOnInit(): void {

    this.getVehiculos();

  }

  public async getVehiculos() {

    try {

      let responseApi = this.apiService.getVehiculos();

      const data = await lastValueFrom(responseApi);

      this.vehiculos = data.map((vehiculoData: any) => new Vehiculo(vehiculoData));

    } catch (error) {
      console.error(error);
    }
  }
/*
  public editPerson(person: Person) {

    const dialogRef = this.dialog.open(EditPersonComponent, { data: person, height: '400px', width: '350px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró con resultado:', result);
    });
  }

  public createPerson(person: Person) {

    this.apiService.addPerson(person).subscribe({
      next: () => {
        this.getPersons();
        alert("Usuario creado con exito");

      },
      error: () => alert("No se ha podido crear el usuario")
    })
  }

  public deletePerson(id: number){

      this.apiService.deletePerson(id).subscribe({
        next: ()=>{
          this.getPersons();
          alert("Usuario eliminado con exito");
        },
        error: ()=> alert("No se ha podido eliminar el usuario")
      })
  }
*/
}
