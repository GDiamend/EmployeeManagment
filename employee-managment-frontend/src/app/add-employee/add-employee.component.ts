import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee: Employee = new Employee();

  constructor() { };

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.employee);
  }
}
