import { Injectable } from '@angular/core';
import { ClientsListI } from './models/clientslist.interface';
import { WorkersListI } from './models/workerslist.interface';
import { AppointmentsListI } from './models/appointmentslist.interface';
import { ResponseI } from './models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

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
  gTableWorkers():Observable<WorkersListI[]>{
    let dir = this.url + "trabajador/lista"
    return this.http.get<WorkersListI[]>(dir)
  }
  gTableAppointments():Observable<AppointmentsListI[]>{
    let dir = this.url + "cita/lista"
    return this.http.get<AppointmentsListI[]>(dir)
  }

  addClient(client:ClientsListI):Observable<ResponseI>{
    console.log(client)
    let dir = this.url + "cliente/guardar"
    return this.http.post<ResponseI>(dir,client)
  }

  //cliente/guardar
  //cliente/editar
  //trabajador/guardar
  //trabajador/editar
  //cita/lista
  //cita/guardar
  //cita/editar

}
