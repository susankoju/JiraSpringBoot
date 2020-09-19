package com.s7.jiraSpringBoot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@RestController
public class JiraSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(JiraSpringBootApplication.class, args);
	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}
}
