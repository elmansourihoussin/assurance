import { NgModule } from '@angular/core';
import { DossierComponent } from './dossier.component';
import { SharedModule } from '@core/modules/shared.module';



@NgModule({
  declarations: [DossierComponent],
  imports: [
    SharedModule
  ]
})
export class DossierModule { }
