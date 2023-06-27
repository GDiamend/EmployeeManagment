package com.employee.managment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.employee.managment.models.Employee;

@Repository
public interface RepositoryEmployee extends JpaRepository<Employee, Long>{

}
