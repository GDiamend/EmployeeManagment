package com.employee.managment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.employee.managment.models.Employee;
import com.employee.managment.repository.RepositoryEmployee;
import java.util.*;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	@Autowired
	private RepositoryEmployee repositoryEmployee;

	//This method shows the employee's list 
	@GetMapping("/employees")
	public List<Employee> getEmployeeList() {
		return this.repositoryEmployee.findAll();
	}
	
	//This method saves the employee in the DB
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee) {
		return repositoryEmployee.save(employee);
	}
}
