import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http:HttpClient) { 
    console.log("http request");
  }
  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(map(res =>res));

  }
}
