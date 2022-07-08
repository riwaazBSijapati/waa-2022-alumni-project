package com.finalproject.alumnimanagement;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class AlumniManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(AlumniManagementApplication.class, args);
    }
    @Bean
    public ModelMapper createModelMapper() {
        return new ModelMapper();
    }




}
