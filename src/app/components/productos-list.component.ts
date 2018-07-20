import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';


@Component({
    selector: 'productos-list',
    templateUrl: '../views/productos-list.html',
    providers: [ProductoService]
}) 
export class ProductosListComponent{
    public titulo: string;
    public productos: Producto[];
    public myjson: Producto[];
    public confirmado;
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.titulo = 'Listado de productos';
    }

    ngOnInit(){
        console.log('@Component: Producto-list');
        this.ListarProductos();
    }

    ListarProductos(){
        this._productoService.ListarProdcutos().subscribe(
            result => {
                if(result != undefined){
                    this.productos = result;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    borrarConfirm(id){
        this.confirmado = id;
    }

    cancelarComfirm(){
        this.confirmado = null;
    }

    ondeleteProducto(id){
        this._productoService.deleteProducto(id).subscribe(
            response => {
                if(response != undefined){
                    this.ListarProductos();
                }else{
                    alert('Error al borrar el producto');
                }
            },
            error =>{
                console.log(<any>error);
            }
        )

    }
}