import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'notes-angular';

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/']);
  }
}
