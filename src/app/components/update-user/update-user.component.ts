import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id!: number;
  user!: User;
  constructor (private userService: UserService,private router: Router,
  private route: ActivatedRoute ) {}  

  ngOnInit(): void {
    this.user = new User();
    
    this.id = this.route.snapshot.params['id']

    this.userService.getUserById(this.id)
    .subscribe(data => {
      console.log(data);
      this.user = data;
    }, error => console.log(error));
  }
  
  
  
  onSubmit(){
    this.userService.updateUser(this.id, this.user)
    .subscribe(data => {
    this.goToUserList();

  }, error => console.log(error));
}

  goToUserList(){
    this.router.navigate(['/users']);

  }
 

}
