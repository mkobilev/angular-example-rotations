import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RotationService {
    private globalList: string[] = ['Tokyo', 'London', 'Rome', 'Donlon', 'Kyoto', 'Paris', 'Orem'];

    constructor() { }

    public get list() {
        return this.globalList;
    }

    public addCity(city: string): void {
        if (this.globalList.indexOf(city) === -1) {
            this.globalList.push(city);
        }
    }

    public remove(city: string): void {
        this.globalList = this.globalList.filter((c) => c !== city);
    }

    public makeAllRotations(city: string): string[] {
        const allVersions = [];
        let temp = city.toLowerCase();
        for (let i = 0; i < temp.length - 1; i++) {
            temp = temp[temp.length - 1] + temp.substr(0, temp.length - 1);
            const nameCapitalized = temp.charAt(0).toUpperCase() + temp.slice(1);
            allVersions.push(nameCapitalized);
        }
        return allVersions;
    }

    public findRotations(city: string): string[] {
        const foundValues = [];
        const cityRotations = this.makeAllRotations(city);
        cityRotations.forEach((c: string) => {
            if (this.globalList.includes(c)) {
                foundValues.push(c);
            }
        });
        return foundValues;
    }

    public groupCities() {
        const formattedValues = [];
        const usedValues = [];
        this.globalList.forEach((city: string) => {
            const foundValues = this.findRotations(city);
            usedValues.push(...foundValues);
            if (!usedValues.includes(city)) {
                formattedValues.push([city, ...foundValues]);

            }
        });
        return formattedValues;
    }
}
