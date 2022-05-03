import { Vehicule } from './../models/vehicule';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  public baseUrl =  "http://localhost:8090/api/v1/vehicules";

  constructor(private http : HttpClient) { }

  getAllVehicule(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(`${this.baseUrl}`);
  }


  updateVehicule(id: number, vehiule: Vehicule): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, vehiule);
    
  } 
  vehiculeDetails(id: number): Observable<Vehicule>{
    return this.http.get<Vehicule>(`${this.baseUrl}/${id}`);
       }
  
  deleteVehicule(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
