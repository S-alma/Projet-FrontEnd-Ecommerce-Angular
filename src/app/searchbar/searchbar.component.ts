import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Categorie } from '../model/categorie';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})

export class SearchbarComponent implements OnInit 
{
    categories?: any;
    produits?: any;
    searchQuery?: any;
    searchResult?: any;
    errormessage?: string;

    currentUtilisateur: Categorie = new Categorie('');
    currentIndex = -1;
    name = '';
    isAdmin: boolean = false;

    constructor
    (
        private categorieService: CategorieService,
        private produitService: ProduitService,
        private tokenStorageService: TokenStorageService,
        private router: Router
    ) { }

    ngOnInit(): void 
    {
        this.categorieService.getAll().subscribe(
        data => {
        this.categories = data;
        this.searchResult = this.categories;
        if (this.tokenStorageService.hasRole('ADMIN')) {this.isAdmin = true;}
        console.log(data)
        console.log(this.categories)
        },
        err => {
        this.errormessage = JSON.parse(err.error).message;
        console.log("ERROR")
        }
        );
    }

    searchByCategorie(id: string) : void
    {
      this.produitService.getByCategories(id).subscribe(
        data => {
          this.produits = data;
          console.log(data)
          console.log(this.categories)
        },
        err => {
          this.errormessage = JSON.parse(err.error).message;
          console.log("ERROR")
          }
      )
    }

    search() : void
    {
      if(this.categories != null)
      this.searchResult = this.categories.filter( 
        (        cat: { name: string | any[]; }) => {
          cat.name.includes(this.searchQuery)
        }
      )

    }
}
