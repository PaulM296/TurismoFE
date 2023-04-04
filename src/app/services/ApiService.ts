import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private backendUrl = 'http://localhost:4200'; // Change this to the URL of your backend API

  constructor(private http: HttpClient) { }

  addLocatie(locatie: any) {
    const url = `${this.backendUrl}/locatie/add`;
    const body = {
      scop: locatie.scop,
      perioada: locatie.perioada,
      climat: locatie.climat,
      zona: locatie.zona,
      nrPersoane: locatie.nrPersoane,
      activitati: locatie.activitati,
      obiectiveTuristice: locatie.obiectiveTuristice,
      cazare: locatie.cazare,
      buget: locatie.buget,
      numeDestinatie: locatie.numeDestinatie
    };
    return this.http.post(url, body, {responseType: 'text'});
  }

  giveNumeDestinatie() {
    const url = `${this.backendUrl}/locatie/postNumeDestinatie`;

    return this.http.post(url, {}, {responseType: 'text'});
  }
}
