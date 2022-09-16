import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClientsService } from 'app/clients.service';

@Component({
  selector: 'app-editClient',
  templateUrl: './editClient.component.html',
  styleUrls: ['./editClient.component.css']
})

export class EditClientComponent implements OnInit {
  public clientsData
  username = new FormControl();
  phoneNumber = new FormControl();
  ID = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  address = new FormControl();
  city = new FormControl();
  country = new FormControl();
  email = new FormControl();
  password = new FormControl();
  
  constructor(private _clientsService: ClientsService) { }

  public editClient() {
    console.log(this.username.value)
  }

  ngOnInit() {
    let client = this._clientsService.getClient()
    this.username.setValue(client[8]);
    this.phoneNumber.setValue(client[2]);
    this.ID.setValue(client[3]);
    this.firstName.setValue(client[0]);
    this.lastName.setValue(client[1]);
    this.address.setValue(client[5]);
    this.city.setValue(client[6]);
    this.country.setValue(client[7]);
    this.email.setValue(client[4]);
    this.password.setValue(client[9]);
  }
}
