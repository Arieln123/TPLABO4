import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Productos, User } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}/users`);
  }

  getUserToAuth(email:string, password: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`);
  }

  getProductos(): Observable<Productos[]>{
    return this.http.get<Productos[]>(`${this.baseURL}/Productos`);
  }

  addProductos(createProductos: Productos): Observable<boolean> {
    const url = `${this.baseURL}/Productos`;
    
    
    return this.http.post<boolean>(url, createProductos);
  }

  editProductos(id: number, updateProductos: Productos): Observable<boolean> {
    const url = `${this.baseURL}/Productos/${id}`;
    return this.http.put<boolean>(url, updateProductos);
  }

  deleteProductos(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseURL}/Productos/${id}`)
    .pipe(
      map(resp => true), // Si sale bien retorna true. Recibir un response significa que salio bien
      catchError(error => of(false)) // Si hay algun error en la solicitud me regresa falso
    );
  }
}
