import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/classes/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {
 products:Product[];
  constructor(private productService :ProductService,private myRoute:Router) { }

  ngOnInit() {
    this.productService.getAllProduct.subscribe(
      x=>{this.products=x.data;},
      error=>{console.log(error);}

    );
    
  }
 getProductIdToDelete(proId:any){
 this.productService.DeleteProduct(proId).subscribe(res=>{console.log(res)});
 this.ngOnInit();
// this.myRoute.navigate(['/Showproducts']);
 }
 getSelectedProductByid(id:any){
   this.productService.updateProduct(id);
   this.myRoute.navigate(['/update']);
 }
}
