import { Injectable } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})

export class BillingService {
  public tableData: TableData;
  public Facturas: string[];


  constructor() { 
    this.tableData = {
      headerRow: [ 'Appointment #','Client Name', 'Client Surname','Client ID','License Plate', 'Service','Office','Date/Time','Price','Employee Name','Employee Surname','Employee ID'],
      dataRows: []
    }
  }
  
  getTable() {
    return this.tableData
    };
  getFactura(){
    return this.tableData.dataRows
  };
  appendFacturas(Nuevacita:string[]){
    this.tableData.dataRows.push(Nuevacita);
  }

}