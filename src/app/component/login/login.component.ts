import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/classes/user';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { NgForOf, Location } from '@angular/common';
// import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userinfo: User;
  useremail: string;
  userPassword: any;
  form;
  constructor(private fb: FormBuilder, private alluser: UserService, private location: Location,

    private myRoute: Router,
    private auth: AuthService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  goback() {
    this.location.back();
  }
  login() {
    if (this.form.valid) {
      this.alluser.apiData.subscribe(
        x => {
          for (let i = 0; i < x.data.length; i++) {
            this.useremail = x.data[0].user_email;
            // this.userPassword = x.data[0].user_password;
          //  console.log(this.userPassword);
            if (this.useremail == this.form.value.email) {
              this.auth.sendToken(this.form.value.email);
              //  console.log("Admin ");
              // console.log(this.useremail);
               this.myRoute.navigate(["main"]);
            }
            else {
              if (x.data[i].user_email == this.form.value.email) {
                this.myRoute.navigate(["/home"]);
                // console.log("Doooooooooooone");
              }
            }
          }
        },
        err => { console.log('errors already caught... will not run'); }
      );
    }
    else {
      console.log("not valid form");
    }

    // this.myRoute.navigate(["home"]);
  }
}


 // else {
            //   let p = this.form.value.email;
            //   x.data.forEach(function (item, index) {

            //     console.log(item.user_email);
            //   });

            // }

 //  let r= x.data[].user_email;
        //  console.log(p);
        //  for(let i=0;i<r;i++){
        //    if(r[i]==p){
        //      console.log(r[i]);
        //    }
        //  }
          // console.log(x);
          // for(let z of x.data.length){
          //   if(z==x){
          //     console.log(z);
          //   }
          // }
          // x.data.filter(function (e)){

              // }

