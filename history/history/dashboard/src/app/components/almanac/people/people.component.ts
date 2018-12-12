import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AlmanacService } from '../../../services/almanac.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  providers: [AlmanacService]
})
export class PeopleComponent implements OnInit {

  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  people: Object =  environment.almanac.people;
  
  constructor(private almanac: AlmanacService) { }

  editPerson(uid) {
    this.edit.emit(uid);
  }

  ngOnInit() {
  }

}
