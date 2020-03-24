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
    ) {
        console.log(this.rotationService.makeAllRotations('Tokyo'));
        console.log(this.rotationService.findRotations('Tokyo', ['Tokyo', 'London', 'Rome', 'Donlon', 'Kyoto', 'Paris', 'Orem']));
        console.log('\n\n--\n\n');
        console.log(this.rotationService.groupCities(['Tokyo', 'London', 'Rome', 'Donlon', 'Kyoto', 'Paris', 'Orem']));
    }

}
