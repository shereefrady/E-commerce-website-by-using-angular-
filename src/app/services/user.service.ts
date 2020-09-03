import { Injectable } from '@angular/core';

import { User } from '../classes/user';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  // getalluser():Observable<Array<User>>{
  //   const url=`${environment.Api_url}user`;
  //   return this.http.get<Array<User>>(url);

  // }
  public apiData = ajax('http://localhost:8000/api/user').pipe(
      retry(3), // Retry up to 3 times before failing
      map(res => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      catchError(err => of([]))
    );
  addUser(newUser: User) :Observable<User>{
    const APIURL = `${environment.Api_url}insertuser`;
    const httpOptions = {headers:new HttpHeaders({
      'Content-Type': 'application/json', 
      'Accept': ' */*'
      // ,'Authorization': 'my-auth-token'
        })};

   return this.http.post<User>(APIURL, JSON.stringify(newUser), httpOptions);
  }

}
