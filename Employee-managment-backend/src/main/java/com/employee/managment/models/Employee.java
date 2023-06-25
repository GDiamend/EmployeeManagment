package com.employee.managment.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "employee")
public class Employee {
	 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	@Column(name = "name", length = 60, nullable = false)
	private String name;
	@Column(name = "surname", length = 60, nullable = false)
	private String surname;
	@Column(name = "email", length = 60, nullable = false, unique = true)
	private String email;
	
	public Employee() {
		
	}
}