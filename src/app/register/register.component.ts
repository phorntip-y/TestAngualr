import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private serviceauth: AuthService, private r: Router) { }

  ngOnInit(): void {
  }
  register(value: any) {
    console.log(value);
    this.serviceauth.register(value).subscribe((data) => {
      if(data.status === 'ok'){
        alert(data.message);
        this.r.navigate(['/']);
      }else{
        alert(data.message);

      }
    });

  }

}
