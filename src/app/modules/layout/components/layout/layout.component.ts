import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getProfile()
    .subscribe(() => {
      console.log('get profile');
    });
  }
}
