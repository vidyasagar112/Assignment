import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';  // 👈 adjust path if needed
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent],   // 👈 must include Navbar
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
