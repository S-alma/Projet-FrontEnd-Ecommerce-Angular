import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProduitCreateComponent } from './produit/produit-create/produit-create.component';
import { ProduitListComponent } from './produit/produit-list/produit-list.component';
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'produits', component: ProduitListComponent},
  { path: 'produit-create', component: ProduitCreateComponent},
  { path: 'produit-detail', component: ProduitDetailComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'logout', component: AuthComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule 
{

}

