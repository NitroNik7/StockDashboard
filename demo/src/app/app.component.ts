
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Demo Project';
  background: string = "lightgreen";
  user:string = 'Nikhil';
  source:string = 'https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  mt = 'margin-top: 5px';
  applyPara:boolean = true;

  getUserAction(event: Event){
    console.log("User action: " + event);
  }

  getSearchValue(event: Event){
    console.log((<HTMLInputElement>event.target).value);
  }
}
