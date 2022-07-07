import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email= '';
  pass='';
  constructor() { }

  ngOnInit(): void {
  }

  submit(login:any){
    console.log(this.email);
    console.log(this.pass);
  }
}
