import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { TokenService } from '@services/token.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent  implements OnInit{
  constructor(private authService:AuthService, private tokenService:TokenService) {}
  ngOnInit(): void {
    this.authService.profile().subscribe();
  }
}
