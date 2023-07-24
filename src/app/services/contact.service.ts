import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  genId(contacts: Contact[]): number {
    return contacts.length > 0
      ? Math.max(
          ...contacts.map((contact) => {
            return contact.id ? contact.id : 0;
          })
        ) + 1
      : 0;
  }

  async clear() {
    const strContacts = JSON.stringify([]);
    await Preferences.set({
      key: 'contacts',
      value: strContacts,
    });
  }

  async addContact(contact: Contact) {
    const contacts = await this.getContacts();
    contact.id = this.genId(contacts);
    contacts.push(contact);
    const strContacts = JSON.stringify(contacts);

    await Preferences.set({
      key: 'contacts',
      value: strContacts,
    });
  }

  async getContacts(): Promise<Contact[]> {
    const { value } = await Preferences.get({ key: 'contacts' });
    if (value) {
      return JSON.parse(value);
    } else {
      return [];
    }
  }
}
