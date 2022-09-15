import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { BillingComponent } from '../../billing/billing.component';
import { ClientsComponent } from '../../clients/clients.component';
import { WorkersComponent } from '../../workers/workers.component';
import { AppointmentsComponent } from '../../appointments/appointments.component';
import { AddClientComponent } from '../../addClient/addClient.component';
import { EditClientComponent } from '../../editClient/editClient.component';
import { AddWorkerComponent } from '../../addWorker/addWorker.component';
import { EditWorkerComponent } from '../../editWorker/editWorker.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',           component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'billing',        component: BillingComponent },
    { path: 'clients',        component: ClientsComponent },
    { path: 'add-client',      component: AddClientComponent },
    { path: 'edit-client',     component: EditClientComponent },
    { path: 'workers',        component: WorkersComponent },
    { path: 'add-worker',      component: AddWorkerComponent },
    { path: 'edit-worker',     component: EditWorkerComponent },
    { path: 'appointments',   component: AppointmentsComponent },
];