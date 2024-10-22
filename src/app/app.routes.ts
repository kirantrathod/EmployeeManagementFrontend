import { Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'edit/:id', component: UpdateEmployeeComponent },
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
];
