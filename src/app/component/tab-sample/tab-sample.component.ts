import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-tab-sample',
  templateUrl: './tab-sample.component.html',
  styleUrls: ['./tab-sample.component.scss']
})
export class TabSampleComponent implements OnInit {

  AllProduct:Product[]=[];
  

  constructor(private router:Router,private productService :ProductService) { }

  ngOnInit() {
   this.productService.getAllProduct.subscribe(
     x=>{for(let i=10;i<15;i++){
       if(x.data[i].category_id==3){
        this.AllProduct.push(x.data[i]);
        // console.log(this.AllProduct);
       }
       
      
     }}
   );
  }
 viewMore(){
 this.router.navigate(['/tablet']);
 }
 getProductId(prodId:any){
  this.productService.getProductId(prodId);
  // this.pService.increaseCartNumber();
  this.productService.increaseCart+=1;}


}
