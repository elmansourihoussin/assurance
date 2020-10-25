import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { SharedModule } from '@core/modules/shared.module';
import { AccueilModule } from './accueil/accueil.module';
import { DossierModule } from './dossier/dossier.module';


@NgModule({
  declarations: [ContentComponent],
  exports: [ ContentComponent ],
  imports: [
    SharedModule,
    AccueilModule,
    DossierModule
    ]
})
export class ContentModule { }
