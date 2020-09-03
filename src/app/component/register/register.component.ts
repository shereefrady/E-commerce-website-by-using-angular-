import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
// import { userInfo } from 'os';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // form;
  userinfo: User;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private auth: AuthService, private user: UserService) {
    this.userinfo = new User();
    //   this.form = fb.group({
    //     Name: ['', [Validators.required]],
    //     email: ['', [Validators.required, Validators.email]],
    //     password: ['', Validators.required]

    // });
  }
  ngOnInit() {

  }


  formregister() {
    // if (this.form.valid) {
    // this.auth.sendToken(this.form.value.email)
    // this.myRoute.navigate(["register"]);
    // console.log(this.userinfo);
    this.user.addUser(this.userinfo)
      .subscribe(res => {
        console.log(res);
        this.myRoute.navigate(['/register']);
      },
        err => { console.log(err); });


  }
}

// }



