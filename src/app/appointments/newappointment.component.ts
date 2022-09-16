import { Component, OnInit } from '@angular/core';
import { CitaService } from 'app/citaservice';



@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrls: ['./newappointment.component.css']
})

export class NewAppointmentsComponent implements OnInit {

  newCita:string[];

  constructor(private _citaService:CitaService) { }

  public createnewapp(){
    var NameClientCita = document.getElementById("AppointmentNombre") as HTMLInputElement | null;
    var SurnameClientCita = document.getElementById("AppointmentApellidos") as HTMLInputElement | null;
    var CedulaClientCita = document.getElementById("AppointmentCedula") as HTMLInputElement | null;
    var PlacaClientCitas = document.getElementById("AppointmentPlaca") as HTMLInputElement | null;
    var FechayHoraCita = document.getElementById("AppointmentFechaHora") as HTMLInputElement | null;
    var SucursalCita = document.getElementById("AppointmentSucursal") as HTMLInputElement | null;
    var ServicioCita = document.getElementById("AppointmentServicio") as HTMLInputElement | null;
    var BackBut = document.getElementById("BackB") as HTMLInputElement | null;
    var AddButton = document.getElementById("AddB") as HTMLInputElement | null;
    
    if((CedulaClientCita.value=="")||(NameClientCita.value=="")||(SurnameClientCita.value=="")||(PlacaClientCitas.value=="")||(FechayHoraCita.value=="")||(SucursalCita.value=="")||(ServicioCita.value=="")){
      alert("Se deben de completar todas las casillas")
    }else{
      this.newCita[0]=String(this._citaService.IDNewCita);
      this._citaService.IDNewCita++;
      this.newCita[1]=NameClientCita.value;
      this.newCita[2]=SurnameClientCita.value;
      this.newCita[3]=CedulaClientCita.value;
      this.newCita[4]=PlacaClientCitas.value;
      this.newCita[6]=SucursalCita.value;
      this.newCita[5]=ServicioCita.value;
      this.newCita[7]=FechayHoraCita.value;
      this._citaService.appendCitas(this.newCita);
      NameClientCita.disabled=true;
      SurnameClientCita.disabled=true;
      CedulaClientCita.disabled=true;
      PlacaClientCitas.disabled=true;
      SucursalCita.disabled=true;
      ServicioCita.disabled=true;
      FechayHoraCita.disabled=true;
      AddButton.disabled=true;
      BackBut.innerHTML="Continuar";
      alert("Se ha agregado la cita,su número de cita es "+ this.newCita[0]+ " por favor presione continuar.");

    }

  }

  ngOnInit() { 
    this.newCita=["","","","","","","","",""]
  }

}
