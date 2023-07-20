import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }

  updateEmployee(id:number){
    this.router.navigate(['employee-update', id]);
  }

  deleteEmployee(id:number){
    swal.fire({
      title : 'Are you sure?',
      text : 'Confirm if you want to delete this employee',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.employeeService.deleteEmployee(id).subscribe(data => {
          console.log(data);
          this.getEmployees();
          swal.fire('Employee deleted', "Employee has been deleted", 'success')
        })
      }
    })
  }

  seeDetails(id:number){
    this.router.navigate(['employee-details', id]);
  }
}