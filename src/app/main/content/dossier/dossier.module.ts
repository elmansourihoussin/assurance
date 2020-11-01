import { NgModule } from '@angular/core';
import { DossierComponent } from './dossier.component';
import { SharedModule } from '@core/modules/shared.module';
import { AddClientComponent } from './add-client/add-client.component';
import { ListDossierComponent } from './list-dossier/list-dossier.component';



@NgModule({
  declarations: [DossierComponent, AddClientComponent, ListDossierComponent],
  imports: [
    SharedModule
  ]
})
export class DossierModule { }
