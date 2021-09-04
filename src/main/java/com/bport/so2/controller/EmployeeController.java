package com.bport.so2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@PostMapping("/addEmployee")
	HttpStatus addEmployee (@RequestBody Employee employee) {
		employeeRepository.save(employee);
		return HttpStatus.OK;
	}
}
