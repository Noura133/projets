import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
//import axios from 'axios';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  

  

  constructor(public userService: UserService,public authService: AuthService,
    private router: Router) { }


/**
   * Write code on Method
   *
   * @return response()
   */
 ngOnInit(): void {
   this.getAllUser();
  
   


}
getAllUser(){
  this.userService.getAllUser().subscribe((data: User[])=>{
    this.users = data;
    console.log(this.users);
  }) 



}


userDetails(id: number){
  this.router.navigate(['user-details', id])
}
 
updateUser(id: number){
  this.router.navigate(['update-user', id]);

}

deleteUser(id: number){
  this.userService.deleteUser(id).subscribe(data => {
    console.log(data);
    this.getAllUser();
  })


}    

}
