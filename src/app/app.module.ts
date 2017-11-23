import { DxPivotGridModule, DxCheckBoxModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxPivotGridModule,
    DxCheckBoxModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
