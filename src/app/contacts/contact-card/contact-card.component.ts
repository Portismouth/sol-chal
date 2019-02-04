import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/_models/contact';
import { ContactFavoriteStore } from 'src/app/_stores/contact-favorite.store';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact;
  constructor(public store: ContactFavoriteStore) {}

  ngOnInit() {}
}
