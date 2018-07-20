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
    
    

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.titulo = 'Listado de productos';

    }
    ngOnInit(){
        console.log('Productos-list.component esta cargado');
this.ListarProductos();
      
    }

    ListarProductos(){
        
        
        this._productoService.ListarProdcutos().subscribe(
            result => {
                if(result != undefined){
                    this.productos = result;
                    //console.log(this.productos);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    public confirmado;

    borrarConfirm(id){
        this.confirmado = id;
    }

    cancelarComfirm(){
        this.confirmado = null;
    }

    ondeleteProducto(id){
        this._productoService.deleteProducto(id).subscribe(
            response => {
                    if(response.code == 200){
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