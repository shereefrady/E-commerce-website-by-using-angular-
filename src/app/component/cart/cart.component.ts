import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productData: Product[] = [];
  productAlldata: number[] = [];
  productQunitity:any=0;
  incQuntity:number;
  totalPrice:number=0;
  total:number=0;
  totalPriceArray:number[]=[];
  constructor(private activatedRoute: ActivatedRoute, private productservice: ProductService) { }



  ngAfterViewInit() {
    // changes.prop contains the old and the new value...
    // this.total +=this.totalPrice;


  }
  ngOnInit() {
    for (let pid of this.productservice.allBuyProduct) {
      this.productAlldata.push(pid);
      // console.log(this.productAlldata);
    }

    this.productservice.getAllProduct.subscribe(
      x => {
        for (let i = 0; i < x.data.length; i++) {
          for (let k = 0; k < this.productAlldata.length; k++) {
            if (x.data[i].id === this.productAlldata[k]) {
              this.productData.push(x.data[i]);

              // console.log(this.productData);
            }

          }
        }
      }
    );

  }
  increaseQuntity(q:number,price:number){ 
   
   console.log(price);
   console.log(q);
   
   this.totalPrice=(price*q);
    // console.log( this.totalPrice=(price*q));
    // for(let i=0;i<this.totalPrice.length;i++){
      this.total=this.totalPrice;

    // }
     }


}