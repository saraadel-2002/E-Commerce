import { CategoriesService } from '../../core/services/categories/categories.service';
import { ICategory } from '../../shared/interfaces/icategory';
import { IProduct } from '../../shared/interfaces/iproduct';
import { ProductsService } from './../../core/services/products/products.service';
import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{

  private readonly productsService = inject(ProductsService);
  private readonly categoriesService = inject(CategoriesService);

  customMainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:3000,
    navSpeed: 700,
    navText: ['<i class="fas fa-home"></i>', 'home'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
  }

  products :IProduct[] = [];
  categories :ICategory[] = [];

  getProductsData():void {
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
  
  getCategoriesData():void {
    this.categoriesService.getAllCategories().subscribe({
      next:(res)=>{
        console.log(res.data);
        this.categories=res.data
      },
      error:(err)=>{
        console.log(err); 
      }
    });
  }

  ngOnInit():void {
    this.getProductsData();
    this.getCategoriesData();
  }
}
