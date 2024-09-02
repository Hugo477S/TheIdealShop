import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ideal_shop';

  constructor(
    private router: Router
  ) {}

  navigate(event:any){
    this.router.navigate(['', event.target.id]);
  }
}
