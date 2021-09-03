package com.bport.so2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bport.so2.model.Employee;
import com.bport.so2.repository.EmployeeRepository;

@RestController
public class EmployeeController {
	
	@Autowired
	EmployeeRepository employeeRepository;
	

	@GetMapping("/getAllEmployees")
	List<Employee> allEmployees () {
		return employeeRepository.findAll();
	}
}
