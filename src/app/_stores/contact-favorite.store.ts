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
    console.log(this.state);
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
    console.log(this.state);
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
    this.setState({
      ...this.state,
      contacts: [...this.state.contacts, contact]
    });
  }

  addFavContact(contact: Contact): void {
    this.setState({
      ...this.state,
      favContacts: [...this.state.favContacts, contact]
    });
  }

  returnContacts(): Contact[] {
    return this.state.contacts;
  }
  returnFavContacts(): Contact[] {
    return this.state.favContacts;
  }
}
