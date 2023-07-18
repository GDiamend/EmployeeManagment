import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router:Router) { };

  ngOnInit(): void {
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.backToList();
    }, error => console.log(error));
  }

  backToList() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.addEmployee();
  }
}
