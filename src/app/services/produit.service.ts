import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_GET_PRODUITS = 'http://localhost:7777/rest/produit';
const API_GET_PAR_CATEGORIES = 'http://localhost:7777/rest/produitbycategorie';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
providedIn: 'root'
})

export class ProduitService 
{
    constructor(private http: HttpClient) { }
    
    getAll(): Observable<any> 
    {
        return this.http.get(API_GET_PRODUITS);
    }

    getById(id:string): Observable<any> 
    {
        return this.http.get(`${API_GET_PRODUITS}/${id}`);
    }

    create(data: any): Observable<any> 
    {
        return this.http.post(API_GET_PRODUITS+'create', data,{responseType:'text' as 'json'});
    }

    update(id: number, data: any): Observable<string> 
    {
        return this.http.put<string>(`${API_GET_PRODUITS+'update'}/${id}`, data,{responseType: 'text' as 'json'});
    }

    delete(id: number): Observable<string> 
    {
        return this.http.delete<string>(`${API_GET_PRODUITS+'delete'}/${id}`, {responseType: 'text' as 'json'});
    }

    getByCategories(id:string): Observable<any> 
    {
        return this.http.get(`${API_GET_PAR_CATEGORIES}/${id}`);
    }
}