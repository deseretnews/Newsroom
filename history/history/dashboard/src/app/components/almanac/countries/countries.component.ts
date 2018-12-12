import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Country, Year } from '../../../models/almanac';
import { AlmanacService } from '../../../services/almanac.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries = environment.almanac.countries;
  country: any = new Country();
  year = new Year();
  editor = {
    key: null,
    year: new Date().getFullYear()
  };

  constructor(private almanac: AlmanacService) { }

  getYear() {
    if (environment.almanac.years[this.editor.year] && environment.almanac.years[this.editor.year][this.editor.key]) {
      this.year = Object.assign(new Year(), environment.almanac.years[this.editor.year][this.editor.key]);
    } else {
      this.year = new Year();
    }
  }

  saveYear() {
    if (this.editor.key) {
      firebase.database().ref(`/almanac/years/${this.editor.year}/${this.editor.key}/`).set(this.year).then(() => {
        console.log(true);
      })
    }
  }

  reset() {
    this.country = new Country();
    this.year = new Year();
    this.getYear();
    this.editor.key = null;
  }

  saveCountry() {
    if (this.editor.key) {
      let country = this.almanac.newObj(this.country);
      delete country['uid'];
      firebase.database().ref(`/almanac/countries/${this.editor.key}/`).set(country).then(() => {
        this.reset();
      })
    }
  }

  edit(key) {
    this.editor.key = key;
    this.country = this.countries[this.editor.key];
    this.getYear();
  }

  ngOnInit() {
  }

}
