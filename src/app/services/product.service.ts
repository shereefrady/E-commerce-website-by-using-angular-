import { Injectable, SimpleChange } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../classes/product';
// import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { ajax } from 'rxjs/ajax';
import { retry, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl: any;
  public allBuyProduct: number[] = [];
  public updatedProductId:any;
  public increaseCart:any=0;
  constructor(private http: HttpClient) { }
  //Get AllProduct  Data 
  public getAllProduct = ajax('http://localhost:8000/api/products').pipe(

    map(res => {
      if (!res.response) {
        throw new Error('Value expected!');
      }
      return res.response;
    }),
    catchError(err => of([]))
  );
  getProductId(prodId: number) {
    this.allBuyProduct.push(prodId);

  }
  addProduct(newproduct: Product): Observable<Product> {
    const APIURL = `${environment.Api_url}insertproducts`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })
    };

    return this.http.post<Product>(APIURL, JSON.stringify(newproduct), httpOptions);
  }
  UpdateProduct(newproduct: Product,productID:any): Observable<Product> {
    const APIURL = `${environment.Api_url}update/${productID}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': ' */*'
        // ,'Authorization': 'my-auth-token'
      })
    };

    return this.http.post<Product>(APIURL, JSON.stringify(newproduct), httpOptions);
  }

  DeleteProduct(productID: any) {
    const apiurl1 = `${environment.Api_url}delete/${productID}`;
    console.log(apiurl1);
    return this.http.get(apiurl1);
  }
  updateProduct(productIdd:any){
     this.updatedProductId=productIdd;
  }
  getSelectedProduct(selectedProductId:any):Observable<Array<Product>>{
   const apiurl=`${environment.Api_url}products/${selectedProductId}`;
   return this.http.get<Array<Product>>(apiurl);
  }
  // increaseCartNumber():Observable<number>{
  //   return this.increaseCart += 1;
  // }
  // ngOnChanges(changes:SimpleChange):Observable<number>{
  //   if( changes [this.increaseCart]){
  //     return this.increaseCart +=1;
  //   }
  // }
}
