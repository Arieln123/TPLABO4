import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User, Vehiculo } from '../Models';
import { Observable, catchError, lastValueFrom, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:4000/users';
  private user?: User;
  constructor(private apiService: ApiService,private http: HttpClient,private router:Router) {}

  public async checkAuth(email: string, password: string): Promise<boolean> {
    let users: User[] = [];

    try {
      let apiResponse = this.apiService.getUserToAuth(email, password); // Recibo la respuesta de la api en forma de observable

      users = await lastValueFrom(apiResponse); // Transformo el observable en una promesa y espero a que se resuelva con el await. Lo que me devuelve es el User[] porque asi se puso en el apiService
      localStorage.setItem('token', users[0].id!.toString());
    } catch (error) {
      console.log(error);
    }
    return users.length == 1;
  }

  checkStatusAutenticacion(): boolean {
    const token = localStorage.getItem('token');
    if (token==null) {
      return false;
    }
    return true
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/landing']);

  }
}


