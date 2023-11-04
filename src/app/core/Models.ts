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

export class Vehiculos implements IVehiculos{
    id: number | null;
    description: string| null;
    price: number | null;
    stock: number | null;

    constructor(v ?: any){
        this.id = productos == undefined ? null : productos.id;
        this.description =  productos == undefined ? '' : productos.description;
        this.price =  productos == undefined ? '' : productos.price;
        this.stock =  productos == undefined ? '' :productos.stock;
    }
}
