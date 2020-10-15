import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { SharedModule } from '@core/modules/shared.module';
import { AccueilModule } from './accueil/accueil.module';


@NgModule({
  declarations: [ContentComponent],
  exports: [ ContentComponent ],
  imports: [
    SharedModule,
    AccueilModule
    ]
})
export class ContentModule { }
