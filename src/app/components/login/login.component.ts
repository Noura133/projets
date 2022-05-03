
import { Component, OnInit } from '@angular/core';
import { NgForm,  } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User; 
  msg = '';
  err:number = 0;

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

 onLoggedin(){
    this.authService.login(this.user).subscribe((data)=> {
      let jwToken  = data.headers.get('Authorization');
   //  this.authService.saveToken(jwToken);
      this.router.navigate(['/profil']);              
    },(err)=>{   this.err = 1;
});

  }







 /* loginEmployee (){
this.employeeservice.loginEmployeeFromRemote(this.employee).subscribe(
  data => {
    console.log("response recieved") ;
    this.router.navigate(['/employees'])

},
  error  => {
    console.log("exception occured");
    this.msg="Bad Credentials, please enter valid emailId and password";
}
  )
   
 
  }

  gotoregister(){
    this.router.navigate(['/register']);
 (ngSubmit) ="loginEmployee()"
  }*/

}