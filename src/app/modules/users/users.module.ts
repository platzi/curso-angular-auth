import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { UsersRoutingModule } from './users-routing.module';
import { UsersTableComponent } from './pages/users-table/users-table.component';


@NgModule({
  declarations: [
    UsersTableComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CdkTableModule
  ]
})
export class UsersModule { }
