import { Component } from '@angular/core';
import { faUser, faHeart, faCartShopping, faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent {
  faUser = faUser;
  faHeart = faHeart;
  faCartShopping = faCartShopping;
  faSearch = faSearch;
  faBars = faBars;
  faTimes = faTimes;
  isMobileNavOpen = false;

  constructor() { }


  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

}
