import { Component } from '@angular/core';
import { BusinessCardService } from '../services/business-card.service';
import { CardPhoto, PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  photo?: CardPhoto;

  constructor(
    private photoService: PhotoService,
    private buissnessCardService: BusinessCardService
  ) {}

  scanCard() {
    if (this.photo) {
      this.buissnessCardService.scanCard(this.photo);
    }
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery().then((photo) => {
      this.photo = photo;
    });
  }

  async ngOnInit() {}
}
