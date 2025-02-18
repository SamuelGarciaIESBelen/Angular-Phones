import { Component, inject } from '@angular/core';
import { ObservableService } from '../../service/observable.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
    standalone: false
})
export class TopBarComponent {
    
    private observableService: ObservableService = inject(ObservableService);
    
    numCarrito = 0;

    constructor() {}

    ngOnInit() {
        this.observableService.countCarrito$.subscribe(count => {
            this.numCarrito = count;
        });
    }
}
