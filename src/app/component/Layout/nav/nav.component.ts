import { Component, OnInit, SimpleChange } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 increaseCartNumber:number=0;
  constructor(private auth:AuthService,private myrouter:Router,private productservice:ProductService) {
  }

  ngOnInit() {
    this.increaseCartNumber +=this.productservice.increaseCart;
    // this.productservice.increaseCartNumber().subscribe(
    //   x=>{this.increaseCartNumber=x;console.log(this.increaseCartNumber);},
    //   error=>{console.log(error);}
    // );

  }
  ngOnChanges(changes:SimpleChange){
    if( changes [this.productservice.increaseCart]){
      console.log('from nav',this.productservice.increaseCart);
      this.increaseCartNumber +=this.productservice.increaseCart;
      // this.ngOnInit();
    }
  }
 Gotocart(){
    console.log(this.productservice.increaseCart);
   this.myrouter.navigate(['/cart']);
 }
 
//  increase(){
//   this.increaseCartNumber=this.productservice.increaseCart;
//   this.increaseCartNumber=this.productservice.increaseCart;


//  }
 
}
