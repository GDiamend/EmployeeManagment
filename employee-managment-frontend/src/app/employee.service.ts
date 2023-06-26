import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //This URL gets the whole employee list from backend
  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor() { }
}
