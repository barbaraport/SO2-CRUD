package com.bport.so2.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@GetMapping("/getEmployee/{id}")
	Optional<Employee> employee (@PathVariable Long id) {
		return employeeRepository.findById(id);
	}
	
	@PostMapping("/addEmployee")
	HttpStatus addEmployee (@RequestBody Employee employee) {
		employeeRepository.save(employee);
		return HttpStatus.OK;
	}
	
	@DeleteMapping("/deleteEmployee/{id}")
	HttpStatus deleteEmployee (@PathVariable Long id) {
		employeeRepository.deleteById(id);
		return HttpStatus.OK;
	}
	
	@PutMapping("/editEmployee/{id}")
	void editEmployee (@PathVariable Long id, @RequestBody Employee employeeUpdated) {
		
		employeeRepository.findById(id)
		.map(employee -> {
			employee.setName(employeeUpdated.getName());
			employee.setLastName(employeeUpdated.getLastName());
			employee.setHobby(employeeUpdated.getHobby());
			employeeRepository.save(employee);
			return HttpStatus.OK;
		})
		.orElseThrow();
	}
}
