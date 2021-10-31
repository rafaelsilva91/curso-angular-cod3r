import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // baseUrl : String = environment.baseUrl;
  baseUrl = 'http://localhost:3001/products'

  constructor( private snackBar: MatSnackBar, 
    private http: HttpClient) {}


showOnConsole(msge: string): void{
  console.log(msge)
}

showMessage(msg: string, isError: boolean = false): void{

  this.snackBar.open(msg, 'x', {
    duration:2000,
    horizontalPosition:"right",
    verticalPosition: "top",
    panelClass: isError ? ['msg-error'] : ['msg-success']

  })

}

create(product: Product): Observable<Product> {
  return this.http.post<Product>(this.baseUrl, product)
  .pipe(map((obj) => obj),
  catchError(e => this.errorrHandler(e))
  );

}


read():Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl)
  .pipe(map((obj) => obj),
  catchError(e => this.errorrHandler(e))
  );
}

readById(id: any): Observable<Product> {
  const url  = `${this.baseUrl}/${id}`
  return this.http.get<Product>(url)
  .pipe(map((obj) => obj),
  catchError(e => this.errorrHandler(e))
  );

}

update(product: Product): Observable<Product> {
  const url  = `${this.baseUrl}/${product.id}`
  return this.http.put<Product>(url, product)
  .pipe(map((obj) => obj),
  catchError(e => this.errorrHandler(e))
  );

}

delete(id: any): Observable<Product> {
  const url  = `${this.baseUrl}/${id}`;
  return this.http.delete<Product>(url)
  .pipe(map((obj) => obj),
  catchError(e => this.errorrHandler(e))
  );
}

errorrHandler(e: any): Observable<any>{
  console.log(e)
  this.showMessage('Ocorreu um erro!', true);
  return EMPTY;
}


}
