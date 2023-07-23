import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import { LoginComponent } from './login/login.component'

import { ReactiveFormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
