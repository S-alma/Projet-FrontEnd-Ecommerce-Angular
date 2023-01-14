export class Produit
{
    constructor
    (
        public nom:string,
        public prixUnitaire:number,
        public stock:number,
        public description:string,
        public image:string,
        public categorie_id:number
    ) {}
}