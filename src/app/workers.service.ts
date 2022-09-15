import { Injectable } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})

export class WorkersService {
  public tableData: TableData;
  public worker: string[];

  constructor() { 
    this.tableData = {
      headerRow: [ 'First Name', 'Last Name', 'Phone Number', 'ID', 'Email', 'Address', 'City', 'Country', 'Username'],
      dataRows: [
          ['Marcos', 'González', '12345678', '123456789', 'asdf@gmail.com', 'Por ahi', 'San Jose', 'Costa Rica', 'username1'],
          ['David', 'De La Hoz', '12345678', '123456789', 'asdf@gmail.com', 'Por ahi', 'San Jose', 'Costa Rica', 'username2'],
          ['Kenichi', 'Hayakawa', '12345678', '123456789', 'asdf@gmail.com', 'Por ahi', 'San Jose', 'Costa Rica', 'username3'],
          ['Marcelo', 'Truque', '12345678', '123456789', 'asdf@gmail.com', 'Por ahi', 'San Jose', 'Costa Rica', 'username4'],
      ]
    }
  }
  
  getTable() {
    return this.tableData
    };
  getWorkers(){
    return this.tableData.dataRows
  };
  getWorker(){
    return this.worker
  };
  setWorker(trabaj: string[]){
    this.worker = trabaj
  };
}