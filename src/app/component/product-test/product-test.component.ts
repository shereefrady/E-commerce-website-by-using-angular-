import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/classes/product';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-product-test',
  templateUrl: './product-test.component.html',
  styleUrls: ['./product-test.component.scss']
})
export class ProductTestComponent implements OnInit {
   AllProduct:Product[];
  constructor(private pService:ProductService,private route:Router) { }

  ngOnInit() {
    this.pService.getAllProduct.subscribe(
      x => { this.AllProduct=x.data;console.log(this.AllProduct)},
      err => { console.log('errors already caught... will not run'); }
    );
  }
  onDetailsClick(prdouctId:number){
   this.route.navigate(['/products',prdouctId]);
  }
 


}
