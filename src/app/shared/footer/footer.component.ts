import { Component } from '@angular/core';
import { ApiService } from '../../api.service'

declare var $:any;

@Component({
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html'
})

export class FooterComponent{
    test : Date = new Date();
    
    constructor(private api:ApiService) { }

    clientRequest() {
        this.api.gTableClients().subscribe(data => {
          console.log(data)
          //mandar data a tabla de clientes
        });
      }
    workerRequest() {
    this.api.gTableWorkers().subscribe(data => {
        console.log(data)
        //mandar data a tabla de workers
    });
    }
    appointmentRequest() {
    this.api.gTableAppointments().subscribe(data => {
        console.log(data)
        //mandar data a tabla de appointments
    });
    }
}
