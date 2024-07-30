import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';
  productosSubject = new BehaviorSubject<any[]>([])
  productos$ = this.productosSubject.asObservable()

  constructor(private http: HttpClient) {
    this.http.get<any[]>(this.apiUrl).subscribe(data => this.updateProductos(data))
  }

  updateProductos(productos: any[]) {
    this.productosSubject.next(productos)
  }

  getAllProducts(): Promise<any> {
    return this.http.get(this.apiUrl).toPromise();
  }


  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

}
