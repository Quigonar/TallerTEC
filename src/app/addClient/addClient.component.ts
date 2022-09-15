import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-addClient',
  templateUrl: './addClient.component.html',
  styleUrls: ['./addClient.component.css']
})
export class AddClientComponent implements OnInit {

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

  public addClient() {
    console.log(this.username.value)
  }

  ngOnInit() {
    
  }

}
