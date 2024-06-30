import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username ="";
  password:any = "" ;
  errorMsg = "" ;

  login()
  {
    if(this.username.trim().length === 0)
      {
        this.errorMsg="username is required";
      } 
      else if(this.password.trim().length === 0)
        {
          this.errorMsg="password is required";
        }
        else{
          this.errorMsg="";
          let res= this.auth.login(this.username,this.password);
          if(res===200)
            {
              this.router.navigate(['home']);
            }
            if(res==403)
              {
                this.errorMsg="login failed";
              }
        }
  }

  constructor(private auth: AuthService, private router:Router){}
  ngOnInit(): void{}
}
