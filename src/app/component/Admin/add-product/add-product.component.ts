import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/classes/category';
import { retry, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
 products:Product; 
 categoryData:Category[]=[];
  constructor(private productservice:ProductService,private myrouter:Router,private categories:CategoryService) { 
    this.products=new Product();
    
  }
 
  ngOnInit() {
    this.categories.getAllcategory.subscribe(
      x=>{this.categoryData=(x.data);console.log(this.categoryData);},
      error=>{console.log(error);}
    );
  }
  formAddProduct() {
    
    this.productservice.addProduct(this.products)
      .subscribe(res => {
        console.log(res);
        this.myrouter.navigate(['/main']);
      },
        err => { console.log(err); });


  }

}
