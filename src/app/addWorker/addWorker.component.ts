import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-addWorker',
  templateUrl: './addWorker.component.html',
  styleUrls: ['./addWorker.component.css']
})
export class AddWorkerComponent implements OnInit {

  dateAdmission = new FormControl();
  ID = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  dateBirth = new FormControl();
  age = new FormControl();
  password = new FormControl();
  role = new FormControl();
  office = new FormControl();

  constructor() { }

  public addWorker() {
    console.log(this.firstName.value)
  }

  ngOnInit() {
    
  }

}
