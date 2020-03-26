import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { RotationListComponent } from './components/rotation-list/rotation-list.component';
import { RotationItemComponent } from './components/rotation-item/rotation-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        RotationListComponent,
        RotationItemComponent,
    ],
    imports: [
        NgbModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
