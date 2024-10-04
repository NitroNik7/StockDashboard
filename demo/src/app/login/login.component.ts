import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  getUsername(event: Event){
    // console.log((<HTMLInputElement>event.target).value);
    this.username = (<HTMLInputElement>event.target).value;
  }

  getPassword(event: Event){
    this.password = (<HTMLInputElement>event.target).value;
    // console.log((<HTMLInputElement>event.target).value);
  }

  authenticate(event: Event){
    // console.log((<HTMLButtonElement>event.target).value);
    console.log("username : " + this.username);
    console.log("password : " + this.password);
  }
}
