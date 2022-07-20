import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    OverlayModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class LayoutModule { }
