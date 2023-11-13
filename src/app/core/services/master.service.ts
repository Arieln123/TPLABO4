import { Injectable } from '@angular/core';
import { colorentity } from 'src/app/Entity/colorentity';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { User } from '../Models';
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  GetColorList(): colorentity[] {
    return [
      { code: 'c0', name: 'black' },
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'White' }
    ]
  }

  GetUser():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  SaveUser(data:any){
    console.log(data)
    return this.http.post("http://localhost:3000/users",data);
  }

  GetUserbycode(code:any){
    return this.http.get("http://localhost:3000/user/"+code);
  }

 

}