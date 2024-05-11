import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  arr:any[] = [];
  constructor(private products:ProductService){
    this.products.getProducts().subscribe((data)=>{
      this.arr = data.products;
      console.log(data.products);
    });
      
  }
  
 
     
   
  
  
}
