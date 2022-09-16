import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { BillingComponent } from '../../billing/billing.component';
import { ClientsComponent } from '../../clients/clients.component';
import { WorkersComponent } from '../../workers/workers.component';
import { AppointmentsComponent } from '../../appointments/appointments.component';
import { AddClientComponent } from '../../addClient/addClient.component';
import { EditClientComponent } from '../../editClient/editClient.component';
import { ClientsService } from 'app/clients.service';
import { AddWorkerComponent } from '../../addWorker/addWorker.component';
import { EditWorkerComponent } from '../../editWorker/editWorker.component';
import { WorkersService } from 'app/workers.service';
import {NewAppointmentsComponent} from '../../appointments/newappointment.component';
import { PrebillingComponent } from 'app/billing/prebilling.component';
import { ModifyAppointmentsComponent } from 'app/appointments/modifyappointment.component';
import { BillingService } from 'app/billingservice';
import { CitaService } from 'app/citaservice';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    BillingComponent,
    ClientsComponent,
    WorkersComponent,
    AppointmentsComponent,
    AddClientComponent,
    EditClientComponent,
    AddWorkerComponent,
    EditWorkerComponent,
    NewAppointmentsComponent,
    PrebillingComponent,
    ModifyAppointmentsComponent,
    
  ],
  providers: [
    ClientsService,
    WorkersService,
    BillingService,
    CitaService,
  ]
})

export class AdminLayoutModule {}
