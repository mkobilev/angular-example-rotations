import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RotationService {

    private globalList;

    constructor() { }

    public makeAllRotations(city: string) {
        // tokyo -> otoky -> yotok -> kyoto -> okyot
        const allVersions = [];
        city = city.toLowerCase();
        let temp = city;
        for (let i = 0; i < temp.length - 1; i++) {
            temp = temp[temp.length - 1] + temp.substr(0, temp.length - 1);
            const nameCapitalized = temp.charAt(0).toUpperCase() + temp.slice(1);
            allVersions.push(nameCapitalized);
        }
        return allVersions;
    }

    public findRotations(city: string, cityList: string[]) {
        const foundValues = [];
        const cityRotations = this.makeAllRotations(city);
        cityRotations.forEach((c: string) => {
            if (cityList.includes(c)) {
                foundValues.push(c);
            }
        });
        return foundValues;
    }

    public groupCities(cityList: string[]) {
        const formattedValues = [];
        const usedValues = [];
        cityList.forEach((city: string) => {
            const foundValues = this.findRotations(city, cityList);
            usedValues.push(...foundValues);
            if (!usedValues.includes(city)) {
                formattedValues.push([city, ...foundValues]);

            }
        });
        return formattedValues;
    }
}
