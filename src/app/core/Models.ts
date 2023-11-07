import { IVehiculos,IUser } from "./Interface";


export class User implements IUser{
    id: number| null= null;
    email: string = '';
    password: string = '';
    nombre: string="";
    apellido:string="";
    dni:string="";
    isAdmin: boolean= false;

    constructor(user?:any){
    this.id =  user == undefined ? null : user.id;
    this.email = user == undefined ? '' : user.email;
    this.password = user == undefined ? '' : user.password;
    this.nombre = user == undefined ? '' : user.nombre;
    this.apellido = user == undefined ? '' : user.apellido;
    this.dni = user == undefined ? '' : user.dni;
    this.isAdmin = user == undefined ? '' : user.isAdmin;
    }
}

export class Vehiculo implements IVehiculos{
    idUser: number | null=null;
    marca: string ="";
    modelo: string ="";
    patente: string ="";
    color: string ="";
    
    
    constructor(vehiculos ?: any){
        this.idUser = vehiculos == undefined ? null : vehiculos.idUser;
        this.marca =  vehiculos == undefined ? '' : vehiculos.marca;
        this.modelo =  vehiculos == undefined ? '' : vehiculos.modelo;
        this.patente =  vehiculos == undefined ? '' : vehiculos.patente;
        this.color =  vehiculos == undefined ? '' : vehiculos.color;

        
    }
    
}
