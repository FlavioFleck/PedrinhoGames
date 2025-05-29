import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Game {
    img: string;
    title: string;
    platform: string;
    price: number;
}

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private dataUrl = 'assets/data/data.json';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Game[]> {
        return this.http.get<Game[]>(this.dataUrl);
    }
}