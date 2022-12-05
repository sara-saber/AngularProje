import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
   User = new Users();
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('token')) {
      this.router.navigate(['/admin/dashboard'])
    }
    this.loginForm = this.fb.group({
      email: [""],
      password: [""]
    })
  }
  prepareData() {
    this.User = this.loginForm.value
  }
  login() {
    this.prepareData()
    if (this.User.email == "" || this.User.password == "") {
      alert("please enter your email and password")
    }
    else {
      this.authService.login(this.User).subscribe(
        (res: Users) => {
          localStorage.setItem('token', JSON.stringify(res.id))
          this.router.navigate(['/admin/dashboard'])
        },
        (err:any)=>this.loginForm.reset()
      )
    }

  }

}
