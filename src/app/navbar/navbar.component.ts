import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;
  isScrolled = false;
  activeSection: string = 'home';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Smooth scroll
  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    this.menuOpen = false; // close mobile menu
  }

  // Sticky + Scrollspy
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;

    // Track active section
    const sections = ['home', 'services', 'work', 'about', 'contact'];
    for (let sec of sections) {
      const element = document.getElementById(sec);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = sec;
          break;
        }
      }
    }
  }
}
