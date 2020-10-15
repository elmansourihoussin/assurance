import { NgModule } from '@angular/core';
import { AccueilComponent } from './accueil.component';
import { SharedModule } from '@core/modules/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule
  ]
})
export class AccueilModule { }
