import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'app/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})

export class WorkersComponent implements OnInit {
  public tableData1

  constructor(public _workersService:WorkersService) { }

  public passWorker(index: number) {
    this._workersService.setWorker(this._workersService.getWorkers()[index])
  }

  public elimWorker(index: number) {
    console.log('trying to eliminate worker: ' + index)
  }
  
  ngOnInit() {
    this.tableData1 = this._workersService.getTable();
  }

}
