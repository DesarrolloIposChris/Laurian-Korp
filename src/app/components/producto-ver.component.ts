import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'producto-detail',
    templateUrl: '../views/producto-detail.html',
    providers: [ProductoService]
})

export class ProductoDetailComponent{
    public producto: Producto;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        console.log('@Component: Producto-ver');
        this.getProducto();
    }

    getProducto(){
        this._route.params.forEach((params: Params) => {
            let Id = params['id'];

            this._productoService.getProducto(Id).subscribe(
                response => {
                     
                    if(response != undefined){
                        this.producto = response;

                    }else{
                        console.log("esta sucediendo un error");
                        //this._router.navigate(['/productos']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }
}
