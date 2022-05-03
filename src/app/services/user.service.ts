import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
 
 public baseUrl =  "http://localhost:8090/api/v1/users";

 users!: User[];
 
  constructor(private http : HttpClient, private authService : AuthService ) { }

 /* public loginUserFromRemote(user: User):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`, user);

  }*/
  public registerUserFromRemote(user: User):Observable<any>{
    return this.http.post<any>(`${this.baseUrl }`, user);

  }
 

 getAllUser(): Observable<User[]> {
  let jwt = this.authService.getToken();
  jwt = "Bearer "+jwt;
  let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
     return this.http.get<User[]>(this.baseUrl,{headers:httpHeaders});
  }

  createUser(user: User): Observable<Object>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
      return this.http.post<Object>(this.baseUrl, user, {headers:httpHeaders});
  }
      
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
   //return this.http.put(`${this.baseUrl}/${id}`, user);
   let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.put<Object>(this.baseUrl, user, {headers:httpHeaders});
    
  } 
  userDetails(id: number): Observable<User>{
   // return this.http.get<User>(`${this.baseUrl}/${id}`);
   const url = `${this.baseUrl}/${id}`;
   let jwt = this.authService.getToken();
   jwt = "Bearer "+jwt;
   let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
     return this.http.get<User>(url,{headers:httpHeaders});
       }
  
  deleteUser(id: number): Observable<Object>{
    //return this.http.delete(`${this.baseUrl}/${id}`);
    const url = `${this.baseUrl}/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
        return this.http.delete(url,  {headers:httpHeaders});
  }
  
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);


}
}
