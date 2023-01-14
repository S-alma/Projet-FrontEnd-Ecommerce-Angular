import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/model/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
selector: 'app-produit-create',
templateUrl: './produit-create.component.html',
styleUrls: ['./produit-create.component.css']
})

export class ProduitCreateComponent implements OnInit 
{
    produit = new Produit('', 0, 0, '', '', 0);
    submitted = false;
    message:string='';
    isSaved:boolean=false;

    constructor
    (
        private produitService: ProduitService, 
        private route: ActivatedRoute, 
        private router: Router
    ) { }

    ngOnInit(): void { }

    createProduit(): void 
    {
        this.produitService.create(this.produit)
        .subscribe(
        response => {
        this.submitted = true;
        this.router.navigate([{outlets: {primary: 'navbar' ,contenu:'produits'}}]);
        },
        error => {
        this.message=error.message;
        console.log(error);
        });
    }

    save():void 
    {
        this.isSaved=true;
    }
}