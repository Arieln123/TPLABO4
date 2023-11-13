import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Estacionamiento, Vehiculo } from 'src/app/core/Models';
import { lastValueFrom } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';



import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/Models';
import { MasterService } from 'src/app/core/services/master.service';
import { PopupComponent } from 'src/app/components/popup/popup.component';










@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataSource: any;

  
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;










  constructor(private apiService: ApiService, private router: Router,private service: MasterService, private dialog: MatDialog) {}
  public users: Array<User> = [];
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
  addcustomer(){
    this.Openpopup(0, 'Add Customer',PopupComponent);
  }

  Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      // console.log(item)
      this.loadUser();
    })
  }

  loadUser() {
    this.service.GetUser().subscribe(res => {
      this.users = res;
      this.dataSource = new MatTableDataSource<User>(this.users);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }
  
}
