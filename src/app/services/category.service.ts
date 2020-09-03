import { Injectable } from '@angular/core';
import { retry, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  public getAllcategory = ajax('http://localhost:8000/api/category').pipe(
    retry(3), // Retry up to 3 times before failing
    map(res => {
      if (!res.response) {
        throw new Error('Value expected!');
      }
      return res.response;
    }),
    catchError(err => of([]))
  );
}
