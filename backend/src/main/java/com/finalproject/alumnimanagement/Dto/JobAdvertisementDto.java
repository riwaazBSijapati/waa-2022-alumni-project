package com.finalproject.alumnimanagement.Dto;
import com.finalproject.alumnimanagement.Entity.Student;
import com.finalproject.alumnimanagement.Entity.Tag;
import lombok.Data;

import java.util.List;


@Data
public class JobAdvertisementDto {
    private int id;
    private String fisrtName;
    private String lastName;
    private float gpa;
    private boolean active;
    private String job_interess;
    private boolean is_deleted;
    private String description;
    private String benefits;
    private String file;
    private String state;
    private Student student;
    private List<Tag> tags;

}
