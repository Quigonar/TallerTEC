import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public tableData1: TableData;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'Name', 'Phones', 'ID', 'Email', 'Addresses', 'Username'],
      dataRows: [
          ['Marcos González', '12345678', '123456789', 'asdf@gmail.com', 'Por ahi', 'username1'],
          ['David De La Hoz', '12345678', '123456789', 'asdf@gmail.com', 'Por ahi', 'username2'],
          ['Kenichi Hayakawa', '12345678', '123456789', 'asdf@gmail.com', 'Por ahi', 'username3'],
          ['Marcelo Truque', '12345678', '123456789', 'asdf@gmail.com', 'Por ahi', 'username4'],
      ]
    };
  }

}
