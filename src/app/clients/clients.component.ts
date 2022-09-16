import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import { ClientsService } from 'app/clients.service';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {
  public tableData1

  constructor(private _clientsService:ClientsService, private api:ApiService) { }

  public passClient(index: number) {
    this._clientsService.setClient(this._clientsService.getClients()[index])
  }

  public elimClient(index: number) {
    console.log('trying to eliminate client: ' + index)
  }
  
  ngOnInit() {
    this.api.gTableClients().subscribe(data => {
      console.log(data)
      this._clientsService.setTable(data)
    });
    this.tableData1 = this._clientsService.getTable();
  }

}
