import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';


import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    NgIf,
    MatSidenavModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
