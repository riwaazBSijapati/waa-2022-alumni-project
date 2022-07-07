package com.finalproject.alumnimanagement.Dto;
import lombok.Data;


@Data
public class StudentDto {
    private int id;
    private String fisrtName;
    private String lastName;
    private float gpa;
    private boolean active;
    private String job_interess;
    private boolean is_deleted;

}
