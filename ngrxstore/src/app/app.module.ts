import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/includes/includes/header.component';
import { FooterComponent } from './components/includes/includes/footer.component';
import { material } from './modules/material.module';
import {SimpleCompoent } from './components/layouts/simple.component';
import { HomeCompoent } from './components/pages/home.component';
import { MenuComponent } from './components/includes/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/reducer';
import { HttpService } from './services/http.services';
import { ApiService } from './services/api.services';
import { UserCardComponent } from './containers/account/users/user-card.component';
import { UserListComponent } from './containers/account/users/user-list.component';
import { UsersComponent } from './containers/account/users/user.component';
import { UserRepoService } from './services/userrepo.service';
import { UpdateUserComponent } from './containers/account/updateuser.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeCompoent,
    SimpleCompoent,
    MenuComponent,
    UserCardComponent,
    UserListComponent,
    UsersComponent,
    HomeCompoent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [HttpService,ApiService,UserRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
