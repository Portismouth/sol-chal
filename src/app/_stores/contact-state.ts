import { Contact } from '../_models/contact';
import { ContactService } from '../_services/contact.service';

export class ContactState {
  contacts: Contact[] = [];
  favContacts: Contact[] = [];
}
