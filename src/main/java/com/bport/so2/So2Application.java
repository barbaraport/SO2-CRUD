package com.bport.so2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;

import com.bport.so2.model.Employee;
import com.bport.so2.repository.EmployeeRepository;

@SpringBootApplication
public class So2Application {
	
	@Autowired
	EmployeeRepository employeeRepository;

	public static void main(String[] args) {
		SpringApplication.run(So2Application.class, args);
	}

	@EventListener(ContextRefreshedEvent.class)
	public void addFirstEmployee() { 
		
		Employee employee = new Employee();
		
		employee.setName("Bárbara");
		employee.setLastName("Port");
		employee.setHobby("Assistir séries e ler.");
		
		employeeRepository.save(employee);
	}
}
