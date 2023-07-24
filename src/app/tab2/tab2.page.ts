import { Component } from '@angular/core';
import { Contact } from '../contact';
import { BusinessCardService } from '../services/business-card.service';
import { ContactService } from '../services/contact.service';

import { CardPhoto, PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  photo?: CardPhoto;

  // <app-edit-contact *ngIf="contact" [contact]="contact"></app-edit-contact>

  public error = false;
  public isLoading = false;
  public contact?: Contact;

  constructor(
    private photoService: PhotoService,
    private buissnessCardService: BusinessCardService,
    private contactService: ContactService,
    private router: Router
  ) {}

  private async scanCard() {
    if (this.photo) {
      this.buissnessCardService.scanCard(this.photo).subscribe({
        next: (response: any) => {
          console.log(response.contact);
          this.contact = response.contact;
        },
        error: (err) => {
          console.log('HTTP Error', err);
          this.error = true;
          return err;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }

  clear() {
    this.contactService.clear();
  }
  addContact() {
    if (this.contact) {
      this.contactService.addContact(this.contact);
      this.router.navigate([`/tabs/tab1`]);
    }
  }

  takePhoto() {
    this.photoService.addNewToGallery().then((photo) => {
      this.error = false;
      this.photo = photo;
      this.isLoading = true;
      this.scanCard();
    });
  }

  async ngOnInit() {
    /*
    this.contact = {
      city: 'Würzburg',
      country: 'Germany',
      email: 'hubert.proem@gmail.com',
      firstName: 'Hubert',
      lastName: 'Proem',
    };
    */
  }
}
