import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ContactService } from './_services/contact.service';
import { ContactFavoriteStore } from './_stores/contact-favorite.store';
import { ContactState } from './_stores/contact-state';

import { AppComponent } from './app.component';
import { ContactCardComponent } from './contacts/contact-card/contact-card.component';
import { ContactDetailComponent } from './contact-details/contact-detail/contact-detail.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';


@NgModule({
   declarations: [
      AppComponent,
      ContactCardComponent,
      ContactDetailComponent,
      ContactListComponent
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      HttpClientModule
   ],
   providers: [
      ContactFavoriteStore,
      ContactService,
      ContactState
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
