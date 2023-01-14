import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
selector: 'app-produit-list',
templateUrl: './produit-list.component.html',
styleUrls: ['./produit-list.component.css']
})

export class ProduitListComponent implements OnInit 
{
    produits?: any;
    errormessage?: string;

    currentProduit: Produit = new Produit('', 0, 0, '', '', 0);
    currentIndex = -1;
    name = '';
    isAdmin: boolean = false;

    constructor
    (
        private produitService: ProduitService, 
        private tokenStorageService: TokenStorageService,
        private router: Router
    ) { }

    ngOnInit(): void 
    {
        this.produitService.getAll().subscribe(
        data => {
        this.produits = data;
        if (this.tokenStorageService.hasRole('ADMIN')) {this.isAdmin = true;}
        console.log(data)
        console.log(this.produits)
        },
        err => {
        this.errormessage = JSON.parse(err.error).message;
        console.log("ERROR")
        }
        );
    }

    goToProduitDetail(id:string) 
    {
        const navigationExtras: NavigationExtras = {
          queryParams: {
            currentIndex: id
          }
        };
        this.router.navigate(['/produit-detail'], navigationExtras);
    }

    goToProduitCreate() 
    {
        this.router.navigate(['/produit-create']);
    }
}