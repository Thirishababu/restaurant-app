import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-list.html',
  styleUrls: ['./menu-list.css']
})
export class MenuList {
  menuItems = [
    { name: 'Pizza', price: 250 },
    { name: 'Burger', price: 120 },
    { name: 'Pasta', price: 180 },
    { name: 'Ice Cream', price: 80 }
  ];
}