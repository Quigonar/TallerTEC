import { Injectable } from '@angular/core';
import { ClientsListI } from './models/clientslist.interface';
import { WorkersListI } from './models/workerslist.interface';
import { AppointmentsListI } from './models/appointmentslist.interface';
import { ResponseI } from './models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { BillListI } from './models/billlist.interface';
import { ServiceI } from './models/service.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "https://localhost:7102/"

  constructor(private http:HttpClient) { }

  gTableClients():Observable<ClientsListI[]>{
    let dir = this.url + "cliente/lista"
    return this.http.get<ClientsListI[]>(dir)
  }
  addClient(client:ClientsListI):Observable<ResponseI>{
    //console.log(client)
    let dir = this.url + "cliente/guardar"
    return this.http.post<ResponseI>(dir,client)
  }

  editClientAPI(client:ClientsListI):Observable<ResponseI>{
    //console.log(client)
    let dir = this.url + "cliente/update"
    return this.http.post<ResponseI>(dir,client)
  }
  deleteClient(client:ClientsListI):Observable<ResponseI>{
    //console.log(client)
    let dir = this.url + "cliente/delete"
    return this.http.post<ResponseI>(dir,client)
  }

  gTableWorkers():Observable<WorkersListI[]>{
    let dir = this.url + "trabajador/lista"
    return this.http.get<WorkersListI[]>(dir)
  }
  addWorker(worker:WorkersListI):Observable<ResponseI>{
    //console.log(worker)
    let dir = this.url + "trabajador/guardar"
    return this.http.post<ResponseI>(dir,worker)
  }
  editWorkerAPI(worker:WorkersListI):Observable<ResponseI>{
    //console.log(worker)
    let dir = this.url + "trabajador/update"
    return this.http.post<ResponseI>(dir,worker)
  }
  deleteWorker(worker:WorkersListI):Observable<ResponseI>{
    //console.log(worker)
    let dir = this.url + "trabajador/delete"
    return this.http.post<ResponseI>(dir,worker)
  }

  gTableAppointments():Observable<AppointmentsListI[]>{
    let dir = this.url + "cita/lista"
    return this.http.get<AppointmentsListI[]>(dir)
  }
  addAppointment(appointment:AppointmentsListI):Observable<ResponseI>{
    //console.log(appointment)
    let dir = this.url + "cita/guardar"
    return this.http.post<ResponseI>(dir,appointment)
  }
  editAppointmentAPI(appointment:AppointmentsListI):Observable<ResponseI>{
    //console.log(appointment)
    let dir = this.url + "cita/update"
    return this.http.post<ResponseI>(dir,appointment)
  }
  deleteAppointment(appointment:AppointmentsListI):Observable<ResponseI>{
    //console.log(appointment)
    let dir = this.url + "cita/delete"
    return this.http.post<ResponseI>(dir,appointment)
  }

  gTableInvoices():Observable<BillListI[]>{
    let dir = this.url + "factura/lista"
    return this.http.get<BillListI[]>(dir)
  }
  addInvoice(invoice:BillListI):Observable<ResponseI>{
    console.log(invoice)
    let dir = this.url + "factura/guardar"
    return this.http.post<ResponseI>(dir,invoice)
  }
}
