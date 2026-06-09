import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // This line is ESSENTIAL!
  templateUrl: './app.component.html'
})
export class AppComponent {}