import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  allmobileProduct:Product[]=[];
  constructor(private pService:ProductService,private router:Router) { }

  ngOnInit() {
    this.pService.getAllProduct.subscribe(
      x => { 
        for(let i=0;i<x.data.length;i++){
          if(x.data[i].category_id===2){
            // this.allLaptopProduct=x.data
            this.allmobileProduct.push(x.data[i]);
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
    //  this.pService.increaseCartNumber().subscribe();
     this.pService.increaseCart+=1;
    // this.pService.ngOnChanges(this.pService.increaseCart+=1).subscribe();

    // console.log(this.pService.increaseCart);
    // this.router.navigate(['/cart',prodId]);
  //  console.log(this.pService.allBuyProduct);
  }
  gotocart(){
 this.router.navigate(['/cart']);
  }
  
  
}
