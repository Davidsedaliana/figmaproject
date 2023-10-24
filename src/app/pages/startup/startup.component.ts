import { Component,Input, OnInit } from '@angular/core';
import { RouterOutlet,RouterModule,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JoinComponent } from '../join/join.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NavBar } from 'src/app/models/navbar_interface';
import { RequestServiceService } from 'src/services/request-service.service';
import { environment } from 'src/environment/environment.prod';
import { allposts } from 'src/app/models/allposts_interface';

@Component({
  standalone:true,
  imports:[CommonModule,RouterLink,RouterModule,RouterOutlet,JoinComponent,NavbarComponent],
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit{
  @Input('item') item!: NavBar;
  data:NavBar[]= []
  data2:allposts[]=[]
constructor(private requestService:RequestServiceService){}
ngOnInit(): void {
  this.requestService.getData<NavBar[]>(environment.category.get).subscribe((user:NavBar[])=>{
    this.data =user;
  });
  this.requestService.getData<allposts[]>(environment.posts.get).subscribe((user2:allposts[])=>{
    this.data2 =user2;
  });
}
}
