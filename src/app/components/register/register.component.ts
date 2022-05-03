import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  msg = '';

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  
  registerUser (){
    this.userService.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved") ;
       this.router.navigate(['/loginsuccess']);

},
error  => {
  console.log("exception occured");
  this.msg=error.error;
}
    )
  }
}
