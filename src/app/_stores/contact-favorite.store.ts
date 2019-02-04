import { Injectable } from '@angular/core';
import { Store } from './store';
import { ContactState } from './contact-state';
import { Contact } from '../_models/contact';

@Injectable()
export class ContactFavoriteStore extends Store<ContactState> {
  constructor() {
    super(new ContactState());
  }

  getContact(id: number): Contact {
    const element = this.state.contacts.map(x => x.id).indexOf(id);
    return this.state.contacts[element];
  }

  makeFavorite(contact: Contact): void {
    console.log('fav');
    this.setState({
      ...this.state,
      contacts: this.state.contacts.map(c => {
        if (c === contact) {
          return { ...c, isFavorite: c.isFavorite = true };
        }
        return c;
      })
    });
  }

  unFavorite(contact: Contact): void {
    console.log('unfave');
    this.setState({
      ...this.state,
      contacts: this.state.contacts.map(c => {
        if (c === contact) {
          return { ...c, isFavorite: c.isFavorite = false };
        }
        return c;
      })
    });
  }

  addContact(contact: Contact): void {
    console.log(contact.isFavorite);
    this.setState({
      ...this.state,
      contacts: [...this.state.contacts, contact]
    });
  }

  returnContacts(): Contact[] {
    return this.state.contacts;
  }
}
