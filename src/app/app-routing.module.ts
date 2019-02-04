import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailComponent } from './contact-details/contact-detail/contact-detail.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

const routes: Routes = [
  { path: '', component: ContactListComponent},
  { path: 'contact/:id', component: ContactDetailComponent},
  { path: '', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
