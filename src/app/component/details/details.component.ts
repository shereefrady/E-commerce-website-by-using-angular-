import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ajax } from 'rxjs/ajax';
import { retry, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  productDatails:Product[];
  prod:any[];
  apiDataaa:any;
  // proid:string;
 
  constructor(private productService:ProductService,private activatedRoute: ActivatedRoute,private myrouter:Router) { }

  ngOnInit() {
    const proid:String=this.activatedRoute.snapshot.paramMap.get('pid');
    const url:string=`http://localhost:8000/api/products/${proid}`;
   
    this.apiDataaa = ajax(url).pipe(
       // Retry up to 3 times before failing
       map(res => {
         if (!res.response) {
           throw new Error('Value expected!');
         }
         return res.response;
       }),
       catchError(err => of([]))
     );
    
    this.apiDataaa.subscribe(x=>{
      this.productDatails=x.data;
      // for(let x of this.productDatails){
      //   console.log(x);
      // }
      //  this.prod= <Array<Product>>this.productDatails;
       console.log(this.productDatails);
      // for(let i=0;i<x.data.length;i++){
      //   this.productDatails=x.data[i];
      //   console.log(this.productDatails);
      // }
      // this.productDatails=x.data;console.log(this.productDatails);
    });
    
   
   
}
returnBack(){
  this.myrouter.navigate(['/labtop'])
}
gotocart(){
  this.myrouter.navigate(['/cart']);
   }
   getProductId(prodId:any){
    this.productService.getProductId(prodId);
  }
 
}
