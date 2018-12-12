import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AlmanacService } from '../../services/almanac.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-almanac',
  templateUrl: './almanac.component.html',
  styleUrls: ['./almanac.component.scss'],
  providers: [AlmanacService],
  host: {
    class: 'col-12'
  }
})
export class AlmanacComponent implements OnInit {

  section: string = 'loading';

  constructor(private AlmanacService: AlmanacService) {
    firebase.database().ref('almanac/').on('value', (snapshot) => {
      environment.almanac = snapshot.val();
      this.section = 'countries';
      console.log('Getting value from Firebase...');
    });
  }

  changeSection(section) {
    this.section = section;
  }

  ngOnInit() {
  }

}
