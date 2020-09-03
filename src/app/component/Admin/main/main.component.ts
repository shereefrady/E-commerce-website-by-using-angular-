import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 users:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.apiData.subscribe(
      x=>{this.users=x.data;},
      error=>{console.log(error);}
    );
  }

}
