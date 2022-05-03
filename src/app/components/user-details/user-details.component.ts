import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id!: number;
  user!: User;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.userDetails();
  }
  userDetails(){
    this.user = new User();
    
    this.id = this.route.snapshot.params['id']

    this.userService.userDetails(this.id).subscribe(data => {
      console.log(data);
      this.user = data;
    }, error => console.log(error));
  
  }

}