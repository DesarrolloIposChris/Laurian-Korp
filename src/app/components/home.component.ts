import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'home',
    templateUrl: '../views/home.html'
})

export class HomeComponent {
    public titulo: string;

    constructor() {
        this.titulo = 'Webapp de productos con angular 4';
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        console.log('@Component: Home');
    }
}
