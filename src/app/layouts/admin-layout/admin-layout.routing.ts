import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { BillingComponent } from '../../billing/billing.component';
import { ClientsComponent } from '../../clients/clients.component';
import { WorkersComponent } from '../../workers/workers.component';
import { AppointmentsComponent } from '../../appointments/appointments.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',           component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'billing',        component: BillingComponent },
    { path: 'clients',        component: ClientsComponent },
    { path: 'workers',        component: WorkersComponent },
    { path: 'appointments',   component: AppointmentsComponent },
];
