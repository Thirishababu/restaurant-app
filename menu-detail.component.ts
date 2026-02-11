import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent {
  menuItems = [
    { name: 'Pizza', description: 'Cheesy pizza with tomato sauce', price: 250 },
    { name: 'Burger', description: 'Juicy burger with fries', price: 120 },
    { name: 'Pasta', description: 'Penne tossed in creamy sauce', price: 180 },
    { name: 'Ice Cream', description: 'Vanilla scoop', price: 80 }
  ];

  item: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.item = this.menuItems.find(i => i.name === name);

    if (!this.item) {
      this.router.navigate(['/']);
    }
  }
}