import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Game } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  games: Game[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.games = data;
    });
  }
  
  get filteredGames(): Game[] {
    if (!this.searchTerm) return this.games;
    const term = this.searchTerm.toLowerCase();
    return this.games.filter(game =>
      game.title.toLowerCase().includes(term) ||
      game.platform.toLowerCase().includes(term)
    );
  }
}

