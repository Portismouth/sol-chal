import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/_services/contact.service';
import { Contact } from 'src/app/_models/contact';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactFavoriteStore } from 'src/app/_stores/contact-favorite.store';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  indyContact: Contact;
  contactId: number;
  theBool = true;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    public store: ContactFavoriteStore
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    if (this.store.state.contacts.length === 0) {
      this.contactService.getContacts().subscribe((contacts: Contact[]) => {
        // tslint:disable-next-line:forin
        for (const contact in contacts) {
          this.store.addContact(contacts[contact]);
        }
      });
    }
    this.route.params.subscribe((params: Params) => {
      this.contactId = params['id'];
      this.getContact(this.contactId);
    });
  }

  getContact(id?: number) {
    if (this.store.getContact(id) === undefined) {
      this.contactService.getContacts().subscribe((contacts: Contact[]) => {
        const element = contacts.map(x => x.id).indexOf(this.contactId);
        if (element === -1) {
          this.router.navigate(['/']);
        } else {
          this.indyContact = contacts[element] as Contact;
        }
      });
    } else {
      this.indyContact = this.store.getContact(this.contactId) as Contact;
    }
  }
  // A bug popped up where I couldn't update the component with a call to my store - this was the workaround... :(
  toggleBool() {
    console.log(this.indyContact.isFavorite);
    this.indyContact.isFavorite = !this.indyContact.isFavorite;
    console.log(this.indyContact.isFavorite);

    if (this.indyContact.isFavorite) {
      this.store.makeFavorite(this.indyContact);
    }
    if (!this.indyContact.isFavorite) {
      this.store.unFavorite(this.indyContact);
    }
  }
}
