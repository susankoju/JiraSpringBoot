package com.s7.jiraSpringBoot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.*;

@RestController
@SpringBootApplication()
@EntityScan(basePackages = "com.s7.jiraSpringBoot.Model")
@EnableJpaRepositories(basePackages = "com.s7.jiraSpringBoot.Repository")
public class JiraSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(JiraSpringBootApplication.class, args);
	}

	@GetMapping("/")
	public String index() {
		return String.format("Spring Boot Is Working...");
	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}
}
