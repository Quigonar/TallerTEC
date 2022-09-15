import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'app/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {
  public tableData1

  constructor(public _clientsService:ClientsService) { }

  public passClient(index: number) {
    this._clientsService.setClient(this._clientsService.getClients()[index])
  }

  public elimClient(index: number) {
    console.log('trying to eliminate client: ' + index)
  }
  
  ngOnInit() {
    this.tableData1 = this._clientsService.getTable();
  }

}
