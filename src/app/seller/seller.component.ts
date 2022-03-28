import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductDetail } from '../models/productDetail';
import { SellerService } from '../services/seller.api.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  products: Product[] = [];
  selectedProduct!: string;
  productDetails: ProductDetail = new ProductDetail();

  constructor(
    private readonly sellerService: SellerService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.sellerService.getProducts()
      .subscribe(products => this.products = products);
  }

  onGetProduct(id: string): void {
    this.sellerService.getProduct(id)
      .subscribe(product => this.productDetails = product);
  }

  onChange(option: string): void {
    this.selectedProduct = option;
  }
}
