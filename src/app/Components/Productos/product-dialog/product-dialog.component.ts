import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../../Services/Productos/product.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.css'
})
export class ProductDialogComponent implements OnInit {
  isloading = false;
  productForm: FormGroup;
  products: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService
  ) {
    this.productForm = new FormGroup({
      title: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
      category: new FormControl('')
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.productService.productos$.subscribe(data => {
      this.products = data
      this.isloading=false;
    })
  }

  onSubmit(): void {
    const product = this.productForm.value;
    this.isloading=true;
    this.products.push(product)
    this.productService.updateProductos(this.products);
    this.dialogRef.close();
    
  }
}
