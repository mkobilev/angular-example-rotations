import { Component } from '@angular/core';
import { RotationService } from './core/services/rotation/rotation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(
        private rotationService: RotationService,
    ) { }

}
