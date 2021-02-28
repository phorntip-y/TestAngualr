import { Router, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userprofile: any;
  isLogin = true;
  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(3), Validators.required]]
  })
  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) {
    this.isLogin = this.authservice.islogin();
  }

  ngOnInit(): void {
  }
  login() {
    console.log(this.loginForm.value);
    this.authservice.loging(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if (res) {
        this.isLogin = false;
        alert('เข้าสู่ระบบเรียบร้อย');
        localStorage.setItem('token', JSON.stringify(res));
        this.authservice.getprofile().subscribe((data) => {
          localStorage.setItem('profile', JSON.stringify(data));

          console.log(data);
        });

      }
    },
      (error) => {
        console.log(error.error.error_description)
      });
  }
  logout() {
    this.authservice.logout();
    this.isLogin = true;
    this.router.navigateByUrl('/');
  }

}
