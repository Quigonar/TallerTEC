import { Component, OnInit } from '@angular/core';
import { WorkersListI } from 'app/models/workerslist.interface';
import { WorkersService } from 'app/workers.service';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})

export class WorkersComponent implements OnInit {
  public tableData1
  public workers:string[][]

  constructor(public _workersService:WorkersService, private api:ApiService) { }

  public passWorker(index: number) {
    this._workersService.setWorker(this._workersService.getWorkers()[index])
  }

  public elimWorker(index: number) {
    console.log('trying to eliminate worker: ' + index)
  }
  
  ngOnInit() {
    this.api.gTableWorkers().subscribe(data => {
      console.log(data)
      this._workersService.setTable(data);
    });
    this.tableData1 = this._workersService.getTable();
  }

}
