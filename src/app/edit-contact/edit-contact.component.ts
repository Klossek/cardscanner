import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  @Input() contact?: Contact;
  //contact?: Contact;

  fields = [
    'city',
    'country',
    'email',
    'fax',
    'firstName',
    'lastName',
    'mobile',
    'organization',
  ];

  /*

 <ion-item *ngFor="let prop of fields">
      <ion-input
        [(ngModel)]="contact.firstName"
        label="prop"
        placeholder="Enter"
      ></ion-input>
    </ion-item>


*/

  constructor() {}

  ngOnInit() {}
}
