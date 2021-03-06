import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/classes/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {
 allLaptopProduct:Product[]=[];
  constructor(private pService:ProductService,private router:Router) { }

  ngOnInit() {
    this.pService.getAllProduct.subscribe(
      x => { 
        for(let i=0;i<x.data.length;i++){
          if(x.data[i].category_id===1){
            // this.allLaptopProduct=x.data
            this.allLaptopProduct.push(x.data[i]);
            // console.log(this.allLaptopProduct);

          }
        }
        // this.allLaptopProduct=x.data[0].category_id ;console.log(this.allLaptopProduct);
      
         },
      err => { console.log('errors already caught... will not run'); }
    );
  }
  returnBack(){
    this.router.navigate(['/home']);
  }
  getProductId(prodId:any){
    this.pService.getProductId(prodId);
    this.pService.increaseCart+=1;

    // this.router.navigate(['/cart',prodId]);
  //  console.log(this.pService.allBuyProduct);
  }
  gotocart(){
 this.router.navigate(['/cart']);
  }
  gotodetails(productid:number){
    this.router.navigate(['/details',productid]);
     }
  
  
}

