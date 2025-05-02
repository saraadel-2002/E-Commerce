import { IProduct } from '../../shared/interfaces/iproduct';
import { ProductsService } from './../../core/services/products/products.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private readonly productsService = inject(ProductsService);

  products:IProduct[] = [];


  getProductsData(): void {
      this.productsService.getAllProducts().subscribe({
        next:(res)=>{
          console.log(res.data);
          this.products=res.data
        },
        error:(err)=>{
          console.log(err); 
        }
      });
  }
  ngOnInit(): void {
    this.getProductsData();
      
  }

}
