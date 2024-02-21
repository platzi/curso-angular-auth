import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { DataSource } from '@angular/cdk/collections';
import { Router } from '@angular/router';

declare const google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements AfterViewInit  {

  @ViewChild('googleSignInButton') googleSignInButton!: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    this.googleLoginInit();
  }

  googleLoginInit() {
    google.accounts.id.initialize({
      client_id: '973795246114-60lt67fd972ds49eommessmq31954gqb.apps.googleusercontent.com',
      callback: (response:any) => this.handleCredentialResponse(response)
    });

    google.accounts.id.renderButton(
      this.googleSignInButton.nativeElement,  // HTML element
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  handleCredentialResponse(response: any) {
    console.log(response.credential)


    this.authService.loginGoogle(response.credential).subscribe({
      next: () => {
        this.router.navigate(['/app']);
      },
      error: (err) => {
        //this.message = 'Email or password incorrect';
        console.error(err);
      },
    });
 }

}
