import { IVehiculos,IUser } from "./Interface";


export class User implements IUser{
    id: number| null= null;
    email: string = '';
    password: string = '';

    constructor(user?:any){
    this.id =  user == undefined ? null : user.id;
    this.email = user == undefined ? '' : user.email;
    this.password = user == undefined ? '' : user.password;
    }
}

export class Vehiculo implements IVehiculos{
    id: number | null=null;
    marca: string ="";
    modelo: string ="";
    patente: string ="";
    color: string ="";
    
    
    constructor(vehiculos ?: any){
        this.id = vehiculos == undefined ? null : vehiculos.id;
        this.marca =  vehiculos == undefined ? '' : vehiculos.marca;
        this.modelo =  vehiculos == undefined ? '' : vehiculos.modelo;
        this.patente =  vehiculos == undefined ? '' : vehiculos.patente;
        this.color =  vehiculos == undefined ? '' : vehiculos.color;

        
    }
    
}
