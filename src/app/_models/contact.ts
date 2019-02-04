import { Phone } from './phone';
import { Address } from './address';

export interface Contact {
  address: Address;
  birthdate: string;
  companyName: string;
  emailAddress: string;
  id: number;
  isFavorite: boolean;
  largeImageURL: string;
  name: string;
  phone: Phone;
  smallImageURL: string;
}
