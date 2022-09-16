import { Injectable } from '@angular/core';
import { ClientsListI } from './models/clientslist.interface';

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
      headerRow: [ 'First Name', 'Last Name', 'Phone Number', 'ID', 'Email', 'Address', 'City', 'Country', 'Username', 'Password'],
      dataRows: []
    }
  }
  
  getTable() {
    return this.tableData
  };
  setTable(clients:ClientsListI[]){
    this.tableData.dataRows = []
    for (var client of clients) {
      //console.log(client.PhoneNum)
      this.tableData.dataRows.push([client.FirstN,client.LastN,client.PhoneNum,client.ID,client.Email,client.Address,client.City,client.Country,client.Username,client.Password]) 
    }
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