import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //This URL gets the whole employee list from backend
  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient : HttpClient) { }

  //This method return us the employee list from the URL attached to DB
  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
}
