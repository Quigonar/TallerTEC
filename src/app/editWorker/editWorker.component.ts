import { Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { WorkersService } from 'app/workers.service';

@Component({
  selector: 'app-editWorker',
  templateUrl: './editWorker.component.html',
  styleUrls: ['./editWorker.component.css']
})

export class EditWorkerComponent implements OnInit {
  public workersData
  username = new FormControl();
  phoneNumber = new FormControl();
  ID = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  address = new FormControl();
  city = new FormControl();
  country = new FormControl();
  email = new FormControl();
  
  constructor(private _workersService: WorkersService) { }

  public editWorker() {
    console.log(this.username.value)
  }

  ngOnInit() {
    let worker = this._workersService.getWorker()
    this.username.setValue(worker[8]);
    this.phoneNumber.setValue(worker[2]);
    this.ID.setValue(worker[4]);
    this.firstName.setValue(worker[0]);
    this.lastName.setValue(worker[1]);
    this.address.setValue(worker[5]);
    this.city.setValue(worker[6]);
    this.country.setValue(worker[7]);
    this.email.setValue(worker[4]);
  }
}
