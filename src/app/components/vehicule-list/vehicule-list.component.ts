import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicule } from 'src/app/models/vehicule';
import { AuthService } from 'src/app/services/auth.service';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {

  vehicules: Vehicule[] = [];

  constructor(public vehiculeService: VehiculeService, 
    public authService: AuthService,
    private router: Router) { }


/**
 * Write code on Method
 *
 * @return response()
 */
ngOnInit(): void {
 this.getAllVehicule();

 


}
getAllVehicule(){
this.vehiculeService.getAllVehicule().subscribe((data: Vehicule[])=>{
  this.vehicules = data;
  console.log(this.vehicules);
}) 



}


vehiculeDetails(id: number){
this.router.navigate(['vehicule-details', id])
}

updateVehicule(id: number){
this.router.navigate(['update-vehicule', id]);

}

deleteVehicule(id: number){
this.vehiculeService.deleteVehicule(id).subscribe(data => {
  console.log(data);
  this.getAllVehicule();
})


}    

}
