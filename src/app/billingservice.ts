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
      headerRow: [ 'Número Cita','Nombre Cliente', 'Apellidos Cliente','Cédula Cliente','Placa', 'Servicio','Sucursal','Fecha/Hora','Precio','Nombre Empleado','Apellidos Empleado','Cédula Empleado'],
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