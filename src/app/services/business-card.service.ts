import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardPhoto } from './photo.service';
@Injectable({
  providedIn: 'root',
})
export class BusinessCardService {
  url = 'http://localhost:3000/items';
  cardUrl = 'https://backend.stg.snapaddy.com/business-card/';

  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('x-api-key', 'pZLM1rZ5mzxnGKK3w2R5wiP6KrGt9LoWokobcV8z')
    .set('accept', 'application/json');

  private httpOptions = {
    headers: this.headers,
  };
  constructor(private http: HttpClient) {}

  scanCard(photo: CardPhoto) {
    const base64result = photo.base64Data.split(',')[1];

    console.log('scanner', base64result);
    this.http
      .post(this.cardUrl, { front: base64result }, this.httpOptions)
      .subscribe((response) => {
        console.log(response);
        return JSON.stringify(response);
      });
  }
}
