import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Game {
    id: number,
    images: {
        cardImg: string,
        pageImg: string
    };
    title: string;
    platform: string;
    price: number;
    slug: string,
    description: string
    requirements: {
        recommended: string,
        minimun: string
    }
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