import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() { 
    this.tableData1 = {
      headerRow: [ 'Client', 'License Plate', 'Branch Office', 'Service Needed', 'Date/Time'],
      dataRows: [
          ['Marcos González', 'ABC-123', 'San Jose', 'Revision de motor', '16-08-2022/13:00'],
          ['David De La Hoz', 'ABC-123', 'San Jose', 'Revision de motor', '16-08-2022/13:00'],
          ['Kenichi Hayakawa', 'ABC-123', 'San Jose', 'Revision de motor', '16-08-2022/13:00'],
          ['Marcelo Truque', 'ABC-123', 'San Jose', 'Revision de motor', '16-08-2022/13:00'],
      ]
    };
  }

}
