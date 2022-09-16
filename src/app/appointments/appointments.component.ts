import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { CitaService } from 'app/citaservice';


declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})

export class AppointmentsComponent implements OnInit {

  public tableData1: TableData;

  constructor(public _citaService:CitaService, private api:ApiService) {
  }

  public passCita(index:number){
    this._citaService.setCita(this._citaService.getCitas()[index]);
    this._citaService.lastindex=index;
  }

  public elimcita(index:number){

  }

  ngOnInit() { 
    this.api.gTableAppointments().subscribe(data => {
      //console.log(data)
      this._citaService.setTable(data)
    });
    this.tableData1 = this._citaService.getTable();
  }
 
}
