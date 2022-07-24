import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';


function togglenav(){
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");

  sidebar.classList.toggle("active");
    if(btn.classList.contains("bx-menu")){
      btn.classList.replace("bx-menu" , "bx-menu-alt-right");
    }else{
      btn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  $: any;
  role : string;
  user = JSON.parse(sessionStorage.getItem('user'));
  constructor(public authservice : AuthService){}



 ngOnInit(): void {
      this.role = this.authservice.getCurrentUser().role.nomrole;
 }

ToggleSidebar(){
   togglenav();
 }

  title = 'Bee-clear';
}
