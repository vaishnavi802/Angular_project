import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router:Router) { }

  login(uname: string,pword: any)
  {
    console.log("hello");
    if(uname == "vaish" && pword == 1234)
      {
        console.log("hello");
        return 200;
      }
      else{
        return 403;
      }

  }

  logout()
  {
    this.router.navigate(['login']);
  }

 
}
