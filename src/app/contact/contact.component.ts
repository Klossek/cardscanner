import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() contact?: Contact;

  expanded = false;

  constructor() {}
  expand() {
    this.expanded = !this.expanded;
    console.log('expand', this.expanded);
  }
  ngOnInit() {}
}
