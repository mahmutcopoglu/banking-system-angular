import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any = []
  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe((response: any) => {
      this.users = response;
    })
  }

  detailUser(user:any){
    this.router.navigate(['users/',user.id])
    
  }

}
