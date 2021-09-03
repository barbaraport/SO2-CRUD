package com.bport.so2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bport.so2.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
