import { IVehiculos, IUser, IEstacionamiento } from './Interface';

export class User implements IUser {
  id: number | null = null;
  email: string = '';
  password: string = '';
  nombre: string = '';
  apellido: string = '';
  dni: string = '';
  isAdmin: boolean = false;

  constructor(user?: any) {
    this.id = user == undefined ? null : user.id;
    this.email = user == undefined ? '' : user.email;
    this.password = user == undefined ? '' : user.password;
    this.nombre = user == undefined ? '' : user.nombre;
    this.apellido = user == undefined ? '' : user.apellido;
    this.dni = user == undefined ? '' : user.dni;
    this.isAdmin = user == undefined ? '' : user.isAdmin;
  }
}

export class Vehiculo implements IVehiculos {
  id: number | null = null;
  marca: string = '';
  modelo: string = '';
  patente: string = '';
  color: string = '';

  constructor(vehiculos?: any) {
    this.id = vehiculos == undefined ? null : vehiculos.id;
    this.marca = vehiculos == undefined ? '' : vehiculos.marca;
    this.modelo = vehiculos == undefined ? '' : vehiculos.modelo;
    this.patente = vehiculos == undefined ? '' : vehiculos.patente;
    this.color = vehiculos == undefined ? '' : vehiculos.color;
  }
}

export class Estacionamiento implements IEstacionamiento{
    id: number | null=null;
  idVehiculo: number | null=null;
  idUser: number | null=null;
  dateIn: number | null=null;
  dateOut: number | null=null;
        
  constructor(estacionamiento ?: any) {
    this.id = estacionamiento == undefined ? null : estacionamiento.id;
    this.idVehiculo = estacionamiento == undefined ? null : estacionamiento.idVehiculo;
    this.idUser = estacionamiento == undefined ? null : estacionamiento.idUser;
    this.dateIn = estacionamiento == undefined ? null : estacionamiento.dateIn;
    this.dateOut = estacionamiento == undefined ? null : estacionamiento.dateOut;
  }
  

}
