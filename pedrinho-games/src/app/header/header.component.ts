import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;   

  constructor(private router: Router) {
   
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => (this.menuOpen = false));
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    if ((event.target as Window).innerWidth > 768 && this.menuOpen) {
      this.menuOpen = false;
    }
  }
}


