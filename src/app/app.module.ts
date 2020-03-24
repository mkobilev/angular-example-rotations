import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import { RotationListComponent } from './rotation-list/rotation-list.component';
// import { RotationItemComponent } from './rotation-item/rotation-item.component';

@NgModule({
  declarations: [
    AppComponent,
    // RotationListComponent,
    // RotationItemComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
