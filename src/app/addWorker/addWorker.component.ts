import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-addWorker',
  templateUrl: './addWorker.component.html',
  styleUrls: ['./addWorker.component.css']
})
export class AddWorkerComponent implements OnInit {

  username = new FormControl();
  phoneNumber = new FormControl();
  ID = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  address = new FormControl();
  city = new FormControl();
  country = new FormControl();
  email = new FormControl();

  constructor() { }

  public addWorker() {
    console.log(this.username.value)
  }

  ngOnInit() {
    
  }

}
