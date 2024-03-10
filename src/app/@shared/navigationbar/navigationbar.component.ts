import { Component } from '@angular/core';
import { faUser, faHeart, faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent {
  faUser = faUser;
  faHeart = faHeart;
  faCartShopping = faCartShopping;
  faBars = faBars;
  faTimes = faTimes;
  isMobileNavOpen = false;

  constructor() { }


  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

}
