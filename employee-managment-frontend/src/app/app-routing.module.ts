import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
{path : 'employees', component : EmployeeListComponent},
{path : '', redirectTo: 'employees', pathMatch:'full'},
{path : 'add-employee', component : AddEmployeeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
