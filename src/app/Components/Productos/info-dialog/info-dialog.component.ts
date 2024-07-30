import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from '../../../Modelo/IProduct';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrl: './info-dialog.component.css'
})
export class InfoDialogComponent {
  product: IProduct;
  carritocompras: IProduct[]=[];
  

  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.product = this.data;
  }

  agregarAlCarrito(): void {
    this.carritocompras.push(this.product);
    const carritoJSON = JSON.stringify(this.carritocompras);
    localStorage.setItem('carritop', carritoJSON);
    alert("Producto agregado");
    this.dialogRef.close();
  }

  salir(): void {
    this.dialogRef.close();
  }

  //recuperar json del local storage
  ngOnInit(): void {
    const carritoJSON = localStorage.getItem('carritop');
    if (carritoJSON) {
      this.carritocompras = JSON.parse(carritoJSON);
    }
  }

}
