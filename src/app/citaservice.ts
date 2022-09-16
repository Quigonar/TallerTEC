import { Injectable } from '@angular/core';
import { AppointmentsListI } from './models/appointmentslist.interface';

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
      dataRows: []
    }
    this.IDNewCita=0;
  }
  
  getTable() {
    return this.tableData
    };
  setTable(citas:AppointmentsListI[]){
    this.tableData.dataRows = []
    for (var cita of citas) {
      this.tableData.dataRows.push([cita.AppointmentN,cita.ClientN,cita.ClientLN,cita.ClientID,cita.LicenseP,cita.Service,cita.Office,cita.DateTime]) 
    }
  }
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