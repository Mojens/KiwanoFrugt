import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: MenuItem[] | undefined;
  ingredient!: string;
  home: MenuItem | undefined;
  ngOnInit(): void {
    this.items = [{ label: 'Produkter', routerLink: '/produkter' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

}
