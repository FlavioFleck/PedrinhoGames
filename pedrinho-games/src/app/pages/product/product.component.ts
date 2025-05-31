import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game, ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  game?: Game;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')?.toLowerCase();
    this.productService.getProducts().subscribe(data => {
      this.game = data.find(game => game.slug === slug)
    })
  }
}

