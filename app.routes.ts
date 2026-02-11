import { Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';

export const appRoutes: Routes = [
  { path: '', component: MenuListComponent },
  { path: 'menu/:name', component: MenuDetailComponent }
];