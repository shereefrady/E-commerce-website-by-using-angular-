import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/classes/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
 updatedProductId:any;
 product:Product[]=[];
 updatedProductData:Product;
  constructor(private productservice:ProductService,private myrouter:Router) { 
    this.updatedProductData=new Product();
  }

  ngOnInit() {
this.updatedProductId=this.productservice.updatedProductId;
console.log(this.productservice.updatedProductId);
this.productservice.getSelectedProduct(this.updatedProductId).subscribe(
  x=>{this.product=x;console.log(this.product);},
  error=>{console.log(error);}
);
  }
  formAddProduct() {
    
    this.productservice.UpdateProduct(this.updatedProductData,this.updatedProductId)
      .subscribe(res => {
        console.log(res);
        this.myrouter.navigate(['/main']);
      },
        err => { console.log(err); });


  }

}
