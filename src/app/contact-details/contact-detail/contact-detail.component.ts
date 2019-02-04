import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/_services/contact.service';
import { Contact } from 'src/app/_models/contact';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactFavoriteStore } from 'src/app/_stores/contact-favorite.store';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  indyContact: Contact;
  contactId: number;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    public store: ContactFavoriteStore
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.contactId = params['id'];
    });
    this.getContact(this.contactId);
    if (this.store.state.contacts.length === 0) {
      this.contactService.getContacts().subscribe((contacts: Contact[]) => {
        // tslint:disable-next-line:forin
        for (const contact in contacts) {
          this.store.addContact(contacts[contact]);
        }
      });
    }
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
}
