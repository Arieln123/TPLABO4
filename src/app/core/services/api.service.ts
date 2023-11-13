import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Estacionamiento, User, Vehiculo } from '../Models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  

  getUserToAuth(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseURL}/users?email=${email}&password=${password}`
    );
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users`);
  }
  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(`${this.baseURL}/vehiculos`);
  }
  getEstacionamientos(): Observable<Estacionamiento[]> {
    return this.http.get<Estacionamiento[]>(`${this.baseURL}/parkings`);
  }

  addVehiculo(createVehiculo: Vehiculo): Observable<boolean> {
    const url = `${this.baseURL}/vehiculos`;
    return this.http.post<boolean>(url, createVehiculo);
  }
  
  editParking(id: number, updateParking: Estacionamiento): Observable<boolean> {
    const url = `${this.baseURL}/parkings/${id}`;
    return this.http.put<boolean>(url, updateParking);
  }

  
  addParking(createParking: Estacionamiento): Observable<boolean> {
    const url = `${this.baseURL}/parkings`;
    return this.http.post<boolean>(url, createParking);
  }

  editVehiculo(idVehiculo: number, updateVehiculo: Vehiculo): Observable<boolean> {
    const url = `${this.baseURL}/vehiculos/${idVehiculo}`;
    return this.http.put<boolean>(url, updateVehiculo);
  }

  deleteVehiculo(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseURL}/vehiculos/${id}`).pipe(
      map((resp) => true), // Si sale bien retorna true. Recibir un response significa que salio bien
      catchError((error) => of(false)) // Si hay algun error en la solicitud me regresa falso
    );
  }
}
