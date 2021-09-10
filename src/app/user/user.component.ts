import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {  
        users;      
  constructor(private userService:UserService) { 
        this.userService.getUsers().subscribe(users =>{
              this.users=users;
        });
  }

  ngOnInit(): void {
  }

}

