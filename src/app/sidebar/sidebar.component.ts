import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Categorie } from '../model/categorie';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit 
{
    categories?: any;
    errormessage?: string;

    currentUtilisateur: Categorie = new Categorie('');
    currentIndex = -1;
    name = '';
    isAdmin: boolean = false;

    constructor
    (
        private categorieService: CategorieService,
        private tokenStorageService: TokenStorageService,
        private router: Router
    ) { }

    ngOnInit(): void 
    {
        this.categorieService.getAll().subscribe(
        data => {
        this.categories = data;
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
}
