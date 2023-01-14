export class Utilisateur
{
    constructor
    (
        public nom:string,
        public prenom:string,
        public cin:string,
        public dateNaissance:Date,
        public adresse:string,
        public numeroTelephone:string,
        public rib:string,
        public email:string,
        public motDePasse:string,
        public role:string
    ) {}
}