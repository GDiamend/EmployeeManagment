import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[];

  ngOnInit(): void{
    this.employees = [{
      "id" : 1,
      "name" : "Bart",
      "surname" : "Simpson",
      "email" : "something@aol.com"
    },
    {
      "id" : 2,
      "name" : "Milhouse",
      "surname" : "Van Houten",
      "email" : "somethingelse@aol.com"
    }]
  }

}
