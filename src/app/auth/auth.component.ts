import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatCommonModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  standalone:true,
    imports:[RouterModule,MatInputModule,CommonModule,RouterLink,MatCommonModule,MatButtonModule],
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(private route:Router){

  }
login(){
  localStorage.setItem('token',Math.random().toString())
  this.route.navigate(['admin'])
} 
}
