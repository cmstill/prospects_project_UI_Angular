import { Routes } from '@angular/router';
import { ReceiversComponent } from './receivers/receivers.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
	{ path: 'receivers', component: ReceiversComponent },
	{ path: 'dashboard', component: DashboardComponent},
	{ path: '', redirectTo: '/receivers', pathMatch: 'full'}
]; // each route is set up here in an object with a path property that has a value of the route name and a then component property with a value of the componenet the route is tied to
