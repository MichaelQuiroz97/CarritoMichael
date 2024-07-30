import { Component } from '@angular/core';
import { IProduct } from '../../../Modelo/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {


  constructor(private router:Router){}

  carritocompras: IProduct[]=[];
  total: number=0;

  ngOnInit(): void {
    const carritoJSON = localStorage.getItem('carritop');
    if (carritoJSON) {
      this.carritocompras = JSON.parse(carritoJSON) as IProduct[];
      this.calcularTotal();
    }
  }

  eliminarProducto(producto: IProduct): void {
    const index = this.carritocompras.indexOf(producto);
    if (index !== -1) {
      this.carritocompras.splice(index, 1);
      localStorage.setItem('carritop', JSON.stringify(this.carritocompras));
      this.calcularTotal();
    }
  }

  procesarPago(): void {
    
  }

  calcularTotal(): void {
    this.total = 0;
    this.carritocompras.forEach(producto => {
      this.total += producto.price;
    });
  }

  RegresarHome() {
    this.router.navigate(['home']);
    }

}
