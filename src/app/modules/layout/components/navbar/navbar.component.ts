import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBell,
  faInfoCircle,
  faClose,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { UserProfile } from '@models/response/auth/user-profile.model';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;
  token:any;
  userProfile$  = this.authService.userProfile$;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenService:TokenService,
  ) {
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
