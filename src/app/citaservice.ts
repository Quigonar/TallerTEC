import { Injectable } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Injectable({
  providedIn: 'root'
})

export class CitaService {
  public tableData: TableData;
  public cita: string[];
  public IDNewCita: number;
  public lastindex:number;

  constructor() { 
    this.tableData = {
      headerRow: [ 'Número Cita','Nombre Cliente', 'Apellidos Cliente','Cédula Cliente','Placa', 'Servicio','Sucursal','Fecha/Hora'],
      dataRows: [
        ['123','Marcos','Gonzáles Araya','1-0098-1234','ABC-123', 'Revision de motor','San Pedro', '2019-03-12T11:42'],
        ['124','David', 'de la Hoz Agùirre','1-0420-0069','ABC-123', 'Revision de motor','Zapote','2022-08-10T21:49'],
        ['125','Kenichi', 'Hayakawa Bolaños', '2-0315-0756','ABC-123', 'Revision de motor','Alajuela', '2022-01-05T22:52'],
        ['126','Marcelo', 'Truque Montero','3-0536-0018','ABC-123', 'Revision de motor','Cartago' ,'2017-09-25T09:30'],
    ]
    }
    this.IDNewCita=0;
  }
  
  getTable() {
    return this.tableData
    };
  setCitas(newdata: string[]){
    this.tableData.dataRows[this.lastindex]=newdata;
  };
  getCitas(){
    return this.tableData.dataRows
  };
  getCita(){
    return this.cita
  };
  setCita(cliente: string[]){
    this.cita = cliente
  };
  appendCitas(Nuevacita:string[]){
    this.tableData.dataRows.push(Nuevacita);
  }

}