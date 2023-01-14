import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProduitListComponent } from './produit/produit-list/produit-list.component';
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { ProduitCreateComponent } from './produit/produit-create/produit-create.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
declarations: [
  AppComponent,
  AuthComponent,
  NavbarComponent,
  WelcomeComponent,
  ProduitListComponent,
  ProduitDetailComponent,
  ProduitCreateComponent,
  SearchbarComponent,
  SidebarComponent
],
imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule
],
providers: [authInterceptorProviders],
bootstrap: [AppComponent]
})

export class AppModule 
{

}