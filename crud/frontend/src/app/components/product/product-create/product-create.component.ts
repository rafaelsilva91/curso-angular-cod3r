import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product  = {
    name : '',
    price: 0
    // name : 'Produto de teste',
    // price: 1.25
  }
  
  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.showOnConsole('Teste showOnConsole ...')
   

  }

 
  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage(" Operação realizada com sucesso ")
      this.router.navigate(["/products"])
    });
   
  }

  cancel(): void{
    this.productService.showMessage(" Operação cancelada")
    this.router.navigate(["/products"])
  }

  fazerAlgo(): void {
    console.log("fazendo Algo !!!!")
  }

  


}
