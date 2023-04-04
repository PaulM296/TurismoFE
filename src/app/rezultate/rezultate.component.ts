import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../services/ApiService";

@Component({
  selector: 'app-rezultate',
  templateUrl: './rezultate.component.html',
  styleUrls: ['./rezultate.component.css']
})
export class RezultateComponent {


  rezultat: string;
  constructor( private apiService: ApiService) {
    this.rezultat = '';
  }
  submitAnswer() {
        this.apiService.giveNumeDestinatie().subscribe(
          (response) => {
            this.rezultat = response;
          },
          (error) => {
            console.log('Error adding locatie: ' + error.message);
          }
        );
  }
}
