import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_GET_PRODUITS = 'http://localhost:7777/rest/produitbycategorie/{categorie}';
const API_GET_CATEGORIES = 'http://localhost:7777/rest/categorie';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
providedIn: 'root'
})

export class CategorieService 
{
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<any> 
    {
        return this.http.get(API_GET_CATEGORIES);
    }

    getById(id:string): Observable<any> 
    {
        return this.http.get(`${API_GET_CATEGORIES}/${id}`);
    }
}