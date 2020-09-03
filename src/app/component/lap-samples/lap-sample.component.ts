import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lap-sample',
  templateUrl: './lap-sample.component.html',
  styleUrls: ['./lap-sample.component.scss']
})
export class LapSampleComponent implements OnInit {
  AllProduct:Product[]=[];
  

  constructor(private router:Router,private productService :ProductService) { }

  ngOnInit() {
   this.productService.getAllProduct.subscribe(
     x=>{for(let i=0;i<5;i++){
       if(x.data[i].category_id==1){
        this.AllProduct.push(x.data[i]);
        console.log(this.AllProduct);
       }
       
      
     }}
   );
  }
 viewMore(){
 this.router.navigate(['/labtop']);
 }
 getProductId(prodId:any){
  this.productService.getProductId(prodId);
  // this.pService.increaseCartNumber();
  this.productService.increaseCart+=1;}


}
