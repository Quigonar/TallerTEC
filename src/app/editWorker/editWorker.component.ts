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
  dateAdmission = new FormControl();
  ID = new FormControl();
  firstName = new FormControl();
  lastName = new FormControl();
  dateBirth = new FormControl();
  age = new FormControl();
  password = new FormControl();
  role = new FormControl();
  office = new FormControl();
  
  constructor(private _workersService: WorkersService) { }

  public editWorker() {
    console.log(this.firstName.value)
  }

  ngOnInit() {
    let worker = this._workersService.getWorker()
    this.firstName.setValue(worker[0]);
    this.lastName.setValue(worker[1]);
    this.ID.setValue(worker[2])
    this.dateAdmission.setValue(worker[3])
    this.dateBirth.setValue(worker[4])
    this.age.setValue(worker[5])
    this.password.setValue(worker[6])
    this.role.setValue(worker[7])
    this.office.setValue(worker[8])
  }
}
