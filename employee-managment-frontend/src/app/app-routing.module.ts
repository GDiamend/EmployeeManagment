import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
{path : 'employees', component : EmployeeListComponent},
{path : '', redirectTo: 'employees', pathMatch:'full'},
{path : 'add-employee', component : AddEmployeeComponent},
{path : 'employee-update/:id', component : UpdateEmployeeComponent},
{path : 'employee-details/:id', component : EmployeeDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
