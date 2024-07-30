import { Component } from '@angular/core';
import { ProductService } from '../../../Services/Productos/product.service';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { IProduct } from '../../../Modelo/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  isLoading=false;
  products: any[] = [];

  constructor(private productService: ProductService, public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.isLoading=true
    this.productService.productos$.subscribe(data => {
      this.products = data
      this.isLoading= false;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      height: '550px'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Cerrar el dialog');
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }


  openProductDialog(product: IProduct): void {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      width: '700px',
      data: product
    });
  }

  openCarrito() {
    this.router.navigate(['carrito'])
    }

}
