import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service } from './app.service';

import {
  DxTabPanelModule,
  DxDataGridModule,
  DxToolbarModule,
} from 'devextreme-angular';
import { GridFormComponent } from './grid-form/grid-form.component';
import { GridPopupComponent } from './grid-popup/grid-popup.component';

@NgModule({
  declarations: [AppComponent, GridFormComponent, GridPopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTabPanelModule,
    DxDataGridModule,
    DxToolbarModule,
  ],
  providers: [Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
