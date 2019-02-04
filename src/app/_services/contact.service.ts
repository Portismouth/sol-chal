import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get(
      'https://s3.amazonaws.com/technical-challenge/v3/contacts.json'
    );
  }
}
