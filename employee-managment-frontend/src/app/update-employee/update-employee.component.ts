import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id: number;

  constructor(private employeeService: EmployeeService, private router: Router, private route:ActivatedRoute) { };

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error))
  }

  backToList() {
    this.router.navigate(['/employees']);
    swal.fire('Updated employee', `The employee ${this.employee.name} has been succesfuly updated`, `success`);
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.backToList();
    }, error => console.log(error))
  }
}