import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signForm!: FormGroup;
   User = new Users();


  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.signForm = this.fb.group({
      name: [""],
      password: [""],
      email: [""],
      phone: [""],
    })
  }
 
  prepareData() {
    this.User = this.signForm.value

  }
  get(){
    this.authService.getAll().subscribe()
  }
  signup():void{
   this.prepareData()
   this.authService.signUp(this.User).subscribe(
    (res:any)=>this.router.navigate(['login']),
      (err:any)=>console.log(err),
      ()=>console.log("observable is done")
   )
  }

}
