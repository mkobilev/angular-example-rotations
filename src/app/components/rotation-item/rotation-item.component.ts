import { Component, OnInit, Input } from '@angular/core';
import { RotationService } from 'src/app/core/services/rotation/rotation.service';

@Component({
    selector: 'app-rotation-item',
    templateUrl: './rotation-item.component.html',
    styleUrls: ['./rotation-item.component.css']
})
export class RotationItemComponent implements OnInit {
    @Input() public city: string;

    constructor(
        private rotationService: RotationService,
    ) { }

    public ngOnInit(): void { }

    public isHaveRotation(rotation: string) {
        return this.rotationService.list.includes(rotation) ? true : false;
    }

    public get allRotations() {
        return this.rotationService.makeAllRotations(this.city);
    }

    public remove() {
        this.rotationService.remove(this.city);
    }

}
