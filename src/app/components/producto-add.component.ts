import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component({
    selector: 'Producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})
export class ProductoAddComponent{
    public titulo: string;
    public producto: Producto;
    
    public filesToUpload;   
    public resultUpload;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo = 'Crear un nuevo producto';
        this.producto = new Producto(0, '', '', 0, '');
    }

    ngOnInit(){
        console.log('@Component: Producto-add');
    }
    onSubmit(){
        console.log(this.producto);
        if(this.filesToUpload && this.filesToUpload.length >= 1){
            this._productoService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((
                result)=>{
                    console.log(result);
                    this.resultUpload = result;
                    this.producto.Imagen = this.resultUpload.filename;
                    this.saveProducto();
                }, (error) =>{
                    console.log(error);
                });
        } else{
            this.saveProducto();
        }
    }

    saveProducto(){
        this._productoService.addProducto(this.producto).subscribe(
            response => {
                console.log(response);
                if(response != undefined){
                    this._router.navigate(['/productos']);
                }else{
                    console.log(response);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }
}