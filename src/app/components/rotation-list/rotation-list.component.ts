import { Component, OnInit } from '@angular/core';
import { RotationService } from 'src/app/core/services/rotation/rotation.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-rotation-list',
    templateUrl: './rotation-list.component.html',
    styleUrls: ['./rotation-list.component.css']
})
export class RotationListComponent implements OnInit {
    public input: string;
    public form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private rotationService: RotationService,

    ) { }

    public ngOnInit(): void {
        this.form = this.fb.group({
            city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
        });
    }

    public get city() {
        return this.form.get('city') as FormControl;
    }

    public get list() {
        return this.rotationService.list;
    }

    public addCity() {
        if (this.form.valid) {
            this.rotationService.addCity(this.form.value['city']);
            this.form.reset();
        }
    }

    public get allRotations() {
        return this.rotationService.groupCities();
    }

}
