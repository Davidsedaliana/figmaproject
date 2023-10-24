import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet, Scroll } from '@angular/router';

@Component({
  standalone:true,
  imports:[CommonModule,RouterLink,RouterModule,RouterOutlet],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  top(){
    scrollTo(0,0)    
  }
}
