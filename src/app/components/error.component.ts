import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'error',
    templateUrl: '../views/error.html'
})

export class ErrorComponent {
    public titulo: string;

    constructor() {
        this.titulo = 'Error!! Pagina no encontrada.';
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        console.log('@Component: Error');
    }
}
