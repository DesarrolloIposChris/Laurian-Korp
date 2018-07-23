import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'home',
    templateUrl: '../views/home.html'
})

export class HomeComponent {
    public titulo: string;

    constructor() {
        this.titulo = 'Productos y mas..';
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        console.log('@Component: Home');
    }
}
