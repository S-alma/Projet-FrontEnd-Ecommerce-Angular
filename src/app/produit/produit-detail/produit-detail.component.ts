import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
selector: '[produit-detail]',
templateUrl: './produit-detail.component.html',
styleUrls: ['./produit-detail.component.css'],
template : `{{ currentIndex }}`
})

export class ProduitDetailComponent implements OnInit 
{
    selectedProduit = new Produit('', 0, 0, '', '', 0);
    currentIndex:string = "99"
    errormessage?: string;

    constructor
    (
        private produitService: ProduitService, 
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.currentIndex = this.route.snapshot.queryParams['currentIndex'];
        console.log(this.route.snapshot.queryParams['currentIndex'])
     }

    ngOnInit(): void 
    {  
        console.log("In produit-detail")
        console.log(this.currentIndex)
        if (this.currentIndex != '99' && this.currentIndex != undefined) {
        this.produitService.getById(this.currentIndex).subscribe(
            data => {
            this.selectedProduit = data
            console.log(data)
            console.log(this.selectedProduit)
            },
            err => {
            this.errormessage = JSON.parse(err.error).message
            console.log("ERROR")
            }
        )
        }
    }

    goProduitList(): void
    {
        this.router.navigate(['/produits'])
    }
}