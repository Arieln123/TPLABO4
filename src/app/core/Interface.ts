export interface IUser{
    id: number | null;
    email: string| null;
    apellido: string| null;
    nombre: string| null;
    dni: string| null;
    password: string| null;
    isAdmin:boolean;


}
export interface IVehiculos{
    idUser: number | null;
    marca: string| null;
    modelo: string| null;
    patente: string| null;
    color: string| null;
}
