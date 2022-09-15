import { Injectable } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})

export class ClientsService {
  public tableData: TableData;
  public client: string[];

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
  getClients(){
    return this.tableData.dataRows
  };
  getClient(){
    return this.client
  };
  setClient(cliente: string[]){
    this.client = cliente
  };
}