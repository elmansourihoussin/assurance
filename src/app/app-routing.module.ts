import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './main/content/accueil/accueil.component';
import { AddClientComponent } from './main/content/dossier/add-client/add-client.component';
import { DossierComponent } from './main/content/dossier/dossier.component';
import { ListDossierComponent } from './main/content/dossier/list-dossier/list-dossier.component';


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'dossier', component: DossierComponent,
    children: [
      { path: '', redirectTo: 'list-dossier', pathMatch: 'full' },
      { path: 'list-dossier', component: ListDossierComponent },
      { path: 'add-client', component: AddClientComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
