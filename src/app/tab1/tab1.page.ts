import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private contactService: ContactService) {}

  contacts: Contact[] = [];
  async loadContacts() {
    this.contacts = await this.contactService.getContacts();
    console.log(this.contacts);
  }

  ngOnInit(): void {
    this.loadContacts();
  }
}
