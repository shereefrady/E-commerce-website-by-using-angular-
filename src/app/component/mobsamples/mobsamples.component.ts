import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-mobsamples',
  templateUrl: './mobsamples.component.html',
  styleUrls: ['./mobsamples.component.scss']
})
export class MobsamplesComponent implements OnInit {
  productData: Product[] = [];
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProduct.subscribe(
      x => {
        for (let i = 5; i < 10; i++) {
          this.productData.push(x.data[i]);
        }
      }
    );
  }
  viewMore() {
    this.router.navigate(['/mobile']);
  }
  getProductId(prodId:any){
    this.productService.getProductId(prodId);
    // this.pService.increaseCartNumber();
    this.productService.increaseCart+=1;}


}
