import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/_services/contact.service';
import { Contact } from 'src/app/_models/contact';
import { ContactFavoriteStore } from 'src/app/_stores/contact-favorite.store';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    public store: ContactFavoriteStore
  ) {}

  ngOnInit() {
    if (this.store.state.contacts.length === 0) {
      this.getContacts();
    }
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe((contacts: Contact[]) => {
      // tslint:disable-next-line:forin
      // for (const contact in contacts) {
      //   if (!contacts[contact].isFavorite) {
      //     this.store.addContact(contacts[contact]);
      //   } else {
      //     this.store.addFavContact(contacts[contact]);
      //   }
      // }

      // tslint:disable-next-line:forin
      for (const contact in contacts) {
        this.store.addContact(contacts[contact]);
      }
    });
  }
}
